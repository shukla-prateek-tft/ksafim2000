import { useTranslation } from 'react-i18next';

export const PostalBankStandingOrderConfirmationColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_NAME'),
      width: '30%'
    },
    {
      key: 'code3',
      label: t('L_DATE'),
      width: '12%'
    },
    {
      key: 'code4',
      label: t('L_BANK'),
      width: '12%'
    },
    {
      key: 'code5',
      label: t('L_BANK_ACCOUNT'),
      width: '12%'
    },
    {
      key: 'code6',
      label: t('L_MONEY_AMNT'),
      width: '12%'
    },
    {
      key: 'code7',
      label: t('L_APPROVED'),
      width: '12%'
    }
  ];
};
