import { useTranslation } from 'react-i18next';

export const CentralizedCorrectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'CHECK',
      label: t('V'),
      width: '8%'
    },
    {
      key: 'LEFT_DATE2',
      label: t('L_MCFW0582_ID'),
      width: '8%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_STUDENT_NAME'),
      width: '20%'
    },
    {
      key: 'FAMILY_NAME',
      label: t('L_CLASS_CODE'),
      width: '8%'
    },
    {
      key: 'FAMILY_NAME2',
      label: t('V_DEBIT'),
      width: '8%'
    },
    {
      key: 'ASS_CO',
      label: t('V_CREDIT'),
      width: '8%'
    },
    {
      key: 'LEFT_DATE',
      label: t('L_TOT'),
      width: '8%'
    },
    {
      key: 'FAMILY_NAME3',
      label: t('L_BALANCE_PER_ITEM'),
      width: '8%'
    },
    {
      key: 'ASS_CO2',
      label: t('L_AMOUNT_CRED'),
      width: '8%'
    },
    {
      key: 'LEFT_DATE2',
      label: t('L_BALANCE_PER_ITEM'),
      width: '8%'
    },
    {
      key: 'LEFT_DATE3',
      label: `${t('L_TOT')} ${t('L_REST')}`,
      width: '8%'
    }
  ];
};
