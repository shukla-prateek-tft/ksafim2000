import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_ID'),
      width: '11%'
    },
    {
      key: 'vineCode',
      label: t('L_FAMILY_NAME'),
      width: '11%'
    },
    {
      key: 'codeDescription',
      label: t('L_PRIVATE_NAME'),
      width: '11%'
    },
    {
      key: 'accountant',
      label: t('L_STREET'),
      width: '11%'
    },
      {
      key: 'L_Invoice_Number2',
      label: t('L_BUILD_NUM'),
      width: '11%'
    },
    {
      key: 'vineCode2',
      label: t('L_CITY'),
      width: '11%'
    },
    {
      key: 'codeDescription2',
      label: t('L_PHONE'),
      width: '11%'
    },
    {
      key: 'accountant2',
      label: t('L_STUDENTS'),
      width: '11%'
    },
      {
      key: 'accountant3',
      label: t('L_MAIL'),
      width: '11%'
    },
   
  ];
};
