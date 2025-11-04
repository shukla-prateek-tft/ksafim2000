import { useTranslation } from 'react-i18next';
import { TableColumnType } from '@/pages/type';
import { ReceiptAndPaymentBooksReportRow } from '../type';
export const ReceiptAndPaymentBooksReportColumn =
  (): TableColumnType<ReceiptAndPaymentBooksReportRow>[] => {
    const { t } = useTranslation('common');
    return [
      {
        key: 'act_No',
        label: t('L_ACT_NO'),
        width: '9%'
      },
      {
        key: 'payment_Date',
        label: t('L_PAYMENT_DATE'),
        width: '11%'
      },
      {
        key: 'bank',
        label: t('L_BANK'),
        width: '8%'
      },
      {
        key: 'bank_Account',
        label: t('L_BANK_ACCOUNT'),
        width: '12%'
      },
      {
        key: 'check_Num',
        label: t('L_CHECK_NUM'),
        width: '10%'
      },
      {
        key: 'pay_Way_Desc',
        label: t('L_PAY_WAY'),
        width: '12%'
      },
      {
        key: 'deposit_Date',
        label: t('L_DEPOSIT_DATE'),
        width: '11%'
      },
      {
        key: 'deposit_Num', // One element might be added
        label: t('L_DEPOSIT_NUM'),
        width: '10%'
      },

      {
        key: 'return_Status',
        label: t('L_RETURNED_CHECK'),
        width: '10%'
      },
      {
        key: 'bank_Returns',
        label: t('L_BANK_RETURNS_S'),
        width: '10%'
      },
      {
        key: 'payer_Name',
        label: t('L_PAYER'),
        width: '14%'
      },
      {
        key: 'sum_Aut',
        label: t('L_MONEY_AMNT'),
        width: '12%'
      }
    ];
  };
