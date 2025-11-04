import { useTranslation } from 'react-i18next';
export const ListOfReceiptsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_MAIL'),
      width: '7%'
    },
    {
      key: 'code2',
      label: t('R_BT'),
      width: '5%'
    },
    {
      key: 'code3',
      label: t('L_RECEIPT'),
      width: '10%'
    },
    {
      key: 'code4',
      label: t('L_DATE'),
      width: '8%'
    },
    {
      key: 'code5',
      label: t('L_PAYER'),
      width: '20%'
    },
    {
      key: 'code6',
      label: t('L_CLASS_CODE'),
      width: '8%'
    },
    {
      key: 'code9',
      label: t('L_MONEY_AMNT'),
      width: '8%'
    },
    {
      key: 'code10',
      label: t('L_TOTAL_CHEQUE'),
      width: '9%'
    },
    {
      key: 'code11',
      label: t('L_TOTAL_CASH'),
      width: '9%'
    },
    {
      key: 'code12',
      label: t('L_CREDIT_MONEY'),
      width: '9%'
    },
    {
      key: 'code13',
      label: t('L_TRANS'),
      width: '9%'
    }
  ];
};
