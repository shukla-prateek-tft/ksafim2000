import { useTranslation } from 'react-i18next';
export const ScholarshipReportPrintColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '10%',
    },
    {
      key: 'code2',
      label: t('L_NAME'),
      width: '20%',
    },
    {
      key: 'code3',
      label: t('L_PHONE'),
      width: '10%',
    },
    {
      key: 'code4',
      label: t('L_COMMENT'),
      width: '10%',
    },
    {
      key: 'code5',
      label: t('L_DEBIT'),
      width: '10%',
    },
    {
      key: 'code6',
      label: t('L_CREDIT'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_REST'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_SCHOLARSH'),
      width: '10%'
    },
    {
      key: 'code9',
      label: t('L_PAYED'),
      width: '10%'
    },

  ];
};
