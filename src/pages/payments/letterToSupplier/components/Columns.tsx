import { useTranslation } from 'react-i18next';
export const LetterToSupplierColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_COMMAND_TYPE'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_PAYMENT'),
      width: '15%'
    },
    {
      key: 'code3',
      label: t('L_DESCRIPTION2'),
      width: '35%'
    },
    {
      key: 'code4',
      label: t('L_FROM_PAY_DATE'),
      width: '15%'
    },
    {
      key: 'code5',
      label: t('L_INVOICE'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_MONEY_AMNT'),
      width: '15%'
    }
  ];
};
