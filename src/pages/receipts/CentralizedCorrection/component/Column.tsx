import { useTranslation } from 'react-i18next';

export const CentralizedCorrectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'CHECK',
      label: t('V'),
      width: '5%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_STUDENT_ID'),
      width: '15%'
    },
    {
      key: 'FAMILY_NAME',
      label: t('L_ST_NAME'),
      width: '15%'
    },
    {
      key: 'ASS_CO',
      label: t('L_S_CLASS_CODE'),
      width: '10%'
    },
    {
      key: 'LEFT_DATE',
      label: t('L_DEPARTURE'),
      width: '10%'
    },
    {
      key: 'STUD_DEBIT',
      label: t('V_DEBIT'),
      width: '10%'
    },
    {
      key: 'STUD_CREDIT',
      label: t('V_CREDIT'),
      width: '10%'
    },
    {
      key: 'TUD_DISCOUNT',
      label: t('L_DISCOUNT_ITEM'),
      width: '10%'
    },
    {
      key: 'STUD_TOTAL',
      label: t('L_SUM_LEFT'),
      width: '10%'
    },
    {
      key: 'STUD_SUM',
      label: t('L_AMOUNT_CORRECT'),
      width: '10%'
    }
  ];
};
