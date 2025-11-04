import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_BANK_NAME'),
      width: '7.5%'
    },
    {
      key: 'code2',
      label: t('L_SERVICE_TYPE'),
      width: '20%'
    },
    {
      key: 'code3',
      label: t('L_ACC_NO'),
      width: '20%'
    },
    {
      key: 'code4',
      label: t('L_ACC_ACT_TYPE'),
      width: '15%'
    },
    {
      key: 'code5',
      label: t('L_SUM'),
      width: '7.5%'
    },
    {
      key: 'code6',
      label: t('L_F_CLASS_CODE'),
      width: '7.5%'
    },
    {
      key: 'code7',
      label: t('L_TO_CLASS'),
      width: '7.5%'
    },
    {
      key: 'code8',
      label: t('L_TO_PARENT_PAY'),
      width: '7.5%'
    },
   {
      key: 'code9',
      label: t('L_TO_PARENT_PAY2'),
      width: '7.5%'
    },
   
  ];
};

