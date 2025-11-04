import { useTranslation } from 'react-i18next';

export const ReceivingStudentRecordsFilesColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t(''),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_STATUS'),
      width: '15%'
    },
    {
      key: 'code3',
      label: t('L_MCFW1337_COUNT_REC'),
      width: '15%'
    },
    {
      key: 'code4',
      label: t('L_FILE_NAME'),
      width: '40%'
    },
    {
      key: 'code5',
      label: t('L_MCFW1337_UPDATE_DATE'),
      width: '20%'
    }
  ];
};
