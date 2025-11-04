import { useTranslation } from 'react-i18next';

export const ExpenseRevenueColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: "",
      width: '8%'
    },
    {
      key: 'code2',
      label: t('L_SET_NUMBER'),
      width: '8%'
    },
    {
      key: 'code3',
      label: t('L_ACC_DEBIT'),
      width: '8%'
    },
    {
      key: 'code4',
      label: t('L_ACC_CREDIT'),
      width: '8%'
    },
    {
      key: 'code5',
      label: t('L_CHECK_NO1'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_DATE_RELEVANT'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_VALUE_DATE'),
      width: '8%'
    },
    {
      key: 'code8',
      label: t('L_DEBIT'),
      width: '8%'
    },
    {
      key: 'code9',
      label: t('L_CREDIT'),
      width: '8%'
    },
    {
      key: 'code10',
      label: t('L_DETAILS'),
      width: '12%'
    },
    {
      key: 'code11',
      label: t('L_RUN_NUMBER'),
      width: '8%'
    },
    {
      key: 'code12',
      label: t('L_MANUAL'),
      width: '4%'
    }
  ];
};
