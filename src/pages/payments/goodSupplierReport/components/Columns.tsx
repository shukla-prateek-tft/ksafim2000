import { useTranslation } from 'react-i18next';
export const GoodSupplierReportColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SUPP'),
      width: '15%',
    },
    {
      key: 'code2',
      label: t('L_SUPP_NAME'),
      width: '20%',
    },
    {
      key: 'code3',
      label: t('L_TAX_PCT_S'),
      width: '20%',
    },
    {
      key: 'code4',
      label: t('L_TAX'),
      width: '15%',
    },
    {
      key: 'code5',
      label: t('L_TAX_NUM'),
      width: '15%',
    },
    {
      key: 'code6',
      label: t('L_VAT_FOLDER'),
      width: '15%'
    }
  ];
};
