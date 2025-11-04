import { useTranslation } from 'react-i18next';

export const RecordsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_ID_CITY_CODE'),
      width: '33%'
    },
    {
      key: 'vineCode',
      label: `${t('L_PAYER_NAME')} /${t('L_CITY')} `,
      width: '33%'
    },
    {
      key: 'codeDescription',
      label: t('L_STUDENTS'),
      width: '33%'
    }
  ];
};
