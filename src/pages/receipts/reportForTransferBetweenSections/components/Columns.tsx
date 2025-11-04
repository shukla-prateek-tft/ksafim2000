import { useTranslation } from 'react-i18next';
export const ReportTransferBetweenSectionsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '20%',
    },
    {
      key: 'code2',
      label: t('L_CLASS_CODE'),
      width: '10%',
    },
    {
      key: 'code3',
      label: t('L_SERVICE_TYPE'),
      width: '20%',
    },
    {
      key: 'code4',
      label: t('L_DEBIT'),
      width: '15%',
    },
    {
      key: 'code5',
      label: t('L_CREDIT'),
      width: '15%',
    },
    {
      key: 'code6',
      label: t('L_REST'),
      width: '15%'
    }
  ];
};
