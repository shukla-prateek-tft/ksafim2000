import { useTranslation } from 'react-i18next';
export const StudentsWithoutPermanentTeachingColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '20%',
    },
    {
      key: 'code2',
      label: t('L_NAME'),
      width: '20%',
    },
    {
      key: 'code3',
      label: t('L_DEBIT'),
      width: '20%',
    },
    {
      key: 'code4',
      label: t('L_CREDIT'),
      width: '20%',
    },
    {
      key: 'code5',
      label: t('L_TOT'),
      width: '20%',
    },
  ];
};
