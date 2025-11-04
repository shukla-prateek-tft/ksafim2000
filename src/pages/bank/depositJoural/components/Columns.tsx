import { useTranslation } from 'react-i18next';
export const DepositJournalColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      width: '12%',
      label: t('L_DEPOSIT_NUM'),
    },
    {
      key: 'code2',
      label: t('L_TMP_CREDIT'),
      width: '12%',
    },
    {
      key: 'code3',
      label: t('L_BANK_DEPOSIT'),
      width: '12%',
    },
    {
      key: 'code4',
      label: t('L_DEPOSIT_DATE'),
      width: '12%',
    },
    {
      key: 'code5',
      label: t('L_PAY_WAY'),
      width: '16%',
    },
    {
      key: 'code6',
      label: t('L_BANK_S'),
      width: '12%',
    },
    {
      key: 'code7',
      label: t('L_BANK_ACCOUNT')+'/'+t('L_CONCENTRATION'),
      width: '12%',
    },
    {
      key: 'code8',
      label: t('L_CHECK_NUM'),
      width: '12%',
    },
    {
      key: 'code9',
      label: t('L_PAYMENT_DATE'),
      width: '12%',
    },
    {
      key: 'code10',
      label: t('L_INCOME'),
      width: '12%'
    },
    {
      key: 'code11',
      label: t('L_RECEIPT'),
      width: '12%',
    },
    {
      key: 'code12',
      label: t('L_RETURNED_CHECK'),
      width: '12%',
    },
  ];
};
