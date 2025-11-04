import { useTranslation } from 'react-i18next';

export const CentralizedCorrectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_MCFW0582_ID'),
      width: '8%'
    },
    {
      key: 'code2',
      label: t('L_MCFW0582_ID'),
      width: '8%'
    },
    {
      key: 'code3',
      label: t('L_STUDENT_NAME'),
      width: '20%'
    },
    {
      key: 'code4',
      label: t('L_CLASS_CODE'),
      width: '8%'
    },
    {
      key: 'code5',
      label: t('V_DEBIT'),
      width: '8%'
    },
    {
      key: 'code6',
      label: t('V_CREDIT'),
      width: '8%'
    },
    {
      key: 'code7',
      label: t('L_TOT'),
      width: '8%'
    },
    {
      key: 'code8',
      label: t('L_BALANCE_PER_ITEM'),
      width: '8%'
    },
    {
      key: 'code9',
      label: t('L_AMOUNT_CRED'),
      width: '8%'
    },
    {
      key: 'code10',
      label: t('L_BALANCE_PER_ITEM'),
      width: '8%'
    },
    {
      key: 'code11',
      label: t('L_BALANCE_PER_ITEM'),
      width: '8%'
    },
    {
      key: 'code12',
      label: t('L_BALANCE_PER_ITEM'),
      width: '8%'
    }
  ];
};
