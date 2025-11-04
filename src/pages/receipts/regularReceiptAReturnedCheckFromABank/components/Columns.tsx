import { useTranslation } from 'react-i18next';

export const RegularReceiptAReturnedCheckFromABankColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_PAY_WAY'),
      width: '12%'
    },
    {
      key: 'code2',
      label: t('L_Payment_Date'),
      width: '12%'
    },
    {
      key: 'code3',
      label: t('L_BANK'),
      width: '12%'
    },
    {
      key: 'code4',
      label: `${t('L_BANK_ACCOUNT')}/${t('L_PERMIT')}`,
      width: '20%'
    },
    {
      key: 'code5',
      label: `${t('L_CHECK_NUM')}/${t('L_CREDIT_NO')}`,
      width: '20%'
    },
    {
      key: 'code6',
      label: t('L_VALID_DATE'),
      width: '12%'
    },
    {
      key: 'code7',
      label: t('L_MONEY_AMNT'),
      width: '12%'
    }
  ];
};

export const RegularReceiptAReturnedCheckFromABankSecondColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '20%'
    },
    {
      key: 'code2',
      label: t('L_NAME_DESC'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_CLASS_CODE'),
      width: '20%'
    },
    {
      key: 'code4',
      label: t('L_SERVICE_TYPE'),
      width: '10%'
    },
    {
      key: 'code5',
      label: t('L_ACC_NUM'),
      width: '20%'
    },
    {
      key: 'code6',
      label: t('L_MONEY_AMNT'),
      width: '20%'
    }
  ];
};
