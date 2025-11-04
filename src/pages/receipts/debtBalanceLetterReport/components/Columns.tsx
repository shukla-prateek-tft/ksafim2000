import { useTranslation } from 'react-i18next';
export const DebtBalanceLetterReportColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '15%',
    },
    {
      key: 'code2',
      label: t('L_CLASS_CODE'),
      width: '20%',
    },
    {
      key: 'code3',
      label: t('L_SERVICE_SUBJEC'),
      width: '20%',
    },
    {
      key: 'code4',
      label: t('L_TOTAL'),
      width: '15%',
    }
  ];
};
