import { useTranslation } from 'react-i18next';
export const PermanentMovementsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_PAYER'),
      width: '30%'
    },
    {
      key: 'code2',
      label: t('L_DATE'),
      width: '8%'
    },
    {
      key: 'code3',
      label: t('L_BANK'),
      width: '8%'
    },
    {
      key: 'code4',
      label: t('L_BANK_ACCOUNT'),
      width: '8%'
    },
    {
      key: 'code5',
      label: t('L_MONEY_AMNT'),
      width: '8%'
    },
    {
      key: 'code6',
      label: t('L_STUDENTS'),
      width: '20%'
    },
    {
      key: 'code7',
      label: t('L_RECEIPT'),
      width: '8%'
    },
    {
      key: 'code8',
      label: t('L_APPROVED'),
      width: '5%'
    },
    {
      key: 'code9',
      label: t('L_RETURNED'),
      width: '5%'
    }
  ];
};
