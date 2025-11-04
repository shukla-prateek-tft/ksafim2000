import { useTranslation } from 'react-i18next';
import classes from '../ListOfScholarshipsForStudentsPrint.module.scss';
export const ListOfScholarshipsForStudentsPrintColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT_ID_6'),
      width: '12.5%',
    },
    {
      key: 'code2',
      label: t('L_STUDENT_NAME'),
      width: '12.5%',
    },
    {
      key: 'code3',
      label: t('L_CLASS_NM_NUM1'),
      width: '12.5%',
    },
    {
      key: 'code4',
      label: t('L_REST_STUDENT'),
      width: '12.5%',
    },
    {
      key: 'code5',
      label: t('L_MILGA_SUM'),
      width: '12.5%',
    },
    {
      key: 'code6',
      label: t('L_RECEIVE_NUM'),
      width: '12.5%',
    },
    {
      key: 'code7',
      label: t('L_STUDENT_REFUND_NUMBER'),
      width: '12.5%',
    },
    {
      key: 'code8',
      label: t('L_DOC_NO'),
      width: '12.5%'
    },
  ];
};
