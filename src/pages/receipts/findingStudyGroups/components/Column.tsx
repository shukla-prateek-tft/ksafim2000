import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { StudentGroup } from '../types';

 
export const FindingStudyGroupsColumns = (): TableColumnType<StudentGroup>[] => {
  const { t } = useTranslation('common');

  return [
    {
      key: 'studyGroup',
      label: t('L_MCIL0013_STUDY_GROUP_2'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'deskAuth',
      label: t('L_GROUP_N'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'familyName',
      label: t('L_TEACHER'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'majorName',
      label: t('L_MAJOR'),
      width: '25%',
      align: 'center'
    }
  ];
};
