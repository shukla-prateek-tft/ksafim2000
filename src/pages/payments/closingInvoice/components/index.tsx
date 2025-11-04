import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { ClosingCheckInvoiceLpHbnOpen, ClosingCheckInvoiceLpOpen } from '../types';

export const ListofGefenColumn = ():TableColumnType<ClosingCheckInvoiceLpHbnOpen>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t(''),
      width: '10%'
    },
    {
      key: 'act_No',
      label: t('L_EXPENSE_NUM'),
      width: '20%'
    },
    {
      key: 'date_Aut',
      label: t('L_MCFW1372_CELL_3'),
      width: '20%'
    },
    {
      key: 'student',
      label: t('L_NS_INVOICE'),
      width: '20%'
    },
    {
      key: 'outcome_Sum',
      label: t('L_Amount'),
      width: '20%'
    }
  ];
};
export const ListofGefenColumn2 = ():TableColumnType<ClosingCheckInvoiceLpOpen>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t(''),
      width: '10%'
    },
    {
      key: 'act_No',
      label: t('L_PAYMENT'),
      width: '15%'
    },
    {
      key: 'payment_Date',
      label: t('L_PAYMENT_DATE'),
      width: '15%'
    },
    {
      key: 'bank',
      label: t('L_BANK'),
      width: '15%'
    },
    {
      key: 'bank_Account',
      label: t('L_BANK_ACCOUNT'),
      width: '15%'
    },
    {
      key: 'check_Num',
      label: t('L_CHECK_NUM'),
      width: '15%'
    },
    {
      key: 'outcome',
      label: t('L_Amount'),
      width: '15%'
    }
  ];
};
