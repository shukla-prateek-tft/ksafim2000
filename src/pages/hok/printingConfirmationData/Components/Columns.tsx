import { useTranslation } from 'react-i18next';
export const PrintingConfirmationDataColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_NAME'),
      width: '27%'
    },
    {
      key: 'code3',
      label: t('L_DATE'),
      width: '10%'
    },
    {
      key: 'code4',
      label: t('L_BANK'),
      width: '8%'
    },
    {
      key: 'code5',
      label: t('L_BANK_ACCOUNT'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_CARD_CREDIT'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_MONEY_AMNT'),
      width: '15%'
    },
    {
      key: 'code8',
      label: t('L_CREDIT_STATUS'),
      width: '10%'
    }
  ];
};
