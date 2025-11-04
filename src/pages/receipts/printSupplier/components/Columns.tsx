import { useTranslation } from 'react-i18next';

export const MainTableColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'student',
      label: t('L_MCFW1372_CELL_2'),
      width: '15%'
    },
    {
      key: 'act_No',
      label: t('L_MCFW1372_CELL_1'),
      width: '15%'
    },
    {
      key: 'date_Aut',
      label: t('V_DATE'),
      width: '15%'
    },
    {
      key: 'order_Number',
      label: t('L_MCFW1372_CELL_4'),
      width: '15%'
    },
    {
      key: 'inv_Desc_Aut',
      label: t('L_MCFW1372_CELL_10'),
      width: '15%'
    },
    {
      key: 'acc_Card',
      label: t('L_MCFW1372_CELL_5'),
      width: '10%'
    },
    {
      key: 'inv_Service_Type',
      label: t('L_ACC_CARD1'),
      width: '15%'
    },
    {
      key: 'price_Per_ActNo_Service_Type',
      label: t('L_Amount'),
      width: '20%'
    }
  ];
};

export const SingleEntryTableColumns = () => {
  const { t } = useTranslation('common');
  return [
    { key: 'pay_Way_Desc', label: t('L_PAY_WAY'), width: '14%' },
    { key: 'payment_Date', label: t('L_PAYMENT_DATE'), width: '14%' },
    { key: 'credit_Account', label: t('L_CREDIT_NO'), width: '14%' },
    { key: 'valid_Date', label: t('L_VALID_DATE'), width: '14%' },
    { key: 'bank', label: t('L_BANK'), width: '10%' },
    { key: 'bank_Account', label: t('L_BANK_ACCOUNT'), width: '14%' },
    { key: 'check_Num', label: t('L_CHECK_NO'), width: '12%' },
    { key: 'abc', label: t('L_Reference'), width: '14%' },
    { key: 'outcome', label: t('L_Amount'), width: '14%' }
  ];
};

export const BreakdownTableColumns = () => {
  const { t } = useTranslation('common');
  return [
    { key: 'index', label: '#' },
    { key: 'catalog_no', label: t('catalogNo') },
    { key: 'desc_aut', label: t('description') },
    { key: 'amount_aut', label: t('amount') },
    { key: 'price_aut', label: t('price') },
    { key: 'discount', label: t('discount') },
    { key: 'vat_type', label: t('vatType') },
    { key: 'vat_sum', label: t('vatSum') },
    { key: 'price_with_vat', label: t('priceWithVat') },
    { key: 'inv_service_type', label: t('invServiceType') },
    { key: 'inv_acc_card', label: t('invAccCard') },
    { key: 'inv_service_subject', label: t('invServiceSubject') },
    { key: 'sug_taktziv', label: t('sugTaktziv') }
  ];
};
