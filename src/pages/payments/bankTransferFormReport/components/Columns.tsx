import { useTranslation } from 'react-i18next';
import type { TableColumnType } from '@/pages/type';
import type { BankTransferFormReportRow } from '../type';
export const BankTransferFormReportColumn = (): TableColumnType<BankTransferFormReportRow>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'record_Number',
      label: '#',
      width: '5%'
    },
    {
      key: 'act_No',
      label: t('L_ACT_NO'),
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
      width: '10%'
    },
    {
      key: 'supp',
      label: t('L_SUPP_NUM'),
      width: '10%'
    },
    {
      key: 'supp_Name',
      label: t('L_SUPP_NAME'),
      width: '20%'
    },
    {
      key: 'sum_Aut',
      label: t('L_MONEY_AMNT'),
      width: '10%'
    }
  ];
};
