import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_CREDIT'),
      width: '50%'
    },
    {
      key: 'vineCode',
      label: t('L_DEBIT'),
      width: '50%'
    }
  ];
};
