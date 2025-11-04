import { useTranslation } from 'react-i18next';
export const SummaryPettyCashColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'title',
      width: '40%',
      sortable: true
    },
    {
      key: 'debit_Sum',
      label: t('L_DEBIT'),
      width: '20%',
      sortable: true
    },
    {
      key: 'credit_Sum',
      label: t('L_CREDIT'),
      width: '20%',
      sortable: true
    },
    {
      key: 'total_Sum',
      label: t('L_TOTAL'),
      width: '20%',
      sortable: true
    }
  ];
};
