import { useTranslation } from 'react-i18next';

export const ExpenseVoucherWithItemsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_INVOICE'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_VOUCHER'),
      width: '8%'
    },
    {
      key: 'code3',
      label: t('L_DATE'),
      width: '8%'
    },
    {
      key: 'code4',
      label: t('L_ORDER_S'),
      width: '10%'
    },
    {
      key: 'code5',
      label: t('L_DESC'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_SERVICE_TYPE'),
      width: '18%'
    },
    {
      key: 'code7',
      label: t('L_ACC_NUM'),
      width: '18%'
    },
    {
      key: 'code8',
      label: t('L_MONEY_AMNT'),
      width: '18%'
    }
  ];
};

export const ExpenseVoucherWithItemsSecondColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('#'),
      width: '5%'
    },
    {
      key: 'code2',
      label: t('L_CATALOG_NO'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_PROD_NAME'),
      width: '15%'
    },
    {
      key: 'code4',
      label: t('L_AMOUNT'),
      width: '5%'
    },
    {
      key: 'code5',
      label: t('L_UN_PRICE'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_MCFR1364_Label'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_SERVICE_TYPE'),
      width: '15%'
    },
    {
      key: 'code8',
      label: t('L_ACC_CARD'),
      width: '15%'
    },
    {
      key: 'code9',
      label: t('L_ACCL_MCFW0603_HIGH_SCHOOL_NUM'),
      width: '5%'
    },
    {
      key: 'code10',
      label: t('L_SUG_TAKTZIV'),
      width: '10%'
    }
  ];
};
