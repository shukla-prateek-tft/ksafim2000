import { useTranslation } from 'react-i18next';

export const CentralizedCorrectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'CHECK',
      label: t('L_SIGN_ALL'),
      width: '6%'
    },
    {
      key: 'LEFT_DATE2',
      label: t('L_STUD_ID'),
      width: '7%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_ST_NAME'),
      width: '7%'
    },
    {
      key: 'FAMILY_NAME',
      label: t('L_CLASS_NM_NUM'),
      width: '7%'
    },
    {
      key: 'FAMILY_NAME2',
      label: t('L_REST_STUDENT'),
      width: '7%'
    },
    {
      key: 'ASS_CO',
      label: t('L_STATUS'),
      width: '7%'
    },
    {
      key: 'LEFT_DATE',
      label: t('L_SEND_DATE'),
      width: '7%'
    },
    {
      key: 'FAMILY_NAME3',
      label: t('T_TEXT2_MCFW1388'),
      width: '7%'
    },
    {
      key: 'ASS_CO2',
      label: t('L_PATHER_PHONE'),
      width: '7%'
    },
    {
      key: 'LEFT_DATE4',
      label: t('L_PAYER'),
      width: '6%'
    },
    {
      key: 'LEFT_DATE3',
      label: t('L_MOTHER_PHONE'),
      width: '7%'
    },
    {
      key: 'LEFT_DATE40',
      label: t('L_PAYER'),
      width: '6%'
    },
    {
      key: 'LEFT_DATE30',
      label: t('L_GUARD_PHONE'),
      width: '7%'
    },
    {
      key: 'LEFT_DATE400',
      label: t('L_PAYER'),
      width: '6%'
    },
    {
      key: 'LEFT_DATE500',
      label: t('L_MONEY_SIT'),
      width: '6%'
    }
  ];
};
