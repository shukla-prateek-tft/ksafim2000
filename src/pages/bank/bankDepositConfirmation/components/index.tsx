import { useTranslation } from 'react-i18next';
export const BankDepositConfirmationColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_RECEIPT'),
      width: '10%',
    },
    {
      key: 'code1',
      label: t('L_PAY_WAY'),
      width: '10%',
    },
    {
      key: 'code1',
      label: t('L_PAYMENT_DATE'),
      width: '9%',
    },
    {
      key: 'code1',
      label: t('L_BANK'),
      width: '9%',
    },
    {
      key: 'code1',
      label: t('L_BANK_ACCOUNT'),
      width: '9%',
    },
    {
      key: 'code1',
      width: '9%',
      label: t('L_CHECK_NUM')
    },
    {
      key: 'code1',
      width: '11%',
      label: t('L_MONEY_AMNT')
    },
    {
      key: 'code1',
      width: '15%',
      label: t('L_NAME')
    },
    {
      key: 'code9',
      width: '9%',
      align: 'center',
      label: t('L_TO_COMMIT')
    },
    {
      key: 'code10',
      width: '9%',
      align: 'center',
      label: t('L_RETURNED')
    }
  ];
};
