import { useTranslation } from 'react-i18next';

export const LocatingSettlementsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_CITY_NAME'),
      width: '70%'
    },
    {
      key: 'code2',
      label: t('L_CITY_CODE'),
      width: '30%'
    }
  ];
};
