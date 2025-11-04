import React from 'react';
import { useTranslation } from 'react-i18next';

export const PaymentVoucherFirstColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_INVOICE'),
      width: '12%'
    },
    {
      key: 'code2',
      label: t('L_EXPENSE_DOC'),
      width: '12%'
    },
    {
      key: 'code3',
      label: t('L_DATE'),
      width: '12%'
    },
    {
      key: 'code4',
      label: t('L_ORDER_S'),
      width: '12%'
    },
    {
      key: 'code5',
      label: t('L_DESC'),
      width: '12%'
    },
    {
      key: 'code6',
      label: t('L_SERVICE_TYPE'),
      width: '14%'
    },
    {
      key: 'code7',
      label: t('L_ACC_NUM'),
      width: '14%'
    },
    {
      key: 'code8',
      label: t('L_MONEY_AMNT'),
      width: '12%'
    }
  ];
};

export const PaymentVoucherSecondColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_PAY_WAY'),
      width: '20%'
    },
    {
      key: 'code2',
      label: t('L_PAYMENT_DATE'),
      width: '16%'
    },
    {
      key: 'code3',
      label: t('L_BANK'),
      width: '16%'
    },
    {
      key: 'code4',
      label: t('L_BANK_ACCOUNT'),
      width: '16%'
    },
    {
      key: 'code5',
      label: t('L_CHECK_NUM'),
      width: '16%'
    },
    {
      key: 'code6',
      label: t('L_MONEY_AMNT'),
      width: '16%'
    }
  ];
};
