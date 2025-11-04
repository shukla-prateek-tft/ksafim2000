import { useTranslation } from 'react-i18next';

export const ListColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_CHARGE'),
      width: '20%'
    },
    {
      key: 'code2',
      label: t('L_FULL_NAME'),
      width: '20%'
    },
    {
      key: 'code3',
      label: t('L_DESC'),
      width: '20%'
    },
    {
      key: 'code4',
      label: t('L_F_CLASS_CODE'),
      width: '20%'
    },
    {
      key: 'code5',
      label: t('L_TO_CLASS'),
      width: '20%'
    },
   
  ];
};
