import { useTranslation } from 'react-i18next';

export const ListOfDonationReceiptsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'catalog_no',
      label: t('L_CONCENTRATION'),
      width: '8%'
    },
    {
      key: 'discription',
      label: t('L_RECEIPT'),
      width: '8%'
    },
    {
      key: 'codeDescription',
      label: t('L_PAY_WAY'),
      width: '8%'
    },
    {
      key: 'date',
      label: t('L_PAYER'),
      width: '8%'
    },
    {
      key: 'catalog_no2',
      label: t('L_PAYMENT_DATE'),
      width: '8%'
    },
    {
      key: 'discription2',
      label: t('L_BANK'),
      width: '8%'
    },
    {
      key: 'codeDescription2',
      label: t('L_BANK_ACCOUNT'),
      width: '8%'
    },
    {
      key: 'date1',
      label: t('L_CREDIT_NO'),
      width: '8%'
    },
    {
      key: 'date2',
      label: t('L_MONEY_AMNT'),
      width: '8%'
    },
    {
      key: 'check',
      label: t('L_RETURN_TO_CASH'),
      width: '8%'
    },
    {
      key: 'check2',
      label: t('L_TO_DEPOSIT'),
      width: '8%'
    },
    {
      key: 'check3',
      label: t('L_TO_DEPOSIT'),
      width: '8%'
    }
  ];
};
