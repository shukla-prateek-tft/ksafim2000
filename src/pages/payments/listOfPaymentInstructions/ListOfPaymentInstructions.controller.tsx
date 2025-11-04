// MCFW-1327
import ListOfPaymentInstructionsUI from './ListOfPaymentInstructions.render';
import { BackToPageButton, Button, DetailButton, SearchButton } from '@/components/commonButtons';
import { useTranslation } from 'react-i18next';
import classes from './ListOfPaymentInstructions.module.scss';
import { CustomRowRenderType, ServiceFn, SortDirection } from '../type';
import { GetUpdateCheckInPaymentDetailsParamsType } from '@/services/payment/types';
import { useEffect, useState } from 'react';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { getFormatedDate, getInputPattern, getLengthPattern } from '@/utils/commonHelper';
import { Input } from '@/ui/Input';
import { PaymentRecord, PaymentsApiResponse } from './types';

const defaultFilterValues: GetUpdateCheckInPaymentDetailsParamsType = {
  From_Pay_Date: '',
  To_Pay_Date: '',
  From_Check_Num: undefined,
  FromInvoice: undefined,
  To_Check_Num: undefined,
  Supp_Num: undefined,
  From_Act_No: undefined,
  To_Act_No: undefined,
  Curr_Year: false,
  Page: 1,
  Size: 15,
  SortColumn: '',
  SortType: SortDirection.Asc,
  SystemYear: '',
  Institution: ''
};

const ListOfPaymentInstructions = () => {
  const { t } = useTranslation('common');
  const [filters, _setFilters] = useState(defaultFilterValues);
  const [isSuppOrderButtonDim, setIsSuppOrderButtonDim] = useState<boolean>(false);
  const { user } = useAuth();

  const apiparams = {
    ...filters,
    SystemYear: Number(user?.instiYear),
    Institution: Number(user?.instiCode)
  };

  const {
    state: {
      loading: isCheckInPaymentDetailsLoading,
      data: checkInPaymentDetailsResponse,
      isSuccess: isCheckInPaymentDetailsSuccess,
      isError: isCheckInPaymentDetailsError,
      error: checkInPaymentDetailsError
    },
    callService: getUpdateCheckInPaymentDetailsService
  } = useApiQuery<PaymentsApiResponse>(
    adminServices.payments.getUpdateCheckInPaymentDetails as ServiceFn
  );

  const {
    state: { data: validateOnClickResponse },
    callService: validateOnClickSuppOrderService
  } = useApiQuery<{ success: boolean; message: string; data: { pP_1_Ctrl_button_Dim: boolean } }>(
    adminServices.payments.ValidateOnClickSuppOrder as ServiceFn
  );

  useEffect(() => {
    getUpdateCheckInPaymentDetailsService(apiparams);
  }, []);

  useEffect(() => {
    if (validateOnClickResponse?.data?.pP_1_Ctrl_button_Dim !== undefined) {
      setIsSuppOrderButtonDim(Boolean(validateOnClickResponse.data.pP_1_Ctrl_button_Dim));
    }
  }, [validateOnClickResponse]);

  const handlePagination = (page: number) => {
    getUpdateCheckInPaymentDetailsService({ ...apiparams, Page: page });
  };

  const customRowRenderer: CustomRowRenderType<PaymentRecord> = (key, row) => {
    switch (key) {
      case 'act_No':
        return (
          <Input
            type="text"
            pattern={getInputPattern(7)}
            value={row?.act_No}
            orientation="horizontal"
            size="fullWidth"
          />
        );
      case 'payment_Date':
        return (
          <Input
            value={getFormatedDate(row?.payment_Date)}
            orientation="horizontal"
            size="fullWidth"
          />
        );
      case 'pay_Date':
        return (
          <Input value={getFormatedDate(row?.pay_Date)} orientation="horizontal" size="fullWidth" />
        );

      case 'supp_Num':
        return (
          <div className={classes.rowContainer}>
            <Input
              type="number"
              maxLength={10}
              pattern={getLengthPattern(10)}
              value={row?.supp_Num}
              orientation="horizontal"
              size="fullWidth"
            />
            <Input disabled value={row?.name} orientation="horizontal" size="fullWidth" />
          </div>
        );
      case 'outcome':
        return (
          <Input
            maxLength={11}
            pattern={getInputPattern(11)}
            value={row?.outcome}
            orientation="horizontal"
            type="amount"
            size="fullWidth"
          />
        );
      case 'supp_Order':
        return (
          <Input
          maxLength={5}
          value={row?.supp_Order || ''}
          orientation="horizontal"
          type="number"
          onFocus={() =>
            validateOnClickSuppOrderService({
              Payment_Date: row?.payment_Date || new Date().toISOString(),
              SystemYear: Number(user?.instiYear),
              InstitutionCode: Number(user?.instiCode)
            })
          }
          size="fullWidth"
        />
        );
      default:
        return (
          <div className={classes.rowContainer}>
            <Input value={row?.[key]} orientation="horizontal" />
          </div>
        );
    }
  };
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <Button title={t('L_MCFW0615')} disabled={isSuppOrderButtonDim}   onClick={() => {
  }} />
        <SearchButton />
        <DetailButton />
        <BackToPageButton />
      </div>
    );
  };
  return (
    <ListOfPaymentInstructionsUI
      renderActionItems={renderActionItems}
      customRowRenderer={customRowRenderer}
      data={checkInPaymentDetailsResponse}
      handlePagination={handlePagination}
    />
  );
};

export default ListOfPaymentInstructions;
