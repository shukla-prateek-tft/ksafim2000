import { useTranslation } from 'react-i18next';
export const ListOfPaymentInstructionsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'act_No',
      label: t('L_ACT_NO'),
      width: '12%',
    },
    {
      key: 'check_Num',
      label: t('L_CHECK_NUM'),
      width: '13%',
    },
    {
      key: 'supp_Num',
      label: t('L_SUPP_STUDENT'),
      width: '20%',
    },
    {
      key: 'pay_Date',
      label: t('L_PAY_DATE1'),
      width: '11%',
    },
    {
      key: 'tax_Dedect',
      label: t('L_TAX_DEDUCT'),
      width: '11%',
    },
    {
      key: 'payment_Date',
      label: t('L_PAYMENT_DATE'),
      width: '11%',
    },
    {
      key: 'outcome',
      label: t('L_PAYMENT_SUM'),
      width: '11%',
    },
    {
      key: 'supp_Order',
      label: t('L_ORDER'),
      width: '11%',
    }
  ];
};
