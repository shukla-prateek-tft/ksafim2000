import { useTranslation } from 'react-i18next';
import classes from '../ListOfSuppliers.module.scss';

export const ListOfSuppliersColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t(''),
      header: () => (
        <div className={classes['column-third']}>
          <span>{t('L_FROM')}</span>
          <span>{t('V_DAY30')}</span>
        </div>
      ),
      width: '3%'
    },
    {
      key: 'supp_Num',
      label: t('L_SUPP_NUM'),
      width: '7%',
      align: 'center',
      sortable: true
    },
    {
      key: 'supp_Name',
      label: t('L_SUPP_NAME'),
      width: '6%',
      align: 'center',
      sortable: true
    },
    {
      key: 'supp_Type',
      label: t('L_SUPP_TYPE'),
      width: '5%',
      align: 'center'
    },
    {
      key: 'tax_Deduct',
      label: t('L_TAX'),
      width: '4%',
      align: 'center',
      sortable: true
    },
    {
      key: 'deduct_Type',
      label: t('L_TAX_TYPE'),
      width: '5%',
      align: 'center'
    },
    {
      key: 'tax_Date',
      label: t('L_TAX_DATE'),
      width: '8%',
      align: 'center',
      sortable: true
    },
    {
      key: 'books_Aproved',
      label: t('L_BOOKS_APPR'),
      width: '4%',
      align: 'center'
    },
    {
      key: 'acc_Card',
      label: t('L_ACC_CARD'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'sort_Code',
      label: t('L_SORT'),
      width: '4%',
      align: 'center',
      sortable: true
    },
    {
      key: 'supp_Dif',
      label: t('L_SUPP_DIF'),
      width: '4%',
      align: 'center'
    },
    {
      key: 'supp_To_File',
      label: t('SUPP_TO_FILE'),
      width: '4%',
      align: 'center'
    },
    {
      key: 'supp_To_Order',
      label: t('L_TO_ORDER'),
      width: '4%',
      align: 'center'
    },
    {
      key: 'supp_Num_Dealer',
      label: t('L_SUPP_DEALER'),
      width: '3%',
      align: 'center'
    },
    {
      key: 'main_To_Mas',
      label: t('L_MAS_TO_MAIN'),
      width: '4%',
      align: 'center'
    },
    {
      key: 'supp_Vat_Num',
      label: t('L_VAT_FOLDER'),
      width: '6%',
      align: 'center'
    },
    {
      key: 'code17',
      label: t(''),
      width: '4%',
      align: 'center'
    }
  ];
};
