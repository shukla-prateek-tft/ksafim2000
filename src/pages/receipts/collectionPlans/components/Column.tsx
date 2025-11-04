import { useTranslation } from 'react-i18next';

export const ScholarshipSectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_SERVICE_TYPE'),
      width: '20%'
    },
    {
      key: 'vineCode',
      label: t('L_ACC_NUM'),
      width: '20%'
    },
    {
      key: 'codeDescription',
      label: t('L_PRIORITY'),
      width: '20%'
    },
    {
      key: 'accountant',
      label: t('L_SUM'),
      width: '20%'
    },
    {
      key: 'appSecond',
      label: t(''),
      width: '20%'
    },
    {
      key: 'appSecond2',
      label: t(''),
      width: '20%'
    }
  ];
};
