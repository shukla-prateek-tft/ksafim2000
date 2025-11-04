import { useTranslation } from 'react-i18next';
export const BankReconciliationReportColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: '',
      width: '25%'
    },
    {
      key: 'code2',
      label: t('L_VALUE_DATE'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_DOCUMENT'),
      width: '14%'
    },
    {
      key: 'code4',
      label: t('L_DESC'),
      width: '20%'
    },
    {
      key: 'code5',
      label: t('L_MONEY'),
      width: '12%'
    },
    {
      key: 'code6',
      label: t('L_SUM_LEFT'),
      width: '12%'
    }
  ];
};
