import { ColumnProps, TableColumnType } from '@/pages/type';
import { SupplierDetailsDataType } from '../type';
export const IncomeTaxSuppliersReportColumn = ({ t }: ColumnProps): TableColumnType<SupplierDetailsDataType>[] => {
  return [
    {
      key: 'Supp_Num',
      label: t('L_SUPP_NUM'),
      width: '15%',
      sortable: true,
    },
    {
      key: 'Supp_Name',
      label: t('L_SUPP_NAME'),
      width: '20%',
      sortable: true,
    },
    {
      key: 'Supp_Num_Dealer',
      label: t('L_SUPP_DEALER'),
      width: '20%',
      sortable: true,
    },
    {
      key: 'Main_To_Mas',
      label: t('L_MARK_TO_FILE'),
      width: '20%',
      sortable: true,
    },
    {
      key: 'Supp_Vat_Num',
      label: t('L_VAT_FOLDER'),
      width: '20%',
      sortable: true,
    },
  ];
};
