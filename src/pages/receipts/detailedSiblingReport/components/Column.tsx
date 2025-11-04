import { useTranslation } from 'react-i18next';
export const DetailedSiblingReportColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '11.11%',
    },
    {
      key: 'code2',
      label: t('L_NAME'),
      width: '11.11%',
    },
    {
      key: 'code3',
      label: t('L_CLASS_CODE'),
      width: '11.11%',
    },
    {
      key: 'code4',
      label: t('L_SERVICE_TYPE'),
      width: '11.11%',
    },
    {
      key: 'code5',
      label: t('V_DEBIT'),
      width: '11.11%',
    },
      {
      key: 'code6',
      label: t('V_CREDIT'),
      width: '11.11%',
    },
    {
      key: 'code7',
      label: t('L_TOTAL'),
      width: '11.11%',
    },
    {
      key: 'code8',
      label: t('L_TOTAL_DEDUCT'),
      width: '11.11%',
    },
      {
      key: 'code9',
      label: t('L_STUD_TOTAL'),
      width: '11.11%',
    },

  ];
};
