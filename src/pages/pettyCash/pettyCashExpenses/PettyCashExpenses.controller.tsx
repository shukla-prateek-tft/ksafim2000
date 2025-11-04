// MCFW-0601
import React from 'react';
import PettyCashExpensesUI from './PettyCashExpenses.render';
import { GlobalLoader } from '@/components';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { useEffect } from 'react';
import { showToastErrors } from '@/utils/commonHelper';
import {
  GetAccCardByServiceTypeApiResponse,
  GetCutPettyCashExpensesAPIResponse,
  GetProjectNoListApiResponse,
  GetServiceTypeByAccCardApiResponse,
  GetServiceTypeListApiResponse,
  GetServiceTypeListFilterType,
  insertCutPettyCashExpenseParamType,
  InsertCutPettyCashExpensesAPIResponse
} from './types';
import { GetAccCardsApiResponse } from '../invoice/enterInvoices/types';
import { toast } from 'react-toastify';

export const defaultFilterValues: Partial<GetServiceTypeListFilterType> = {
  Page: 1,
  Size: 10,
  SortColumn: '',
  SortType: '',
  SystemYear: null,
  Institution: null
};

const PettyCashExpenses = () => {
  const { user } = useAuth();
  let serviceTypeOptions: Array<{ label: string; value: number }> = [];
  let projectNoListOptions: Array<{ label: string | number; value: number | string }> = [];
  let acc_CardOptions: Array<{ label: string | number; value: number | string }> = [];

  // GetServiceTypeByAccCard
  const {
    state: {
      loading: getServiceTypeByAccCardLoading,
      isError: isGetServiceTypeByAccCardError,
      error: getServiceTypeByAccCardError,
      data: getServiceTypeByAccCardData
    },
    callService: getServiceTypeByAccCard
  } = useApiQuery<GetServiceTypeByAccCardApiResponse>(
    adminServices.mapping.getServiceTypeByAccCard as ServiceFn
  );

  useEffect(() => {
    if (isGetAccCardByServiceTypeError && getAccCardByServiceTypeError) {
      showToastErrors(getAccCardByServiceTypeError);
    }
  }, [isGetServiceTypeByAccCardError, getServiceTypeByAccCardError]);

  // GetAccCardByServiceType
  const {
    state: {
      loading: getAccCardByServiceTypeLoading,
      isError: isGetAccCardByServiceTypeError,
      error: getAccCardByServiceTypeError,
      data: getAccCardByServiceTypeData
    },
    callService: getAccCardByServiceType
  } = useApiQuery<GetAccCardByServiceTypeApiResponse>(
    adminServices.mapping.getAccCardByServiceType as ServiceFn
  );

  useEffect(() => {
    if (isGetAccCardByServiceTypeError && getAccCardByServiceTypeError) {
      showToastErrors(getAccCardByServiceTypeError);
    }
  }, [isGetAccCardByServiceTypeError, getAccCardByServiceTypeError]);

  const {
    state: {
      loading: getServiceTypeListsLoading,
      isError: isGetServiceTypeListsError,
      error: getServiceTypeListsError,
      data: getServiceTypeListsData
    },
    callService: getServiceTypeLists
  } = useApiQuery<GetServiceTypeListApiResponse>(
    adminServices.mapping.getServiceTypeLists as ServiceFn
  );

  useEffect(() => {
    if (isGetServiceTypeListsError && getServiceTypeListsError) {
      showToastErrors(getServiceTypeListsError);
    }
  }, [isGetServiceTypeListsError, getServiceTypeListsError]);

  const {
    state: {
      loading: getGetProjectNoListsLoading,
      isError: isGetProjectNoListsError,
      error: getProjectNoListsError,
      data: getProjectNoListsData
    },
    callService: getGetProjectNoLists
  } = useApiQuery<GetProjectNoListApiResponse>(
    adminServices.mapping.getGetProjectNoLists as ServiceFn
  );

  useEffect(() => {
    if (isGetProjectNoListsError && getProjectNoListsError) {
      showToastErrors(getProjectNoListsError);
    }
  }, [isGetProjectNoListsError, getProjectNoListsError]);

  useEffect(() => {
    const getServiceTypeParams = {
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    };
    const PettyCashDummyData = {
      Bank_Card_Number: 201,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    };
    const AccCardByServiceTypeDummyData = {
      Service_Type: 201,
      Project_No: 202,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    };
    const GetServiceTypeByAccCardDummyData = {
      Acc_Card: 121,
      Project_No: 201
    };

    getServiceTypeLists(getServiceTypeParams);
    getGetProjectNoLists(getServiceTypeParams);
    getCutPettyCashExpenses(PettyCashDummyData);
    getBankListServices(getServiceTypeParams);
    getAccCardByServiceType(AccCardByServiceTypeDummyData);
    getServiceTypeByAccCard(GetServiceTypeByAccCardDummyData);
  }, []);

  const {
    state: {
      loading: getCutPettyCashExpensesLoading,
      isError: isGetCutPettyCashExpensesError,
      error: getCutPettyCashExpensesError,
      data: getCutPettyCashExpensesData
    },
    callService: getCutPettyCashExpenses
  } = useApiQuery<GetCutPettyCashExpensesAPIResponse>(
    adminServices.mapping.getCutPettyCashExpenses as ServiceFn
  );

  useEffect(() => {
    if (isGetCutPettyCashExpensesError && getCutPettyCashExpensesError) {
      showToastErrors(getCutPettyCashExpensesError);
    }
  }, [isGetCutPettyCashExpensesError, getCutPettyCashExpensesError]);

  const {
    state: { loading: getBankListLoading, data: getBankListResponse },
    callService: getBankListServices
  } = useApiQuery<GetAccCardsApiResponse>(adminServices.mapping.getAccCards as ServiceFn);

  //Insert Cut Petty Cash Expenses
  const {
    state: {
      loading: insertCutPettyCashExpensesLoading,
      isSuccess: isInsertCutPettyCashExpenseSuccess,
      data: insertCutPettyCashExpenseResponse,
      isError: InsertCutPettyCashExpenseError,
      error: insertCutPettyCashExpenseError
    },
    callService: insertCutPettyCashExpenseSerivce,
    resetServiceState: resetInsertCutPettyCashExpenseState
  } = useApiQuery<InsertCutPettyCashExpensesAPIResponse, insertCutPettyCashExpenseParamType>(
    adminServices.mapping
      .insertCutPettyCashExpenseSerivce as ServiceFn<insertCutPettyCashExpenseParamType>
  );

  useEffect(() => {
    if (isInsertCutPettyCashExpenseSuccess && insertCutPettyCashExpenseResponse) {
      toast.success(insertCutPettyCashExpenseResponse?.message);
    }
    if (InsertCutPettyCashExpenseError && insertCutPettyCashExpenseError) {
      showToastErrors(insertCutPettyCashExpenseError?.message);
      resetInsertCutPettyCashExpenseState();
    }
  }, [
    insertCutPettyCashExpenseResponse,
    insertCutPettyCashExpenseError,
    InsertCutPettyCashExpenseError,
    isInsertCutPettyCashExpenseSuccess
  ]);

  const handleSave = () => {
    const finalPayload: insertCutPettyCashExpenseParamType = {
      systemYear: 2025,
      institutionCode: 244111,
      cashExpenses: [
        {
          bank_card: 101,
          date_Aut: '2025-09-05T09:18:53.362Z',
          supp_Num: 501,
          invoice_Number: 1203,
          desc_Aut: 'Office supplies purchase',
          project_No: 111,
          service_Type: 2001,
          acc_Card: 212,
          debit: 5000,
          service_Subject: 'Stationery & printing',
          run_Number: 1
        }
      ]
    };

    insertCutPettyCashExpenseSerivce(finalPayload);
  };

  serviceTypeOptions = getServiceTypeListsData?.data?.map(item => ({
    label: item.desc_Aut,
    value: item.service_Type
  }));

  projectNoListOptions = getProjectNoListsData?.data?.map(item => ({
    label: item.project_Name ?? '',
    value: item.project_No ?? ''
  }));

  acc_CardOptions =
    getBankListResponse?.data?.map(item => ({
      label: item.descAut?.trim(),
      value: item.accCard
    })) ?? [];

  return (
    <>
      <GlobalLoader
        showOnFullScreen
        loading={
          getServiceTypeListsLoading ||
          getGetProjectNoListsLoading ||
          getCutPettyCashExpensesLoading ||
          getBankListLoading ||
          insertCutPettyCashExpensesLoading ||
          getAccCardByServiceTypeLoading ||
          getServiceTypeByAccCardLoading
        }
      />

      <PettyCashExpensesUI
        projectNoListOptions={projectNoListOptions}
        serviceTypeOptions={serviceTypeOptions}
        acc_CardOptions={acc_CardOptions}
        getCutPettyCashExpensesData={getCutPettyCashExpensesData}
        handleSave={handleSave}
      />
    </>
  );
};

export default PettyCashExpenses;
