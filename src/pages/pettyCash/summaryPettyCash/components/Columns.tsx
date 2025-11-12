import { useTranslation } from 'react-i18next';
export const SummaryPettyCashColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'title',
      width: '40%'
    },
    {
      key: 'debit_sum',
      label: t('L_DEBIT'),
      width: '20%'
    },
    {
      key: 'credit_sum',
      label: t('L_CREDIT'),
      width: '20%'
    },
    {
      key: 'total_sum',
      label: t('L_TOTAL'),
      width: '20%'
    }
  ];
};
