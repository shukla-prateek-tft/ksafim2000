import { useTranslation } from 'react-i18next';
export const FinancialTransactionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SERVICE_TYPE'),
      width: '18%'
    },
    {
      key: 'code2',
      label: t('L_PAY_DATE'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_ACC_NO'),
      width: '17%'
    },
    {
      key: 'code4',
      label: t('L_PLAN'),
      width: '8%'
    },
    {
      key: 'code5',
      label: t('L_RECEIPT'),
      width: '8%'
    },
    {
      key: 'code6',
      label: t('L_ACC_ACT_TYPE'),
      width: '16%'
    },
    {
      key: 'code7',
      label: t('L_S_CREDIT_DEBIT'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_REST'),
      width: '13%'
    }
  ];
};
