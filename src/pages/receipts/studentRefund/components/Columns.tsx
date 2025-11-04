import { useTranslation } from 'react-i18next';

export const StudentRefundColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '30%'
    },
    {
      key: 'code2',
      label: t('V_CLASS_CODE'),
      width: '15%'
    },
    {
      key: 'code3',
      label: t('L_SERVICE_TYPE'),
      width: '20%'
    },
    {
      key: 'code4',
      label: t('L_ACC_NUM'),
      width: '15%'
    },
    {
      key: 'code5',
      label: t('L_MONEY_AMNT'),
      width: '20%'
    }
  ];
};

export const StudentRefundSecondColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_PAY_WAY'),
      width: '20%'
    },
    {
      key: 'code2',
      label: t('L_PAYMENT_DATE'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_BANK'),
      width: '20%'
    },
    {
      key: 'code4',
      label: t('L_BANK_ACCOUNT'),
      width: '10%'
    },
    {
      key: 'code5',
      label: t('L_CHECK_NUM'),
      width: '20%'
    },
    {
      key: 'code5',
      label: t('L_MONEY_AMNT'),
      width: '20%'
    }
  ];
};
