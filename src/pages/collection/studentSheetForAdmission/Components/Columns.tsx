import { useTranslation } from 'react-i18next';
export const StudentSheetForAdmissionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_TO_PAY'),
      width: '5%'
    },
    {
      key: 'code2',
      label: t('L_STUD_ID'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_STUDENT_NAME'),
      width: '15%'
    },
    {
      key: 'code4',
      label: t('L_CLASS_NM_NUM'),
      width: '12%'
    },
    {
      key: 'code5',
      label: t('L_DEBIT'),
      width: '12%'
    }, {
      key: 'code6',
      label: t('L_PAY_WAY'),
      width: '12%'
    },
    {
      key: 'code7',
      label: t('L_DATE'),
      width: '12%'
    },
    {
      key: 'code8',
      label: t('L_SUM'),
      width: '10%'
    },
    {
      key: 'code9',
      label: t('L_MONEY_SIT'),
      width: '6%'
    },
    {
      key: 'code10',
      label: t('DET'),
      width: '6%'
    },
  ];
};
