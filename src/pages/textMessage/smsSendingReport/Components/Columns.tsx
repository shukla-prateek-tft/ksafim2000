import { useTranslation } from 'react-i18next';
export const SmsSendingReportColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: "#",
      width: '5%',
    },
    {
      key: 'code2',
      label: t('V_STUDENT'),
      width: '12%',
    },
    {
      key: 'code3',
      label: t('L_NAME'),
      width: '12%',
    },
    {
      key: 'code4',
      label: t('L_CLASS_CODE'),
      width: '5%',
    },
    {
      key: 'code5',
      label: t('L_STATUS'),
      width: '5%',
    },
    {
      key: 'code6',
      label: t('L_SEND_DATE'),
      width: '12%'
    },
    {
      key: 'code7',
      label: t('L_PATHER_PHONE'),
      width: '12%'
    },
    {
      key: 'code8',
      label: t('L_MOTHER_PHONE'),
      width: '12%'
    },
    {
      key: 'code9',
      label: t('L_GUARD_PHONE'),
      width: '12%'
    },
    {
      key: 'code10',
      label: t('L_ERROR_1'),
      width: '12%'
    }
  ];
};
