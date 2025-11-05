import { ColumnProps } from '@/pages/type';
import { useTranslation } from 'react-i18next';
export const PaymentSupplierListcolumn = ({ t }: ColumnProps) => {
  return [
    {
      key: 'supp_Num',
      label: t('businessNumber'),
      width: '10%',
      sortable: true
    },
    {
      key: 'supp_Name',
      label: t('thereIsDoubt'),
      width: '14%',
      sortable: true
    },
    {
      key: 'bank_Name',
      label: `${t('branch')} | ${t('bank')}`,
      width: '14%',
      sortable: true
    },
    {
      key: 'bank_Account',
      label: t('invoicePrint'),
      width: '6%',
      sortable: true
    },
    {
      key: 'phone_Num1',
      label: t('phone'),
      width: '8%',
      sortable: true
    },
    {
      key: 'email_1',
      label: t('email'),
      width: '8%',
      sortable: true
    },
    {
      key: 'tax_Deduct',
      label: t('disabled'),
      width: '4%',
      sortable: true
    },
    {
      key: 'tax_Date',
      label: t('validityDeduction'),
      width: '10%',
      sortable: true
    },
    {
      key: 'hsb_Open',
      label: t('openInvoices'),
      width: '10%',
      sortable: true
    },
    { key: 'id_Supplier', label: t('balance'), width: '6%' },
    { key: 'action1', label: t('paymentSupplier'), width: '5%' },
    { key: 'action2', label: t('asGiftCard'), width: '5%' }
  ];
};
export const SupplierPaymentsColumns = ({ t, t_new }:ColumnProps) => {
  return [
    {
      key: 'act_No',
      label: t('number'),
      width: '10%'
    },
    {
      key: 'student',
      label: t('amount'),
      width: '8%'
    },
    {
      key: 'date_Aut',
      label: t('nhscard'),
      width: '8%'
    },
    {
      key: 'order_Number',
      label: t('secondaryissue'),
      width: '6%'
    },
    {
      key: 'desc_Aut',
      label: t('description'),
      width: '10%'
    },
    {
      key: 'service_Type_Name',
      label: t('invitation')
    },
    {
      key: 'acc_Card_Name',
      label: t('invoicedate')
    },
    {
      key: 'outcome_Sum',
      label: t('invoice'),
      width: '10%'
    },
    {
      key:'gefen_Code',
      label: t('L_CODE_GEFEN'),
      width: '10%' 
    },
    {
      key:'budget_Type',
      label: t('L_SUG_TAKTZIV'),
      width: '10%'
    },
    {
      key: 'is_Confirm',
      label: t_new('V_ACCEPT'),
      width: '10%'
    },

    {
      key: 'transmit',
      label: t_new('L_STATUS'),
      width: '10%'
    }
  ];
};
export const ExtendedSupplierValidityColumns = () => {
  const { t } = useTranslation('paymentSuppliersList');
  return [
    {
      key: 'supp_Num',
      label: t('businessNumber'),
      align: 'center' as const,
      width: '160px'
    },
    {
      key: 'supp_Name',
      label: t('thereIsDoubt'),
      align: 'center' as const,
      width: '160px'
    },
    {
      key: 'tax_Date',
      label: t('validityDeduction'),
      align: 'center' as const,
      width: '120px'
    },
    {
      key: 'tax_Date_New',
      label: t('extendSupplierCurrentDate'),
      align: 'center' as const,
      width: '120px'
    }
  ];
};

export const PrintPreviewInvoicesColumns = () => {
  const { t } = useTranslation('printPreviewSupplierInvoices');
  return [
    { key: 'record_Number', label: '#', sortable: true, width: '4%' },
    { key: 'set_Number', label: t('L_SET_NUMBER'), sortable: true, width: '4%' },
    { key: 'date_Relevant', label: t('L_DATE_RELEVANT'), sortable: true, width: '8%' },
    { key: 'check_No', label: t('L_CHECK_NO1'), sortable: true, width: '7%' },
    { key: 'value_date', label: t('L_VALUE_DATE'), sortable: true, width: '7%' },   
    { key: 'debit', label: t('L_DEBIT_CODE'), sortable: true, width: '7%' },        
    { key: 'credit', label: t('L_CREDIT_CODE'), sortable: true, width: '7%' },
    { key: 'total', label: t('L_REST'), sortable: true, width: '7%' },              
    { key: 'contraName', label: t('L_CONTRA'), sortable: true, width: '10%' },
    { key: 'details', label: t('L_DETAILS'), sortable: true, width: '10%' },
    { key: 'user_Name', label: t('L_OTHER'), sortable: true, width: '6%' },
    { key: 'gefen_Code', label: t('L_CODE_GEFEN'), sortable: true, width: '4%' },
    { key: 'budget_Type', label: t('L_SUG_TAKTZIV'), sortable: true, width: '7%' },   
    { key: 'manual', label: t('L_MANUAL'), sortable: true, width: '6%' },           
    { key: 'temp', label: t('L_TEMP'), sortable: true, width: '6%' },
  ];

};
