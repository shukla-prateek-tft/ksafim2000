import { useTranslation } from 'react-i18next';
export const TransferReportBetweenCentralizedSectionsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ORDINAL_NUMBER'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_MCFW0582_ID'),
      width: '15%'
    },
    {
      key: 'code3',
      label: t('L_STUDENT_NAME'),
      width: '35%'
    },
    {
      key: 'code4',
      label: t('L_CLASS_CODE'),
      width: '10%'
    },
    {
      key: 'code5',
      label: t('L_MCFR1382_SUM'),
      width: '15%'
    },
    {
      key: 'code6',
      label: t('L_RECEIPT'),
      width: '15%'
    }
  ];
};
