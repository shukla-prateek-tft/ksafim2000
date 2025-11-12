//MCFR-0607
import React from 'react';
import PettyCashTransactionReportUI from './PettyCashTransactionReport.render';
import { useNavigate } from 'react-router-dom';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { useCallback, useEffect, useState } from 'react';
import { debounce, showToastErrors } from '@/utils/commonHelper';
import {
  GetReport607DetailsFilterType,
  Report607APIResponse,
  ReportBody607,
  SortDirection
} from './types';
import { GlobalLoader } from '@/components';
import { toast } from 'react-toastify';

export const defaultFilterValues: Partial<GetReport607DetailsFilterType> = {
  F_Date: '',
  T_Date: '',
  Is_Select_Act: false,
  AccCard: 0,
  Temp_1: true,
  Temp_0: false,
  Page: 1,
  Size: 10,
  SortColumn: '',
  SortType: '',
  SystemYear: null,
  Institution: null
};

const PettyCashTransactionReport = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [filters, setFilters] = useState<Partial<GetReport607DetailsFilterType>>({
    ...defaultFilterValues
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    state: {
      loading: report607DetailsLoading,
      isError: isReport607DetailsError,
      error: report607DetailsError,
      isSuccess: isReport607DetailsSuccess,
      data: report607DetailsData
    },
    callService: getReport607DetailsService
  } = useApiQuery<Report607APIResponse>(adminServices.payments.getReport607Details as ServiceFn);

  useEffect(()=>{
    // call trg_execute
    // if it succeed do the following 
    // api call for $$acc_no and $$bank_acc
    // initialize the Bank card select to $$acc_no
    // select $$bank_acc in the bank card dropdown
    // call lp_retrieve
    // call gp_header 
  },[])

  function retrieve({ temp1, temp0, fDate, tDate, selectAct, bankCard }) {
  try {
    // 1️⃣ Build filter conditions (like $$select_items)
    let isTemp = 0;
    if (temp1) isTemp = temp0 ? 2 : 1;

    const filters = {
      is_temp: isTemp,
      f_date: fDate || null,
      t_date: tDate || null,
      select_act: selectAct || 0,
      bank_card: bankCard,
    };

    // 2️⃣ Fetch records (equivalent to retrieve/e "t711")
    // api call
    // const records = await getBankTransactions(filters);
    // if (!records) throw new Error("No records found");

    // 3️⃣ Compute balance (lp_calc_balance)
    // const balance = await calcBalance(records);

    // 4️⃣ Return data and status
    // const data = records.map((r, i) => ({ ...r, index: i + 1, balance }));
    // return { data, status: 1 };

  } catch (err) {
    toast.error(err);
    return { data: [], status: -1 };
  }
}

function calcBalance(records, { fromDate, isTemp, bankCard, insti, year }) {
  if (!records || records.length === 0) {
    return { records: [], totals: {} };
  }

  // ---- INITIAL VARIABLES ----
  let balance = 0;
  let total = 0;
  let totalTemp = 0;
  let totalSum = 0;
  let totalTempSum = 0;

  // ---- 1️⃣ Determine opening balance ----
  if (isTemp === 0 || fromDate) {
      const beforeFrom = fromDate ? new Date(r.date_aut) < new Date(fromDate) : false;

      let filter = {}

      if (isTemp === 0 && !fromDate) {
        filter = {
          isTemp:1,
          insti,
          study_year:year,
          bankCard
        }
      }
      if (fromDate && isTemp === 0) {
        filter = {
          date_aut: new Date(),
          fromDate,
          isTemp:1,
          insti,
          study_year:year,
          bankCard
        }
      }
      if (fromDate && isTemp !== 0) {
        filter = {
          date_aut: new Date(),
          fromDate,
          isTemp:1,
          insti,
          study_year:year,
          bankCard
        }
      }

    // make api call based on above filter to get balance
    // balance = await apiCall;
    let balance = 0
  }

  // ---- 2️⃣ Iterate over current records (simulate while $status>=0) ----
  const updatedRecords = records.map((r, idx) => {
    balance += (r.credit || 0) - (r.debit || 0);
    const updated = { ...r, balance };

    if (r.is_temp === 0) {
      totalTemp++;
      totalTempSum += r.debit || 0;
    } else {
      total++;
      totalSum += r.debit || 0;
    }

    return updated;
  });

  // ---- 3️⃣ Return results ----
  return {
    records: updatedRecords,
    totals: {
      total,
      totalTemp,
      totalSum,
      totalTempSum,
    },
    // openingBalance: balance - (records.reduce((sum, r) => sum + (r.credit - r.debit), 0)),
  };
}

  useEffect(() => {
    if (isReport607DetailsError && report607DetailsError) {
      showToastErrors(report607DetailsError);
    }
    if (isReport607DetailsSuccess && report607DetailsData) {
      toast.success(report607DetailsData?.message);
    }
  }, [
    isReport607DetailsError,
    report607DetailsError,
    isReport607DetailsSuccess,
    report607DetailsData
  ]);

  useEffect(() => {
    const dummyData = {
      F_Date: '2025-08-01',
      T_Date: '2025-08-27',
      Is_Select_Act: true,
      AccCard: 3158,
      Page: 1,
      Size: 20,
      SortColumn: 'date_Aut',
      SortType: 'Asc',
      SystemYear: 2025,
      Institution: 244111
    };

    getReport607DetailsService(dummyData);
    // getReport607DetailsService(filters);
  }, []);

  const handleApiSorting = (key: keyof ReportBody607, direction: SortDirection) => {
    const updatedFilters = {
      ...filters,
      SortColumn: key,
      SortType: direction
    };
    getReport607DetailsService({
      ...updatedFilters,
      Page: currentPage,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
    setFilters(updatedFilters);
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    getReport607DetailsService({
      ...filters,
      Page: page,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
  };

  const debouncedApiCall = useCallback(
    debounce((apiParams: any) => {
      getReport607DetailsService(apiParams);
    }, 600),
    [] 
  );

  const handleChangeFilters = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value, type, checked } = event.target as HTMLInputElement;

    const finalValue = type === 'checkbox' ? checked : value;

    const updatedFilters = { ...filters, [id]: finalValue };
    setFilters(updatedFilters);
    setCurrentPage(1);
    debouncedApiCall({
      ...updatedFilters,
      Page: 1,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
  };

  const handleDateChange = (date: Date | string | null, id: string) => {
    const dateValue = date instanceof Date ? date.toISOString() : date;
    const updatedFilters = { ...filters, [id]: dateValue };
    setFilters(updatedFilters);
    setCurrentPage(1);
    debouncedApiCall({
      ...updatedFilters,
      Page: 1,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
  };

  const handleCleanFilters = () => {
    setFilters(defaultFilterValues);
    // call retrieve function 
    setCurrentPage(1);
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={report607DetailsLoading} />
      <PettyCashTransactionReportUI
        data={report607DetailsData?.data}
        handleApiSorting={handleApiSorting}
        handlePagination={handlePagination}
        // pagination={report607DetailsData?.data.metaInfo}
        handleChangeFilters={handleChangeFilters}
        printedBy={user.userName}
        filters={filters}
        handleCleanFilters={handleCleanFilters}
        handleDateChange={handleDateChange}
      />
    </>
  );
};

export default PettyCashTransactionReport;
