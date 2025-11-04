import { useTranslation } from 'react-i18next';
import { TableColumnType } from '@/pages/type';

type RowType = {
  code1: boolean;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
  code7: string;
  code8: string;
  code9: string;
  code10: string;
  code11: string;
  code12: string;
};

export const PaymentInformationQueryColumn = (): TableColumnType<RowType>[] => {
  const { t } = useTranslation('common');

  return [
    {
      key: 'code1',
      label: "",
      width: '8%'
    },
    {
      key: 'code2',
      label: t('L_INVOICE'),
      width: '8%'
    },
    {
      key: 'code3',
      label: t('L_EXPENSE'),
      width: '8%'
    },
    {
      key: 'code4',
      label: t('L_DATE'),
      width: '8%'
    },
    {
      key: 'code5',
      label: t('L_ORDER'),
      width: '8%'
    },
    {
      key: 'code6',
      label: t('L_DESC'),
      width: '8%'
    },
    {
      key: 'code7',
      label: t('L_ACC_ACT_TYPE'),
      width: '12%'
    },
    {
      key: 'code8',
      label: t('L_SERVICE_TYPE'),
      width: '8%'
    },
    {
      key: 'code9',
      label: t('L_ACC_NUM'),
      width: '8%'
    },
    {
      key: 'code10',
      label: t('L_TYPE_INVOICE'),
      width: '8%'
    },
    {
      key: 'code11',
      label: t('L_MONEY_AMNT'),
      width: '8%'
    },
    {
      key: 'code12',
      label: t('L_STATUS'),
      width: '8%'
    }
  ];
};
