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
  Temp_1: false,
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
