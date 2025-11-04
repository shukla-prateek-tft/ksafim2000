import { useTranslation } from 'react-i18next';
export const ArticlesForAdmissionColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'text',
      label: t('L_SERVICE_TYPE'),
      width: '50%',
      align: 'center'
    },
    {
      key: 'select',
      label: t('L_ACC_NUM'),
      width: '50%',
      align: 'center'
    },
  ];
};
