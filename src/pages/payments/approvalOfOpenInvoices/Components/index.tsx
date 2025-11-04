import { ColumnProps } from '@/pages/type';

export const ApprovalOfOpenInvoicesColumn = ({ t }: ColumnProps) => {
  return [
    {
      key: 'actNo',
      label: t('L_MCFW1372_CELL_1'),
      width: '8%',
      sortable: true
    },
    {
      key: 'studentNo',
      label: t('L_MCFW1372_CELL_2'),
      width: '9%',
      sortable: true
    },
    {
      key: 'dateAut',
      label: t('L_MCFW1372_CELL_3'),
      width: '8%',
      sortable: true
    },
    {
      key: 'orderNum',
      label: t('L_MCFW1372_CELL_4'),
      width: '7%'
    },
    {
      key: 'serviceTypeName',
      label: t('L_MCFW1372_CELL_5'),
      width: '9%'
    },
    {
      key: 'accCardName',
      label: t('L_MCFW1372_CELL_6'),
      width: '9%'
    },
    {
      key: 'outcomeSum',
      label: t('L_MCFW1372_CELL_7'),
      width: '8%',
      sortable: true
    },
    {
      key: 'suppName',
      label: t('L_MCFW1372_CELL_8'),
      width: '17%'
    },
    {
      key: 'payActNo',
      label: t('L_MCFW1372_CELL_9'),
      width: '9%'
    },
    {
      key: 'descAut',
      label: t('L_MCFW1372_CELL_10'),
      width: '8%'
    },
    {
      key: 'isConfirm',
      label: t('L_MCFW1372_CELL_11'),
      width: '8%'
    }
  ];
};
