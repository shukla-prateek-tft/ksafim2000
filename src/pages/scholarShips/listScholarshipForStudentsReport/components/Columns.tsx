import { useTranslation } from 'react-i18next';
export const ListScholarshipForStudentsReportColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('V_STUDENT_ID'),
      width: '10%',
    },
    {
      key: 'code2',
      label: t('L_STUDENT_NAME'),
      width: '10%',
    },
    {
      key: 'code3',
      label: t('L_CLASS_NM_NUM1'),
      width: '10%',
    },
    {
      key: 'code4',
      label: t('L_REST_STUDENT'),
      width: '10%',
    },
    {
      key: 'code5',
      label: t('L_STATUS'),
      width: '10%',
    },
    {
      key: 'code6',
      label: t('L_SEND_DATE'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_LEFT_TO_SMS'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_PATHER_PHONE'),
      width: '10%'
    },
    {
      key: 'code9',
      label: t('L_MOTHER_PHONE'),
      width: '10%'
    },
    {
      key: 'code10',
      label: t('L_GUARD_PHONE'),
      width: '10%'
    }
  ];
};
