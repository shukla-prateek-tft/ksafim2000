import { useTranslation } from 'react-i18next';
export const CancellingABankTransferColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '28%'
    },
    {
      key: 'code2',
      label: t('L_SERVICE_TYPE'),
      width: '18%'
    },
    {
      key: 'code3',
      label: t('L_ACC_NO'),
      width: '18%'
    },
    {
      key: 'code4',
      label: t('L_CREDIT'),
      width: '18%'
    },
    {
      key: 'code4',
      label: t('L_BILL_SUM'),
      width: '18%'
    },
  ];
};
