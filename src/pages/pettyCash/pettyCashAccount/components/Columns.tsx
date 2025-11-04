import { useTranslation } from 'react-i18next';

export const pettyCashAccountColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'SUPP_NUMBER',
      label: t('L_SUPP_NUMBER'),
      width: '15%'
    },
    {
      key: 'INVOICE_NUMBER',
      label: t('L_INVOICE'),
      width: '15%'
    },
    {
      key: 'DATE_AUT',
      label: t('L_DATE'),
      width: '15%'
    },
    {
      key: 'DESC_AUT',
      label: t('L_DESC'),
      width: '15%'
    },
    {
      key: 'SERVICE_TYPE',
      label: t('L_SERVICE_TYPE'),
      width: '15%'
    },
    {
      key: 'ACC_CARD',
      label: t('L_ACC_NO'),
      width: '15%'
    },
    {
      key: 'DEBIT',
      label: t('L_DEBIT'),
      width: '10%'
    }
  ];
};
