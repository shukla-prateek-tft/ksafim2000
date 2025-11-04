import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { GridItem } from '../types';

export const ListOfCollectionProgramColumns = (): TableColumnType<GridItem>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'study_Group_Kizuz',
      width: '5%'
    },
    {
      key: 'charge',
      label: t('L_NUM'),
      width: '15%'
    },
    {
      key: 'desc_Aut',
      label: t('L_PROG_NAME'),
      width: '5%'
    },
    {
      key: 'full_Name',
      label: t('L_FULL_NAME'),
      width: '5%'
    },
    {
      key: 'tot_Sum',
      label: t('L_TOTAL'),
      width: '5%'
    },
    {
      key: 'auto_Set',
      label: t('L_AUTO'),
      width: '5%'
    },
    {
      key: 'from_Grade',
      label: t('L_F_CLASS_CODE'),
      width: '10%'
    },
    {
      key: 'to_Grade',
      label: t('L_TO_CLASS'),
      width: '20%'
    },
    {
      key: 'studyGroup',
      label: t('L_STUDY_GROUP'),
      width: '10%'
    },
    {
      key: 'group_Name',
      label: t('L_GROUP_N'),
      width: '10%'
    },
    {
      key: 'payTypeMinipay',
      label: t('PAY_TYPE_MINIPAY'),
      width: '10%'
    }
  ];
};