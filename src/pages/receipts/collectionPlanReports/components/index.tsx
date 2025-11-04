import { useTranslation } from 'react-i18next';

export const CollectionPlanReportsColumns = () => {
  const { t } = useTranslation('common');

  return [
    { key: 'code1', label: t('L_SERVICE_TYPE'), width: '19%' },
    { key: 'code2', label: t('L_SERVICE_SUBJEC'), width: '19%' },
    { key: 'code3', label: t('L_ACC_NO'), width: '19%' },
    { key: 'code4', label: t('L_ACC_ACT_TYPE'), width: '19%' },
    { key: 'code5', label: t('L_PRIORITY'), width: '10%' },
    { key: 'code6', label: t('L_SUM'), width: '14%' }
  ];
};
