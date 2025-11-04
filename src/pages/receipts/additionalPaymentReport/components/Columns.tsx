import { useTranslation } from 'react-i18next';
export const AdditionalPaymentReportColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_PARENT_NAME'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_BANK'),
      width: '10%'
    },
    {
      key: 'code4',
      label: t('L_BANK_ACCOUNT'),
      width: '7%'
    },
    {
      key: 'code5',
      label: t('L_PAY_DATE'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_SUM'),
      width: '12%'
    },
    {
      key: 'code7',
      label: t('L_TOTAL'),
      width: '8%'
    },
    {
      key: 'code8',
      label: t('L_SERVICE_TYPE'),
      width: '13%'
    },
    {
      key: 'code9',
      label: t('L_STUDENT_AMNT'),
      width: '20%'
    }
  ];
};
