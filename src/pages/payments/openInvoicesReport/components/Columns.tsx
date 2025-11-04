import { useTranslation } from 'react-i18next';
export const OpenInvoicesReportColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SUPP_NUM'),
      width: '8%',
    },
    {
      key: 'code2',
      label: t('L_SUPP_NAME'),
      width: '11%',
    },
    {
      key: 'code3',
      label: t('L_EXPENSE'),
      width: '8%',
    },
    {
      key: 'code4',
      label: t('L_INVOICE'),
      width: '8%',
    },
    {
      key: 'code5',
      label: t('L_HESB_DATE'),
      width: '8%',
    },
    {
      key: 'code6',
      label: t('L_ORDER_S'),
      width: '8%'
    },
    {
      key: 'code7',
      label: t('L_DESC'),
      width: '11%'
    },
    {
      key: 'code8',
      label: t('L_SERVICE_TYPE'),
      width: '11%'
    },
    {
      key: 'code9',
      label: t('L_ACC_NUM'),
      width: '11%'
    },
    {
      key: 'code10',
      label: t('L_MONEY_AMNT'),
      width: '8%'
    },
    {
      key: 'code11',
      label: t('L_STATUS'),
      width: '8%'
    }
  ];
};
