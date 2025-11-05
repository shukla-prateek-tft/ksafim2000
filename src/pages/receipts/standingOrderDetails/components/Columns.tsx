import { useTranslation } from 'react-i18next';
export const StandingOrderDetailsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_PAYER'),
      width: '15%'
    },
    {
      key: 'code2',
      label: t('L_STUDENT'),
      width: '20%'
    },
    {
      key: 'code3',
      label: t('L_BANK'),
      width: '5%'
    },
    {
      key: 'code4',
      label: t('L_BANK_ACCOUNT'),
      width: '5%'
    },
    {
      key: 'code5',
      label: t('L_ADDRESS'),
      width: '15%'
    },
    {
      key: 'code6',
      label: t('L_PHONE'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_PAY_DATE1'),
      width: '6%'
    },
    {
      key: 'code8',
      label: t('L_MONEY'),
      width: '6%'
    },
    {
      key: 'code9',
      label: t('L_RECEIPT'),
      width: '6%'
    },
    {
      key: 'code10',
      label: t('L_MCFR0716_COLUMN10'),
      width: '6%'
    },
    {
      key: 'code11',
      label: t('L_MCFR0716_COLUMN11'),
      width: '6%'
    }
  ];
};
