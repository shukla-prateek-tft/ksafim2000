import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_PAY_WAY'),
      width: '9%'
    },
    {
      key: 'vineCode',
      label: t('L_RECEIPT'),
      width: '9%'
    },
    {
      key: 'codeDescription',
      label: t('L_PAYMENT_DATE'),
      width: '9%'
    },
    {
      key: 'accountant',
      label: t('L_BANK'),
      width: '9%'
    },
     {
      key: 'L_Invoice_Number2',
      label: t('L_BANK_ACCOUNT'),
      width: '9%'
    },
    {
      key: 'vineCode2',
      label: t('L_CHECK_NUM'),
      width: '9%'
    },
    {
      key: 'codeDescription2',
      label: t('L_MONEY_AMNT'),
      width: '9%'
    },
    {
      key: 'accountant2',
      label: t('L_RETURN_TO_CASH'),
      width: '9%'
    },
      {
      key: 'accountant3',
      label: t('L_TO_DEPOSIT'),
      width: '9%'
    },
   
  ];
};
