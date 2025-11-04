import { useTranslation } from 'react-i18next';
export const CollectionStatusForLayerColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SERVICE_SUBJEC'),
      width: '20%',
    },
    {
      key: 'code2',
      label: t('L_SERVICE_TYPE'),
      width: '20%',
    },
    {
      key: 'code3',
      label: t('L_DEBIT'),
      width: '15%',
    },
    {
      key: 'code4',
      label: t('L_CREDIT'),
      width: '15%',
    },
    {
      key: 'code5',
      label: t('L_TO_COLLECT'),
      width: '15%',
    },
    {
      key: 'code6',
      label: t('L_PERSENT'),
      width: '15%'
    }
  ];
};
