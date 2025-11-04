import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { LearnigCenters, ParentsDetails } from '../types';
export const ParentDetailsColumn = (): TableColumnType<ParentsDetails>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'fatherRelateType',
      label: t('L_RELATE_TYPE'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'fatherId',
      label: t('L_MCFW0582_ID'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'fatherFamilyName',
      label: t('L_FAMILY_NAME'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'fatherPrivateName',
      label: t('L_PRIVATE_NAME'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'fatherTaarichLeda',
      label: t('L_BIRTH_DATE'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'fatherCityCode',
      label: t('L_CITY'),
      width: '8%'
    },
    {
      key: 'fatherStreet',
      label: t('L_STREET'),
      width: '8%'
    },
    {
      key: 'fatherBuildNum',
      label: t('L_BUILD'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'fatherPhone',
      label: t('L_PHONE'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'fatherMisparNayad1',
      label: t('L_MOBILE_PHONE'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'fatherEmail',
      label: t('L_MAIL'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'fatherCity',
      label: t('L_PAY_SCHOOL'),
      width: '8%',
      align: 'center'
    }
  ];
};

export const LearningCentersColumn = (): TableColumnType<LearnigCenters>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'study_Year',
      label: t('L_STUDY_YEAR'),
      width: '10%'
    },
    {
      key: 'study_Group',
      label: t('L_STUDY_GROUP'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'desc_Aut',
      label: t('L_GROUP_NAME'),
      width: '20%',
      align: 'center'
    },
    {
      key: 'charge',
      label: t('L_CHARGE'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'total_Sum',
      label: t('L_SUM'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'start_Date',
      label: t('L_START_DATE'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'finish_Date',
      label: t('L_FINISH_DATE'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'taarich_Idkun_Reshuma',
      label: t('L_UPDATE_DT'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'is_Mazevet',
      label: t('L_IS_MAZEVET'),
      width: '10%'
    }
  ];
};
