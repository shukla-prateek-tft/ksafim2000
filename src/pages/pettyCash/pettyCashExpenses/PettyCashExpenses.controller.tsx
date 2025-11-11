// MCFW-0601
import React, { useState } from 'react';
import PettyCashExpensesUI from './PettyCashExpenses.render';
import { GlobalLoader } from '@/components';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { useEffect } from 'react';
import {
  convertPrevYearAug31,
  getDateOnly,
  getInstiYearAug31,
  getKalendarYearDateRange,
  getPrevYearAugust15,
  getPrevYearSeptemberFirst,
  gp_check_date,
  isFutureDate,
  showToastErrors
} from '@/utils/commonHelper';
import {
  GetAccCardByServiceTypeApiResponse,
  GetCutPettyCashExpensesAPIResponse,
  GetProjectNoListApiResponse,
  GetServiceTypeByAccCardApiResponse,
  GetServiceTypeListApiResponse,
  GetServiceTypeListFilterType,
  insertCutPettyCashExpenseParamType,
  InsertCutPettyCashExpensesAPIResponse,
  TransactionDetailsType
} from './types';
import { GetAccCardsApiResponse } from '../invoice/enterInvoices/types';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { RxCrossCircled } from 'react-icons/rx';
import { useFocusFirstInvalidField } from '@/hooks/useFocusFirstInvalidField';

export const defaultFilterValues: Partial<GetServiceTypeListFilterType> = {
  Page: 1,
  Size: 10,
  SortColumn: '',
  SortType: '',
  SystemYear: null,
  Institution: null
};

