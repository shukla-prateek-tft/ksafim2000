import { useTranslation } from 'react-i18next';
export const ConfirmationOfReceiptOfMoneyFromPettyCashColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SUPP_NUM'),
      width: '15%',
    },
    {
      key: 'code2',
      label: t('L_SUPP_NAME'),
      width: '20%',
    },
    {
      key: 'code3',
      label: t('L_SUPP_DEALER'),
      width: '20%',
    },
    {
      key: 'code4',
      label: t('L_MARK_TO_FILE'),
      width: '20%',
    },
    {
      key: 'code5',
      label: t('L_VAT_FOLDER'),
      width: '20%',
    },
  ];
};
