import { useTranslation } from 'react-i18next';
export const CollectionStatusForLayerColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'code2',
      label: t('L_NAME'),
      width: '30%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('L_CLASS_CODE'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_STUD_TOTAL'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'code5',
      label: t('L_TOTAL'),
      width: '20%',
      align: 'center'
    }
  ];
};
