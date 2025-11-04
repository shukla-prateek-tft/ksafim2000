import { useTranslation } from 'react-i18next';

export const PaymentVoucherPrintFirstColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_INVOICE'),
      width: '12.5'
    },
    {
      key: 'code2',
      label: t('L_EXPENSE_DOC'),
      width: '12.5'
    },
    {
      key: 'code3',
      label: t('L_DATE'),
      width: '12.5'
    },
    {
      key: 'code4',
      label: t('L_ORDER_S'),
      width: '12.5%'
    },
    {
      key: 'code5',
      label: t('L_DESC'),
      width: '12.5%'
    },
    {
      key: 'code6',
      label: t('L_SERVICE_TYPE'),
      width: '12.5'
    },
    {
      key: 'code7',
      label: t('L_ACC_NUM'),
      width: '12.5'
    },
     {
      key: 'code8',
      label: t('L_MONEY_AMNT'),
      width: '12.5'
    }
  ];
};

export const  PaymentVoucherPrintSecondColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_PAY_WAY'),
      width: '11.11%'
    },
    {
      key: 'code2',
      label: t('L_Payment_Date'),
      width: '11.11%'
    },
    {
      key: 'code3',
      label: t('L_CREDIT_NO'),
      width: '11.11%'
    },
    {
      key: 'code4',
      label: t('L_VALID_DATE'),
      width: '11.11%'
    },
    {
      key: 'code5',
      label: t('L_BANK'),
      width: '11.11%'
    },
    {
      key: 'code6',
      label: t('L_BANK_ACCOUNT'),
      width: '11.11%'
    },
     {
      key: 'code7',
      label: t('L_CHECK_NUM'),
      width: '11.11%'
    },
     {
      key: 'code8',
      label: t('L_CHECK_NO1'),
      width: '11.11%'
    },
     {
      key: 'code9',
      label: t('L_MONEY_AMNT'),
      width: '11.11%'
    }
  ];
};
export const  PaymentVoucherPrintThirdColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('#'),
      width: '7.6%'
    },
    {
      key: 'code2',
      label: t('L_CATALOG_NO'),
      width: '7.6%'
    },
    {
      key: 'code3',
      label: t('L_PROD_NAME'),
      width: '7.6%'
    },
    {
      key: 'code4',
      label: t('L_AMOUNT'),
      width: '7.6%'
    },
    {
      key: 'code5',
      label: t('L_UN_PRICE'),
      width: '7.6%'
    },
    {
      key: 'code6',
      label: t('V_DEDUCTION'),
      width: '7.6%'
    },
    {     
      key: 'code7',
      label: t('L_VAT_TYPE'),
      width: '7.6%'
    },
    {
      key: 'code8',
      label: t('L_VAT'),
      width: '7.6%'
    },
    {
      key: 'code9',
      label: t('L_SUM_PLUS'),
      width: '7.6%'
    },
    {
      key: 'code10',
      label: t('L_SERVICE_TYPE'),
      width: '7.6%'
    },
    {  
      key: 'code11',
      label: t('l_acc_card'),
      width: '7.6%'
    },
    {     
      key: 'code12',
      label: t('L_CODE_GEFEN'),
      width: '7.6%'
    },
    {      key: 'code13',
      label: t('L_SUG_TAKTZIV'),
      width: '7.6%'    
    },
  ];
};

