import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { ReportBody607 } from '../types';
export const PettyCashTransactionReportColumn = () :TableColumnType<ReportBody607>[]  => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'date_Aut',
      label: t('L_DATE'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'desc_Aut',
      label: t('L_DESC'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'name',
      label: t('L_NAME'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'supp_Number',
      label: t('L_SUPP_NUMBER'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'invoice_Number',
      label: t('L_INVOICE'),
      width: '7%',
      sortable: true,
    },
    {
      key: 'card_Acc',
      label: t('L_ACC_NO'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'type_Service',
      label: t('L_SERVICE_SUBJEC'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'subject_Service',
      label: t('L_SERVICE_TYPE'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'credit',
      label: t('L_INCOME'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'debit',
      label: t('L_OUTCOME'),
      width: '7%',
      sortable: true,
    },
    {
      key: 'balance',
      label: t('L_PERIOD_TOTAL'),
      width: '8%',
      sortable: true,
    },
    {
      key: 'user_Name',
      label: t('L_USER_NAME'),
      width: '7%',
      sortable: true,
    },
    {
      key: 'update_Date',
      label: t('L_UPDATE_DATE'),
      width: '7%',
      align:'center',
      sortable: true,
    },
  ];
};
