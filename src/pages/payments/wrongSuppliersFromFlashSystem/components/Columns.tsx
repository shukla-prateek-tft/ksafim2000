import { useTranslation } from 'react-i18next';

export const SupplierFileColumns = () => {
  const { t } = useTranslation('common');
  return [
 {
      key: 'c1',
      label: t('L_SUPP_NUM'),
      width: '12%',
      align: 'center'
    },
    {
      key: 'c2',
      label: t('L_SUPP_NAME'),
      width: '20%',
      align: 'center'
    },
    {
      key: 'c3',
      label: t('L_TAX_NUM'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c4',
      label: t('L_VAT_FOLDER'),
      width: '12%',
      align: 'center'
    },
    {
      key: 'c5',
      label: t('L_ERROR_CODE'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c6',
      label: t('L_ERROR_DESC'),
      width: '25%',
      align: 'center'
    },
  ];
};

export const SupplierFileErrColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'c1',
      label: t('L_SUPP_NUM'),
      width: '12%',
      align: 'center'
    },
    {
      key: 'c2',
      label: t('L_SUPP_NAME'),
      width: '20%',
      align: 'center'
    },
    {
      key: 'c3',
      label: t('L_TAX_PCT_S'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c4',
      label: t('L_TAX'),
      width: '16%',
      align: 'center'
    },
    {
      key: 'c5',
      label: t('L_ERROR_DESC'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'c6',
      label: t('L_TAX_NUM'),
      width: '12%',
      align: 'center'
    },
    {
      key: 'c7',
      label: t('L_VAT_FOLDER'),
      width: '12%',
      align: 'center'
    }
  ];
};
