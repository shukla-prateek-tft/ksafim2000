import { useTranslation } from 'react-i18next';
export const PaymentsToADetailedPayerColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_PAYER_ID'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_PAYER_NAME'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_MCFW0582_ID'),
      width: '10%'
    },
    {
      key: 'code4',
      label: t('L_STUDENT_NAME'),
      width: '10%'
    },
    {
      key: 'code5',
      label: t('L_CLASS_CODE'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_RECEIPT'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_MCFR0591'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_MONEY'),
      width: '15%'
    },
    {
      key: 'code9',
      label: t('L_PAY_DATE'),
      width: '15%'
    }
  ];
};
