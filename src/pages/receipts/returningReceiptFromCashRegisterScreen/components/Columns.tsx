import { useTranslation } from 'react-i18next';

export const ReceiptCashRegisterPaymentColumns = () => {
  const { t } = useTranslation('common');
  return [

    {
      key: 'payway',
      label: t('L_S_PAY_WAY'),
      width: '16%'
    },
    {
      key: 'paymentDate',
      label: t('L_PAYMENT_DATE'),
      width: '16%'
    },
    {
      key: 'checkNum',
      label: t('L_CHECK_NUM'),
      width: '16%'
    },
    {
      key: 'bank',
      label: t('L_BANK'),
      width: '16%'
    },
    {
      key: 'bankAccount',
      label: t('L_BANK_ACCOUNT'),
      width: '16%'
    },
    {
      key: 'income',
      label: t('L_INCOME'),
      width: '16%'
    },
  ];
};

export const ReceiptCashRegisterStudentsColumns = () => {
  const { t } = useTranslation('common');
  return [

    {
      key: 'student',
      label: t('L_STUDENT'),
      width: '16%'
    },
    {
      key: 'serviceType',
      label: t('L_SERVICE_TYPE'),
      width: '16%'
    },
    {
      key: 'accNo',
      label: t('L_ACC_NO'),
      width: '16%'
    },
    {
      key: 'credit',
      label: t('L_CREDIT'),
      width: '16%'
    }
  ];
};
