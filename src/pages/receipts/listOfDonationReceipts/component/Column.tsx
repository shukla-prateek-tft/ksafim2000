import { useTranslation } from 'react-i18next';

export const ListOfDonationReceiptsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'catalog_no',
      label: t('L_PAYER_ID'),
      width: '10%'
    },
    {
      key: 'discription',
      label: t('L_PAYER_NAME'),
      width: '10%'
    },
    {
      key: 'codeDescription',
      label: t('T_MCFR0623'),
      width: '10%'
    },
    {
      key: 'date',
      label: t('L_PAY_WAY'),
      width: '10%'
    },
    {
      key: 'catalog_no2',
      label: t('L_PAYMENT_DATE'),
      width: '10%'
    },
    {
      key: 'discription2',
      label: t('L_BANK'),
      width: '10%'
    },
    {
      key: 'codeDescription2',
      label: t('L_BANK_ACCOUNT'),
      width: '10%'
    },
    {
      key: 'date1',
      label: t('L_CHECK_NUM'),
      width: '10%'
    },
    {
      key: 'date2',
      label: t('L_MCFW1372_CELL_7'),
      width: '10%'
    },
    {
      key: 'check',
      label: t(''),
      width: '10%'
    }
  ];
};
