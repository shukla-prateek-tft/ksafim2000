import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'Id',
      label: t('L_ID_CITY_CODE'),
      width: '33%'
    },
    {
      key: 'Name',
      label: `${t('L_PAYER_NAME')} /${t('L_CITY')} `,
      width: '33%'
    },
    {
      key: 'Students',
      label: t('L_STUDENTS'),
      width: '33%'
    }
  ];
};
