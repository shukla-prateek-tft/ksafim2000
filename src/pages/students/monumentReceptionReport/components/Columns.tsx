import { useTranslation } from 'react-i18next';
export const MonumentReceptionReportColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_FILE_NAME'),
      width: '40%'
    },
    {
      key: 'code2',
      label: t('L_ADD_REC'),
      width: '30%'
    },
    {
      key: 'code3',
    label: t('L_UPDATE_REC'),
      width: '30%'
    },
  ];
};

export const MonumentReceptionCandidatesReportColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '20%'
    },
    {
      key: 'code2',
      label: t('L_FAMILY_NAME'),
      width: '20%'
    },
    {
      key: 'code3',
      label: t('L_PRIVATE_NAME'),
      width: '20%'
    },
    {
      key: 'code4',
      label: t('L_CLASS_CODE'),
      width: '20%'
    },
    {
      key: 'code5',
      label: t('L_LEFT_DATE'),
      width: '20%'
    },
  ];
};
