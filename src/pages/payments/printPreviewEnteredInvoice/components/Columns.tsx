import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { InvoiceItem } from '../types';

export const EnteredInvoiceColumns = (): TableColumnType<InvoiceItem>[] => {
  const { t } = useTranslation('enterInvoices');
  return [
    { key: 'invoice_Number', label: t('tHeadInvoice'), width: '12%' },
    { key: 'pay_Act_no', label: t('printTHeadVoucher'), width: '12%' },
    { key: 'date_Aut', label: t('tHeadDate'), width: '12%' },
    { key: 'order_Number', label: t('printTHeadInvitation'), width: '12%' },
    { key: 'inv_Desc_Aut', label: t('tHeadDescription'), width: '20%' },
    { key: 'inv_Service_Type', label: t('tHead_inv_service_type_label'), width: '12%' },
    { key: 'acc_Card', label: t('tHead_inv_acc_card_label'), width: '12%' },
    { key: 'price_Per_Service_Type', label: t('tHead_outcome_sum'), width: '8%', align: 'center' }
  ];
};