const PettyCashExpenses = () => {
  const { user, toggleFlags } = useAuth();
  const { focusFirstInvalidField } = useFocusFirstInvalidField();
  const { t } = useTranslation('common');
  let serviceTypeOptions: Array<{ label: string; value: number }> = [];
  let projectNoListOptions: Array<{ label: string | number; value: number | string }> = [];
  let acc_CardOptions: Array<{ label: string | number; value: number | string }> = [];
  const [transactionDetails, setTransactionDetails] = useState<TransactionDetailsType>({
    supp: null,
    date_Aut: new Date()
  });
  const [dateAutFlag, setDateAutFlag] = useState(false);
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

    // getServiceTypeLists(getServiceTypeParams);
    // getGetProjectNoLists(getServiceTypeParams);
    // getCutPettyCashExpenses(PettyCashDummyData);
    // getBankListServices(getServiceTypeParams);
    // getAccCardByServiceType(AccCardByServiceTypeDummyData);
    // getServiceTypeByAccCard(GetServiceTypeByAccCardDummyData);
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
    setDateAutFlag(true);
    if (transactionDetails?.date_Aut && validateTransactionDate(transactionDetails?.date_Aut)) {
      return;
    }
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

    // insertCutPettyCashExpenseSerivce(finalPayload);
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

  const handleDateChange = (date: Date | string | null, fieldName: string) => {
    setDateAutFlag(true);
    setTransactionDetails(prev => ({
      ...prev,
      [fieldName]: date ? date : null
    }));
  };

  const validateTransactionDate = (transactionDate: string | Date) => {
    const normalizeSelectDate = getDateOnly(new Date(transactionDate));
    //dummy api data
    const user2 = {
      instiYear: '2025',
      instiCode: '244111',
      kalendarYear: '2025',
      account_year_to: '2026-03-23'
    };
    const get_finance_year_Responce = 1;
    const get_hoz_kupa_ktana_card = '';

    if (normalizeSelectDate) {
      if (get_finance_year_Responce == 1) {
        const { kalendarYearStartDate, kalendarYearEndDate } = getKalendarYearDateRange(
          user2.kalendarYear
        );

        // 1/jan/kalendarYear - selected date must be - 31/12/kalendarYear
        if (
          !normalizeSelectDate ||
          normalizeSelectDate < kalendarYearStartDate ||
          normalizeSelectDate > kalendarYearEndDate
        ) {
          console.log('error-1');
          toggleFlags({
            showValidationError: true,
            errorData: {
              message: `${t(
                'validationErrorForKalenderYear'
              )} ${`${t('yearStartDate')}${user.instiYear} - ${t('yearEndDate')}${user.instiYear} `}`,
              dialogTitle: `${t('errorTitle')}-${user.hebrewYear}`,
              confirmText: t('confirmText'),
              confirmCallback: () => focusFirstInvalidField('date_Aut')
            }
          });
          return true; // Validation failed
        }
      } else {
        const { d1, d2 } = gp_check_date(user2.account_year_to);

        // d2 - date must be - d1
        if (!normalizeSelectDate || normalizeSelectDate > d1 || normalizeSelectDate < d2) {
          //error- message $text(E_119)
          console.log('error-2');
          toggleFlags({
            showValidationError: true,
            errorData: {
              message: `${t(
                'validationErrorForKalenderYear'
              )} ${`${t('yearStartDate')}${user.instiYear} - ${t('yearEndDate')}${user.instiYear} `}`,
              dialogTitle: `${t('errorTitle')}-${user.hebrewYear}`,
              confirmText: t('confirmText'),
              confirmCallback: () => focusFirstInvalidField('date_Aut')
            }
          });
          // return true;
          //ange badhne do
        }
      }

      if (get_hoz_kupa_ktana_card != '' || get_hoz_kupa_ktana_card != 0) {
        const oneSepPrevYear = getPrevYearSeptemberFirst(user2.instiYear);

        // date must be grater than 1/sep/prev year
        if (!normalizeSelectDate || normalizeSelectDate < oneSepPrevYear) {
          //error message `Date must be grater than ${oneSepPrevYear.toLocaleDateString()}`
          //block
          console.log('error-3');
          toggleFlags({
            showValidationError: true,
            errorData: {
              message: `${t(
                'validationErrorForKalenderYear'
              )} ${`${t('yearStartDate')}${user.instiYear} - ${t('yearEndDate')}${user.instiYear} `}`,
              dialogTitle: `${t('errorTitle')}-${user.hebrewYear}`,
              confirmText: t('confirmText'),
              confirmCallback: () => focusFirstInvalidField('date_Aut')
            }
          });
          return true; // Validation failed
        }
      } else {
        const fifteenAugustPreYear = getPrevYearAugust15(user2.instiYear);
        // date must be grater than 15/aug/prev year
        if (!normalizeSelectDate || normalizeSelectDate < fifteenAugustPreYear) {
          //error message `Date must be grater than ${fifteenAugustPreYear.toLocaleDateString()}`
          console.log('error-4');
          toggleFlags({
            showValidationError: true,
            errorData: {
              message: `${t(
                'validationErrorForKalenderYear'
              )} ${`${t('yearStartDate')}${user.instiYear} - ${t('yearEndDate')}${user.instiYear} `}`,
              dialogTitle: `${t('errorTitle')}-${user.hebrewYear}`,
              confirmText: t('confirmText'),
              confirmCallback: () => focusFirstInvalidField('date_Aut')
            }
          });
          return true; // Validation failed //block
        }
      }

      const { d1, d2 } = gp_check_date(user2.account_year_to);

      // d2 - date must be - d1
      if (!normalizeSelectDate || normalizeSelectDate > d1 || normalizeSelectDate < d2) {
        //error- message $text(E_119)
        console.log('error-5');
        toggleFlags({
          showValidationError: true,
          errorData: {
            message: `${t(
              'validationErrorForKalenderYear'
            )} ${`${t('yearStartDate')}${user.instiYear} - ${t('yearEndDate')}${user.instiYear} `}`,
            dialogTitle: `${t('errorTitle')}-${user.hebrewYear}`,
            confirmText: t('confirmText'),
            confirmCallback: () => focusFirstInvalidField('date_Aut')
          }
        });
        // return true;
        //ange badhne do
      }

      const instiYearAug31 = getInstiYearAug31(user2?.instiYear ?? '');
      // future date not accepted
      if (isFutureDate(normalizeSelectDate)) {
        // error message `Date cannot be Greater than ${tomorrowDate.toLocaleDateString()}`
        //block
        console.log('error-6');
        toggleFlags({
          showValidationError: true,
          errorData: {
            message: `${t(
              'validationErrorForKalenderYear'
            )} ${`${t('yearStartDate')}${user.instiYear} - ${t('yearEndDate')}${user.instiYear} `}`,
            dialogTitle: `${t('errorTitle')}-${user.hebrewYear}`,
            confirmText: t('confirmText'),
            confirmCallback: () => focusFirstInvalidField('date_Aut')
          }
        });
        return true; // Validation failed
      } else if (normalizeSelectDate && normalizeSelectDate > instiYearAug31) {
        console.log('error-7');
        // last date must be less than insti year aug 31
        toggleFlags({
          showValidationError: true,
          errorData: {
            message: `${t(
              'validationErrorForKalenderYear'
            )} ${`${t('yearStartDate')}${user.instiYear} - ${t('yearEndDate')}${user.instiYear} `}`,
            dialogTitle: `${t('errorTitle')}-${user.hebrewYear}`,
            confirmText: t('confirmText'),
            confirmCallback: () => focusFirstInvalidField('date_Aut')
          }
        });
        return true; // Validation failed // block
      }
    }
    return false; // Validation passed
  };
  useEffect(() => {
    if (dateAutFlag) {
      if (transactionDetails?.date_Aut && validateTransactionDate(transactionDetails?.date_Aut)) {
        return;
      }
    }
  }, [transactionDetails.date_Aut]);

  const handleValidation = () => {
    if (validateTransactionDate(transactionDetails?.date_Aut ?? '')) {
      return;
    }
  };
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
        transactionDetails={transactionDetails}
        handleDateChange={handleDateChange}
        handleValidation={handleValidation}
      />
    </>
  );
};

export default PettyCashExpenses;
