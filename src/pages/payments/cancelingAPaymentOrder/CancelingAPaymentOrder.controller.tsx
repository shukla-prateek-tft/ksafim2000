// MCFW-0641
import { useApiQuery, useAuth } from '@/hooks';
import CancelingAPaymentOrderUI from './CancelingAPaymentOrder.render';
import { GlobalLoader } from '@/components';
import { useEffect } from 'react';
import { adminServices } from '@/services';
import { useLocation } from 'react-router-dom';
import {
  GetExpenceVoucherDetailsResponseType,
  GetExpenseDetailsInvoicesResponseType,
  GetPaymentDetalsResponseType,
  InputValueType
} from './types';
import { ServiceFn } from '../type';
import { showToastErrors } from '@/utils/commonHelper';
import { CancelPaymentVoucherPayloadType } from '@/services/payment/types';

const CancelingAPaymentOrder = () => {
  const { user } = useAuth();
  const location = useLocation();
  const data = location.state || {};

  const {
    state: {
      loading: cancelPaymentOrderLoading,
      data: cancelPaymentOrderData,
      error: cancelPaymentOrderError,
      isError: isCancelPaymentOrderError
    },
    callService: getCancelPaymentOrder
  } = useApiQuery<GetExpenceVoucherDetailsResponseType>(
    adminServices.payments.getDetailsToCancelPaymentOrder as ServiceFn
  );

  const {
    state: {
      data: paymentDetailsData,
      error: paymentDetailsError,
      isError: isPaymentDetailsError,
      loading: isPaymentDetailsLoading
    },
    callService: getPaymentDetails
  } = useApiQuery<GetPaymentDetalsResponseType>(
    adminServices.payments.getPaymentDetails as ServiceFn
  );

  const {
    state: {
      data: expenseDetailsInvoicesData,
      error: expenseDetailsInvoicesError,
      isError: isExpenseDetailsInvoicesError,
      loading: isExpenseDetailsInvoicesLoading
    },
    callService: getExpenseDetailsInvoices
  } = useApiQuery<GetExpenseDetailsInvoicesResponseType>(
    adminServices.payments.getExpenseDetailsInvoices as ServiceFn
  );

  const {
    state: {
      // data: cancelPaymentVoucherResponse,
      // error: cancelPaymentVoucherError,
      // isError: isCancelPaymentVoucherError,
      // loading: cancelPaymentVoucherLoading
    },
    callService: onCancelPaymentVoucher
  } = useApiQuery(
    adminServices.payments.CancelPaymentVoucher as ServiceFn<CancelPaymentVoucherPayloadType>
  );

  useEffect(() => {
    if (isExpenseDetailsInvoicesError && expenseDetailsInvoicesError) {
      showToastErrors(expenseDetailsInvoicesError);
    }
  }, [isExpenseDetailsInvoicesError, expenseDetailsInvoicesError]);

  useEffect(() => {
    if (isCancelPaymentOrderError && cancelPaymentOrderError) {
      showToastErrors(cancelPaymentOrderError);
    }
  }, [isCancelPaymentOrderError, cancelPaymentOrderError]);

  useEffect(() => {
    if (isPaymentDetailsError && paymentDetailsError) {
      showToastErrors(paymentDetailsError);
    }
  }, [isPaymentDetailsError, paymentDetailsError]);

  useEffect(() => {
    getPaymentDetails({
      Supp_Num: 13535, //replace with actual value
      Expense_Num: '', //replace with actual value
      Bank_Card: 232836673, //replace with actual value
      SystemYear: user?.instiYear,
      Institution: user?.instiCode,
      Page: 1, //replace with actual value
      Size: 10, //replace with actual value
      SortColumn: '',
      SortType: ''
    });
  }, [getPaymentDetails]);

  useEffect(() => {
    getExpenseDetailsInvoices({
      Supp_Num: 13535, //replace with actual value
      Expense_Num: '', //replace with actual value
      Bank_Card: 232836673, //replace with actual value
      SystemYear: user?.instiYear,
      Institution: user?.instiCode,
      Page: 1, //replace with actual value
      Size: 10, //replace with actual value
      SortColumn: '',
      SortType: ''
    });
  }, [getExpenseDetailsInvoices]);

  // Fetch payment details if data is available

  // Fetch data when page or limit changes
  useEffect(() => {
    getCancelPaymentOrder({
      Supp_Num: 13535, //replace with actual value
      Expense_Num: '', //replace with actual value
      Bank_Card: 232836673, //replace with actual value
      SystemYear: user?.instiYear,
      Institution: user?.instiCode,
      Page: 1, //replace with actual value
      Size: 10, //replace with actual value
      SortColumn: '',
      SortType: ''
    });
  }, [getCancelPaymentOrder]);

  const handleCancelPymentVoucher = (inputValue: InputValueType) => {
    const payload = {
      institution: user?.instiCode || 0,
      systemYear: user?.instiYear || 0,
      act_No: cancelPaymentOrderData?.data?.Act_No || 0,
      cancel_Invoice: true,

      ...inputValue
    };
    onCancelPaymentVoucher(payload);
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={cancelPaymentOrderLoading} />

      <CancelingAPaymentOrderUI
        cancelPaymentOrderData={cancelPaymentOrderData}
        paymentDetailsData={paymentDetailsData}
        expenseDetailsInvoicesData={expenseDetailsInvoicesData}
        handleCancelPymentVoucher={handleCancelPymentVoucher}
      />
    </>
  );
};

export default CancelingAPaymentOrder;
