import { useTranslation } from 'react-i18next';
export const StatusByReceptionReportColumns = () => {
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
      label: t('L_CREDIT'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'code5',
      label: t('L_RECEIVE_NUM'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'code6',
      label: t('L_RECIEPT_DATE'),
      width: '15%',
      align: 'center'
    }
  ];
};
