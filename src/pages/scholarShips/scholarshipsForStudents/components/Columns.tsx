import { useTranslation } from 'react-i18next';
export const ListScholarshipForStudentsReportColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('V_STUDENT_ID'),
      width: '12%',
    },
    {
      key: 'code2',
      label: t('L_STUDENT_NAME'),
      width: '12%',
    },
    {
      key: 'code3',
      label: t('L_CLASS_NM_NUM1'),
      width: '12%',
    },
    {
      key: 'code4',
      label: t('L_REST_STUDENT'),
      width: '12%',
    },
    {
      key: 'code5',
      label: t('L_MILGA_SUM'),
      width: '12%',
    },
    {
      key: 'code6',
      label: t('L_RECEIVE_NUM'),
      width: '12%'
    },
    {
      key: 'code7',
      label: t('L_RETURN_STUD1'),
      width: '12%'
    },
    {
      key: 'code8',
      label: t('L_DOC_NO'),
      width: '12%'
    },
  ];
};
