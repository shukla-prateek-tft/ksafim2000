import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_DISCOUNT'),
      width: '33%'
    },
    {
      key: 'vineCode',
      label: t('L_FULL_NAME'),
      width: '33%'
    },
    {
      key: 'codeDescription',
      label: t('L_DESC'),
      width: '33%'
    },
 
  ];
};
