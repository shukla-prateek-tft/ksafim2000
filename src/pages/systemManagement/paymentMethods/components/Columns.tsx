import { ColumnProps } from '@/pages/type';
export const PaymentMethodsColumn = ({ t }: ColumnProps) => {
  return [
    {
      key: 'pay_Way',
      label: t('L_CODE'),
      width: '7%',
      sortable: true
    },
    {
      key: 'pay_Way_Desc',
      label: t('L_DESC'),
      width: '13%',
      sortable: true
    },
    {
      key: 'acc_Card_Name',
      label: t('L_ACC_NUM'),
      width: '13%'
    },
    {
      key: 'acc_Card2_Name',
      label: t('L_MCFW_1181_CELL_4') + ' ' + t('L_CCARD_COMPANY') + ' / ' + t('L_CHEQ_POST'),
      width: '27%'
    },
    {
      key: 'credit_Card',
      label: t('L_IS_CREDIT_MUST'),
      width: '10%'
    },
    {
      key: 'cheq_Card',
      label: t('L_REJECTED'),
      width: '10%'
    },
    {
      key: 'bank_Req',
      label: t('L_BANK_REQ'),
      width: '10%'
    },
    {
      key: 'cheque_Req',
      label: t('L_CHEQUE_REQ'),
      width: '10%'
    }
  ];
};
