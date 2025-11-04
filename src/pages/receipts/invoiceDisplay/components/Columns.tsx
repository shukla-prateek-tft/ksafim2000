import { getFormatedDate, getFormatedNumber } from '@/utils/commonHelper';
import { useTranslation } from 'react-i18next';
import { ColumnsProps } from '../types';

export const invoiceDisplaycolumns = ({ onSelectAll, isSelectedAll }: ColumnsProps) => {
  const { t } = useTranslation('invoiceDisplay');
  return [
    {
      key: 'id',
      width: '10%',
      header: () => <input type="checkbox" onChange={onSelectAll} checked={isSelectedAll} />
    },
    {
      key: 'student',
      label: t('tHead_invoice_number'),
      width: '15%',
      sortable: true
    },
    {
      key: 'act_No',
      width: '10%',
      label: t('tHead_expense_voucher'),
      sortable: true
    },
    {
      key: 'date_Aut',
      width: '10%',
      label: t('tHead_date'),
      cell: ({ row }: any) => <>{getFormatedDate(row.original?.date_Aut || '')}</>,
      sortable: true
    },
    {
      key: 'order_Number',
      width: '10%',
      label: t('tHeadOrder_Number'),
      sortable: true
    },
    {
      key: 'desc_Aut',
      width: '10%',
      label: t('tHeadDescription'),
      sortable: true
    },
    {
      key: 'acc_act_type_text',
      width: '10%',
      label: t('tHead_Acc_Act_Type'),
      sortable: true
    },
    {
      key: 'service_Type_Name',
      width: '10%',
      label: t('tHead_inv_acc_card_label'),
      sortable: true
    },
    {
      key: 'acc_Card_Name',
      width: '10%',
      label: t('tHead_inv_acc_card_label'),
      sortable: true
    },
    {
      key: 'type_no_text',
      width: '10%',
      label: t('tHead_InvoiceType'),
      sortable: true
    },
    {
      key: 'outcome_Sum',
      width: '10%',
      label: t('tHead_amount'),
      cell: ({ row }: any) => <>{getFormatedNumber(row.original?.date_Aut || '')}</>,
      sortable: true
    },

    {
      key: 'is_Confirm_Text',
      width: '10%',
      label: t('tHeadStatus'),
      sortable: true
    }
  ];
};
