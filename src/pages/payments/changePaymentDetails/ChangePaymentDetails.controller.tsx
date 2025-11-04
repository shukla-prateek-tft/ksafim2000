//  MCFW-1328
import React from 'react';
import { useEffect, useState } from 'react';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import ChangePaymentDetailsUI from './ChangePaymentDetails.render';
import { DialogBox } from '@/ui/DialogBox';
import classes from './ChangePaymentDetails.module.scss';
import { useApiQuery, useAuth } from '@/hooks';
import { ApiState, ServiceFn } from '../type';
import { adminServices } from '@/services';
import { showToastErrors } from '@/utils/commonHelper';
import {
  GetPaymentVoucherDetailsResponse,
  GetPaymentVoucherDetailsReturnType,
  PaymentVoucherDetail
} from './type';
import { UpdateCheckNumAndPaymentDatePayloadType } from '@/services/payment/types';

const ChangePaymentDetails = ({ isOpen, onClose }: any) => {
  const { user } = useAuth();
  const { instiYear, instiCode } = user || {};
  const [newCheckNum, setNewCheckNum] = useState<number | string>('');
  const [newPaymentDate, setNewPaymentDate] = useState<string | Date>('');

  const { state, callService: fetchPaymentDetails }: GetPaymentVoucherDetailsReturnType =
    useApiQuery<GetPaymentVoucherDetailsResponse>(
      adminServices.payments.getPaymentVoucherDetails as ServiceFn
    );

  const {
    loading: isPaymentDetailsLoading,
    isError: isPaymentDetailsError,
    error: paymentDetailsError,
    data: paymentDetailsResponse
  } = state as ApiState<{ data: PaymentVoucherDetail }>;

  const { act_No, insti, study_Year, check_Num, payment_Date, bank_Account, bank } =
    paymentDetailsResponse?.data || {};

  const {
    state: {},
    callService: getValidateNewCheckNumValueChange
  } = useApiQuery(adminServices.payments.ValidateNewCheckNumValueChange as ServiceFn);

  const {
    state: {},
    callService: getValidateNewPaymentDateValueChange
  } = useApiQuery(adminServices.payments.ValidateNewPaymentDateValueChange as ServiceFn);

  const {
    state: {},
    callService: onUpdateCheckNumAndPaymentDate
  } = useApiQuery(
    adminServices.payments
      .UpdateCheckNumAndPaymentDate as ServiceFn<UpdateCheckNumAndPaymentDatePayloadType>
  );

  useEffect(() => {
    if (isOpen) {
      const payload = {
        Act_No: 12456, // replace with actual value
        Check_Num: 8764, // replace with actual value
        Payment_Date: '', // replace with actual value
        Outcome: 7652742, // replace with actual value
        Page: 1, // replace with actual value
        Size: 10, // replace with actual value
        SortColumn: '', // replace with actual value
        SortType: '', // replace with actual value
        SystemYear: instiYear,
        Institution: instiCode
      };
      fetchPaymentDetails(payload);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isPaymentDetailsError && paymentDetailsError) {
      showToastErrors(paymentDetailsError);
    }
  }, [isPaymentDetailsError, paymentDetailsError]);

  useEffect(() => {
    if (newCheckNum) {
      getValidateNewCheckNumValueChange({
        New_Check_Num: newCheckNum,
        Insti: insti,
        Bank: bank || '',
        Bank_Account: bank_Account || ''
      });
    }
  }, [newCheckNum]);

  useEffect(() => {
    if (newPaymentDate) {
      getValidateNewPaymentDateValueChange({
        New_Payment_Date: newPaymentDate,
        SystemYear: instiYear,
        InstitutionCode: instiCode
      });
    }
  }, [newPaymentDate]);

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton
          onClick={() =>
            onUpdateCheckNumAndPaymentDate({
              systemYear: instiYear,
              institutionCode: instiCode,
              act_No: act_No,
              check_Num: check_Num,
              payment_Date: payment_Date,
              insti: insti,
              study_Year: study_Year,
              new_Check_Num: newCheckNum || 1234, //replace with actual value
              new_Payment_Date: newPaymentDate || '12-05-2025' //replace with actual value
            })
          }
        />
      </div>
    );
  };
  return (
    <DialogBox title="MCFW1328" isOpen={isOpen} onClose={onClose}>
      <ChangePaymentDetailsUI
        renderActionItems={renderActionItems}
        data={paymentDetailsResponse?.data}
        loading={isPaymentDetailsLoading}
        newPaymentDate={newPaymentDate}
        setNewPaymentDate={setNewPaymentDate}
        newCheckNum={newCheckNum}
        setNewCheckNum={setNewCheckNum}
      />
    </DialogBox>
  );
};

export default ChangePaymentDetails;
