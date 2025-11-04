import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { ExpenceDetailsInvoicesType, PaymentDetails } from '../types';

export const CentralizedCorrectionFirstColumn = (): TableColumnType<PaymentDetails>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'Pay_Way',
      label: t('L_PAY_WAY'),
      width: '16%'
    },
    {
      key: 'Bank',
      label: t('L_BANK'),
      width: '16%'
    },
    {
      key: 'Payment_Date',
      label: t('L_PAYMENT_DATE'),
      width: '16%'
    },
    {
      key: 'Bank_Account',
      label: t('L_BANK_ACC'),
      width: '16%'
    },
    {
      key: 'Check_Num',
      label: t('L_CHECK_NUM'),
      width: '16%'
    },
    {
      key: 'Outcome',
      label: t('L_MONEY_AMNT'),
      width: '16%'
    }
  ];
};

export const CentralizedCorrectionSecondColumn =
  (): TableColumnType<ExpenceDetailsInvoicesType>[] => {
    const { t } = useTranslation('common');
    return [
      {
        key: 'Student',
        label: t('L_INVOICE'),
        width: '16%'
      },
      {
        key: 'Acc_Act_Type',
        label: t('L_ACC_ACT_TYPE'),
        width: '16%'
      },
      {
        key: 'Service_Type',
        label: t('L_SERVICE_TYPE'),
        width: '16%'
      },
      {
        key: 'Acc_Card',
        label: t('L_ACC_NUM'),
        width: '16%'
      },
      {
        key: 'Outcome_Sum',
        label: t('L_OUTCOME'),
        width: '16%'
      },
      {
        key: 'Income_Sum',
        label: t('L_INCOME'),
        width: '16%'
      }
    ];
  };
