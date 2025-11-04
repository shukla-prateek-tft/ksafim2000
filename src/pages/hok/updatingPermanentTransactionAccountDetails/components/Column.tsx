import { useTranslation } from 'react-i18next';

export const UpdatingPermanentTransactionAccountDetailsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'id',
      label: t('L_ID'),
      width: '10%'
    },
    {
      key: 'familyName',
      label: t('L_PAYER_NAME'),
      width: '25%'
    },
    {
      key: 'date',
      label: t('L_DATE'),
      width: '10%'
    },
    {
      key: 'bank',
      label: t('L_BANK'),
      width: '10%'
    },
    {
      key: 'bankAccount',
      label: t('L_BANK_ACCOUNT'),
      width: '10%'
    },
    {
      key: 'sum',
      label: t('L_MONEY_AMNT'),
      width: '10%'
    },
    {
      key: 'actNo',
      label: t('L_RECEIPT'),
      width: '10%'
    },
    {
      key: 'returned',
      label: t('L_RETURNED'),
      width: '5%'
    },
    {
      key: 'paid',
      label: t('L_PAYED'),
      width: '5%'
    },
    {
      key: 'signed',
      label: t('L_SIGN_ALL'),
      width: '5%'
    }
  ];
};
