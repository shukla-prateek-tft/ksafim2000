import { useTranslation } from 'react-i18next';
export const StudentFinancialSituationColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SERVICE_SUBJECT'),
      width: '25%'
    },
    {
      key: 'code2',
      label: t('L_SERVICE_TYPE'),
      width: '25%'
    },
    {
      key: 'code3',
      label: t('L_DEBIT'),
      width: '17%'
    },
    {
      key: 'code4',
      label: t('L_CRDEIT'),
      width: '16%'
    },
    {
      key: 'code5',
      label: t('L_REST'),
      width: '17%'
    },
  ];
};

export const StudentFinancialTotalColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_TOT'),
      width: '5%',
    },
  ];
};
