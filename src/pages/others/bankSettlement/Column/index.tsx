import { useTranslation } from 'react-i18next';

export const CentralizedCorrectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'LEFT_DATE2',
      label: t(''),
      width: '20%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_MERGE'),
      width: '20%'
    },
    {
      key: 'FAMILY_NAME',
      label: t('L_VALUE_DATE'),
      width: '20%'
    },
    {
      key: 'FAMILY_NAME2',
      label: t('L_CHECK_NO'),
      width: '20%'
    },
    {
      key: 'ASS_CO',
      label: t('L_MONEY_AMNT'),
      width: '20%'
    }
  ];
};

export const CentralizedCorrectionColumn2 = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'LEFT_DATE2',
      label: t(''),
      width: '20%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_MERGE'),
      width: '20%'
    },
    {
      key: 'FAMILY_NAME',
      label: t('L_VALUE_DATE'),
      width: '20%'
    },
    {
      key: 'FAMILY_NAME2',
      label: t('L_DOCUMENT'),
      width: '20%'
    },
    {
      key: 'ASS_CO',
      label: t('L_MONEY'),
      width: '20%'
    }
  ];
};
