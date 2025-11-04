import { useTranslation } from 'react-i18next';
export const IncomeTaxSuppliersReportColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_PAY_WAY'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_PAYMENT_DATE'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_RECEIPT'),
      width: '10%'
    },
    {
      key: 'code4',
      label: t('L_BANK_S'),
      width: '10%'
    },
    {
      key: 'code5',
      label: t('L_BANK_ACCOUNT'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_CONCENTRATION'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_CHECK_NUM'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_PAYER'),
      width: '10%'
    },
    {
      key: 'code9',
      label: t('L_PAY_DATE'),
      width: '10%'
    },
    {
      key: 'code10',
      label: t('L_INCOME'),
      width: '10%'
    }
  ];
};
