import { useTranslation } from 'react-i18next';
export const FinancialTransactionsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SERVICE_TYPE'),
      width: '10%',
    },
    {
      key: 'code2',
      label: t('L_PAY_DATE'),
      width: '10%',
    },
    {
      key: 'code3',
      label: t('L_ACC_NO'),
      width: '10%',
    },
    {
      key: 'code4',
      label: t('L_PLAN'),
      width: '10%',
    },
    {
      key: 'code5',
      label: t('L_STUDY_GROUP'),
      width: '10%',
    },
    {
      key: 'code6',
      label: t('L_RECEIPT'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_COMMENT'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_ACC_ACT_TYPE'),
      width: '10%'
    },
    {
      key: 'code9',
      label: t('L_SUM'),
      width: '10%'
    },
      {
      key: 'code10',
      label: t('L_REST'),
      width: '10%'
    },

  ];
};
