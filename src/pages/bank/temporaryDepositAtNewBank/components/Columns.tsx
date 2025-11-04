import { useTranslation } from 'react-i18next';

export const BankDepositColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'c1',
      label: t('L_RECEIPT'),
      width: '5%',
      align: 'center'
    },
    {
      key: 'c2',
      label: t('L_CONCENTRATION'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c3',
      label: t('L_PAY_WAY'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c4',
      label: t('L_PAYMENT_DATE'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c5',
      label: t('L_BANK'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c6',
      label: t('L_BANK_ACCOUNT'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c7',
      label: t('L_CHECK_NUM'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c8',
      label: t('L_MONEY_AMNT'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c9',
      label: t('L_NAME'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c10',
      label: t('L_DETAILS'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c11',
      label: t('L_TO_DEPOSIT'),
      width: '5%',
      align: 'center'
    }
  ];
};
