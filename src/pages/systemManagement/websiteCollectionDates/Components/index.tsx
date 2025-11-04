import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_STUDY_YEAR'),
      width: '20%'
    },
    {
      key: 'vineCode',
      label: t('L_FINANCE_YEAR'),
      width: '20%'
    },
    {
      key: 'codeDescription',
      label: t('L_FROM_DATE'),
      width: '20%'
    },
    {
      key: 'accountant',
      label: t('L_TO_DATE'),
      width: '20%'
    }
  ];
};
