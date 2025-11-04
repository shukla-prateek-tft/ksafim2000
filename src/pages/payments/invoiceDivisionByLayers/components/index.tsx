import { useTranslation } from 'react-i18next';

export const CentralizedCorrectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'LEFT_DATE2',
      label: t('L_MCFW1372_CELL_5'),
      width: '15%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_MCFW1372_CELL_6'),
      width: '15%'
    },
    {
      key: 'FAMILY_NAME',
      label: t('L_F_CLASS_CODE'),
      width: '20%'
    },
    {
      key: 'FAMILY_NAME2',
      label: t('L_AD_CLASS'),
      width: '20%'
    },
    {
      key: 'ASS_CO',
      label: t('L_NUM_STUDENT'),
      width: '15%'
    },
    {
      key: 'LEFT_DATE',
      label: t(''),
      width: '15%'
    }
  ];
};
