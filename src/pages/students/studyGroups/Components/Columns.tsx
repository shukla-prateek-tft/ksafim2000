import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { StudyGroup } from '../types';

export const StudyGroupsColumns = ():TableColumnType<StudyGroup>[] => {

  const { t } = useTranslation('common');
  return [
    {
      key: 'study_Group',
      label: t('L_GROUP_NUMBER'),
      align: 'center',
      width: '15%'
    },
    {
      key: 'desc_Aut',
      label: t('L_GROUP_N'),
      align: 'center',
      width: '35%'
    },
    {
      key: 'taarich_Sium_Kvutsa',
      label: t('L_T_START'),
      align: 'center',
      width: '20%'
    },
    {
      key: 'taarich_Hatchala_Kvutsa',
      label: t('L_END_DATE'),
      align: 'center',
      width: '20%'
    },
    {
      key: 'is_MazeVet',
      label: t('L_IS_MAZEVET'),
      align: 'center',
      width: '5%'
    }
  ];
};
