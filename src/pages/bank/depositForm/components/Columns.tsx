import { useTranslation } from 'react-i18next';
export const DepositFormColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t(''),
      width: '5%'
    },
    {
      key: 'code2',
      label: t('L_PAY_WAY'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_PAYMENT_DATE'),
      width: '10%'
    },
    {
      key: 'code4',
      label: t('L_BANK'),
      width: '10%'
    },
    {
      key: 'code5',
      label: t('L_CONCENTRATION'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_CHECK_NUM'),
      width: '20%'
    },
    {
      key: 'code7',
      label: t('L_MONEY_AMNT'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_PAYER'),
      width: '15%'
    },
    {
      key: 'code9',
      label: t('L_RECEIPT'),
      width: '10%'
    }
  ];
};
