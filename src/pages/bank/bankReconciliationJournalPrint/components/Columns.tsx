import { useTranslation } from 'react-i18next';
export const BankReconciliationJournalColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_MERGE'),
      width: '14%'
    },
    {
      key: 'code2',
      label: t('L_VALUE_DATE'),
      width: '14%'
    },
    {
      key: 'code3',
      label: t('L_DOCUMENT'),
      width: '12%'
    },
    {
      key: 'code4',
      label: t('L_DESC'),
      width: '20%'
    },
    {
      key: 'code5',
      label: t('L_DEBIT'),
      width: '12%'
    },
    {
      key: 'code6',
      label: t('L_CREDIT'),
      width: '12%'
    },
    {
      key: 'code7',
      label: t('L_Bank_Balance'),
      width: '12%'
    }
  ];
};
