import { useTranslation } from 'react-i18next';

export const ReturningReceiptColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'c1',
      label: t('V_STUDENT'),
      width: '30%',
      align: 'center'
    },
    {
      key: 'c2',
      label: t('L_SERVICE_TYPE'),
      width: '20%',
      align: 'center'
    },
    {
      key: 'c3',
      label: t('L_ACC_NO'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'c4',
      label: t('L_CREDIT'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'c5',
      label: t('L_BILL_SUM'),
      width: '15%',
      align: 'center'
    }
  ];
};
