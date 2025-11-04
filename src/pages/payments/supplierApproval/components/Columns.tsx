import { useTranslation } from 'react-i18next';

export const SuppliersColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'Insti',
      label: t('L_INSTI'),
      width: '5%',
      align: 'center'
    },
    {
      key: 'Insti_Fullname',
      label: t('V_SCHOOL'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'Supp_Num',
      label: t('L_SUPP_NUM'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'Supp_Name',
      label: t('L_SUPP_NAME'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'SUPP_TYPE',
      label: t('L_SUPP_TYPE'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'Status',
      label: t('L_TAX_PCT_S'),
      width: '5%',
      align: 'center'
    },
    {
      key: 'Tax_Deduct',
      label: t('L_TAX_TYPE'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'Tax_Date',
      label: t('L_TAX'),
      width: '6%',
      align: 'center'
    },
    {
      key: 'Books_aproved',
      label: t('L_BOOKS_APPR'),
      width: '3%',
      align: 'center'
    },
    {
      key: 'Status_Yes',
      label: t('L_APPROVED'),
      width: '3%',
      align: 'center'
    },
    {
      key: 'Status_No',
      label: t('L_STATUS_NO'),
      width: '3%',
      align: 'center'
    },
    {
      key: 'Status_Done',
      label: t('L_DONE'),
      width: '3%',
      align: 'center'
    },
    {
      key: 'Supp_Num_Dealer',
      label: t('L_SUPP_DEALER'),
      width: '7%',
      align: 'center'
    },
    {
      key: 'Supp_Vat_Num',
      label: t('L_VAT_FOLDER'),
      width: '7%',
      align: 'center'
    },
    {
      key: 'Bank',
      label: t('L_BANK'),
      width: '7%',
      align: 'center'
    },
    {
      key: 'Bank_Account',
      label: t('L_BANK_ACCOUNT'),
      width: '7%',
      align: 'center'
    },
    {
      key: 'Stamp_Idate',
      label: t('L_STAMP_DATE'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'c18',
      label: t('L_SINGLE_DOC'),
      width: '5%',
      align: 'center'
    }
  ];
};
