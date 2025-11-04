import { useTranslation } from 'react-i18next';
export const StudentSheetForAdmissionMCFRColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('V_STUDENT_ID'),
      width: '15%',

    },
    {
      key: 'code2',
      label: t('L_STUDENT_NAME'),
      width: '20%',
    },
    {
      key: 'code3',
      label: t('L_CLASS_NM_NUM1'),
      width: '15%',
    },
    {
      key: 'code4',
      label: t('L_SUM_TO_PAY'),
      width: '10%',
    },
    {
      key: 'code5',
      label: t('L_PAY_WAY'),
      width: '10%',
    },
    {
      key: 'code6',
      label: t('L_PAY_DATE1'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_SUM'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_RECEIVE_NUM'),
      width: '10%'
    },
  ];
};
