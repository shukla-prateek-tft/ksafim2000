import { useTranslation } from 'react-i18next';

export const CentralizedCorrectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'CHECK',
      label: t('L_SIGN_ALL'),
      width: '8%'
    },
    {
      key: 'LEFT_DATE2',
      label: t('L_STUD_ID'),
      width: '8%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_ST_NAME'),
      width: '20%'
    },
    {
      key: 'FAMILY_NAME',
      label: t('L_CLASS_NM_NUM'),
      width: '8%'
    },
    {
      key: 'FAMILY_NAME2',
      label: t('L_REST_STUDENT'),
      width: '8%'
    },
    {
      key: 'ASS_CO',
      label: t('L_MILGA_SUM'),
      width: '8%'
    },
    {
      key: 'LEFT_DATE',
      label: t('L_RECEIVE_NUM'),
      width: '8%'
    },
    {
      key: 'FAMILY_NAME3',
      label: t('L_RETURN_STUD'),
      width: '8%'
    },
    {
      key: 'ASS_CO2',
      label: t('L_DOC_NO'),
      width: '14%'
    },
    {
      key: 'LEFT_DATE3',
      label: t('L_MONEY_SIT'),
      width: '10%'
    }
  ];
};
