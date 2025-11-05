import { useTranslation } from "react-i18next";

export const SupplierSelectColum=() =>{
const { t } = useTranslation('paymentSuppliersList');
  return [
    {
      key: 'supp_Num',
      label: t('retrivedSuppNum'),
      width: '30%',
      sortable:true

    },
    {
      key: 'supp_Name',
      label: t('retrivedSuppName'),
      width: '40%',
      sortable:true
    },
    {
      key: 'hsb_Open',
      label: t('amountOfInvoices'),
      width: '15%',
      sortable:true
    },
    {
      key: 'total',
      label: t('balanceOntheCard') ,
      width: '15%',
      sortable:true
    },
  ]
}