import { useTranslation } from 'react-i18next';
export const PayerAccountStatusTopColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '12.5%',
    },
    {
      key: 'code2',
      label: t('L_NAME'),
      width: '12.5%',
    },
    {
      key: 'code3',
      label: t('L_CLASS_CODE'),
      width: '12.5%',
    },
    {
      key: 'code4',
      label: t('L_SERVICE_TYPE'),
      width: '12.5%',
    },
    {
      key: 'code5',
      label: t('V_DEBIT'),
      width: '12.5%',
    },
    {
      key: 'code6',
      label: t('V_CREDIT'),
      width: '12.5%',
    },
    {
      key: 'code7',
      label: t('L_TOTAL'),
      width: '12.5%'
    },
      {
      key: 'code8',
      label: t('L_TOTAL_DEDUCT'),
      width: '12.5%'
    },
      {
      key: 'code9',
      label: t('L_TOTAL'),
      width: '12.5%'
    },
  ];
};
export const PayerAccountStatusBottomColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_MCSR0126_RECIEPT'),
      width: '12.5%',
    },
    {
      key: 'code2',
      label: t('L_PAYMENT_DATE'),
      width: '12.5%',
    },
    {
      key: 'code3',
      label: t('L_PAY_WAY'),
      width: '12.5%',
    },
    {
      key: 'code4',
      label: t('L_BANK_ACCOUNT'),
      width: '12.5%',
    },
    {
      key: 'code5',
      label: t('L_CHECK_NUM'),
      width: '12.5%',
    },
    {
      key: 'code6',
      label: t('L_SUM'),
      width: '12.5%',
    },
    {
      key: 'code7',
      label: t('L_REFUND_PARENT'),
      width: '12.5%'
    },
      {
      key: 'code8',
      label: t('L_RETURNED_CHECK'),
      width: '12.5%'
    },
      {
      key: 'code9',
      label: t('L_DEPOSIT_NO'),
      width: '12.5%'
    },
  ];
};
