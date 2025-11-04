//MCFW-1214
import { useApiQuery, useAuth } from '@/hooks';
import ClosingInvoiceUI from './ClosingInvoice.render';
import { GlobalLoader } from '@/components';
import {
  ClosingCheckInvoiceLpHbnOpen,
  ClosingCheckInvoiceLpOpen,
  GetClosingInvoiceResponse,
  GetCreatingIncomeTaxFileParams
} from './types';
import { useEffect } from 'react';
import { showToastErrors } from '@/utils/commonHelper';
import { adminServices } from '@/services';
import { CustomRowRenderType, ServiceFn } from '../type';
import { Input } from '@/ui/Input';
import classes from './ClosingInvoice.module.scss';

const ClosingInvoice = () => {
  const { user } = useAuth();
  const {
    state: {
      data: ClosingInvoiceResponse,
      loading: isClosingInvoiceLoading,
      isError: isClosingInvoiceError,
      error: closingInvoiceError
    },
    callService: getCreatingIncomeTaxFile
  } = useApiQuery<GetClosingInvoiceResponse>(
    adminServices.payments.GetClosingChecksAgainstInvoices as ServiceFn
  );

  useEffect(() => {
    const params: GetCreatingIncomeTaxFileParams = {
      SuppNum: 144, // replace with actual supplier number
      ShowInvoice: '',
      Page: '1', // Default page number
      Size: '10', // Default size per page
      SortColumn: '',
      SortType: '',
      SystemYear: Number(user?.instiYear),
      Institution: Number(user?.instiCode)
    };

    getCreatingIncomeTaxFile(params);
  }, [user?.instiCode, user?.instiYear]);

  useEffect(() => {
    if (isClosingInvoiceError && closingInvoiceError) {
      showToastErrors(closingInvoiceError);
    }
  }, [isClosingInvoiceError, closingInvoiceError]);

  const customRowRendererOfClosingCheckInvoiceLpOpen: CustomRowRenderType<
    ClosingCheckInvoiceLpOpen
  > = (key, row) => {
    switch (key) {
      case 'L_Invoice_Number':
        return (
          <div className={classes.ListofGefenCell}>
            <Input type="checkbox" orientation="horizontal" checked />
          </div>
        );
      case 'act_No':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              value={row?.act_No}
              type="text"
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
      case 'payment_Date':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              type="text"
              value={row?.payment_Date}
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
      case 'bank':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              type="text"
              id="catalog_no"
              maxLength={16}
              value={row?.bank}
              variant="borderless"
            />
          </div>
        );
      case 'bank_Account':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              value={row?.bank_Account}
              type="text"
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
      case 'check_Num':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              value={row?.check_Num}
              type="text"
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
      case 'outcome':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              value={row?.outcome}
              type="text"
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
    }
  };

  const customRowRendererOfClosingCheckInvoiceLpHbnOpen: CustomRowRenderType<
    ClosingCheckInvoiceLpHbnOpen
  > = (key, row) => {
    switch (key) {
      case 'L_Invoice_Number':
        return (
          <div className={classes.ListofGefenCell}>
            <Input type="checkbox" orientation="horizontal" checked />
          </div>
        );
      case 'act_No':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              value={row?.act_No}
              type="text"
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
      case 'date_Aut':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              value={row?.date_Aut}
              type="text"
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
      case 'student':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              value={row?.student}
              type="text"
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
      case 'outcome_Sum':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              value={row?.outcome_Sum}
              type="text"
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
    }
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={isClosingInvoiceLoading} />

      <ClosingInvoiceUI
        data={ClosingInvoiceResponse?.data}
        customRowRendererOfClosingCheckInvoiceLpHbnOpen={
          customRowRendererOfClosingCheckInvoiceLpHbnOpen
        }
        customRowRendererOfClosingCheckInvoiceLpOpen={customRowRendererOfClosingCheckInvoiceLpOpen}
      />
    </>
  );
};

export default ClosingInvoice;
