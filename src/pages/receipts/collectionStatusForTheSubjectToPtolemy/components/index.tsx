import { useTranslation } from 'react-i18next';
export const CollectionStatusForTheSubjectToPtolemyTopColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_NUM'),
      width: '12.5%',
    },
    {
      key: 'code2',
      label: t('L_STUDENT'),
      width: '12.5%',
    },
    {
      key: 'code3',
      label: t('L_NAME'),
      width: '12.5%',
    },
    {
      key: 'code4',
      label: t('L_CLASS_CODE'),
      width: '12.5%',
    },
    {
      key: 'code5',
      label: t('L_DEBIT'),
      width: '12.5%',
    },
    {
      key: 'code6',
      label: t('L_CREDIT'),
      width: '12.5%',
    },
    {
      key: 'code7',
      label: t('L_TO_COLLECT'),
      width: '12.5%'
    },
  ];
};
