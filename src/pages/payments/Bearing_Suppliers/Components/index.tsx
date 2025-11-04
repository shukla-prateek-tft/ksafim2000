import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_MASAV'),
      width: '10%'
    },
    {
      key: 'vineCode',
      label: t('L_Payment_Dates'),
      width: '10%'
    },
    {
      key: 'codeDescription',
      label: t('L_CHECK_NO1'),
      width: '10%'
    },
    {
      key: 'accountant',
      label: t('L_SUM'),
      width: '15%'
    },
    {
      key: 'appSecond',
      label: t('L_SUPP_TOTAL'),
      width: '15%'
    },
    {
      key: 'list',
      label: t('L_DATE_SEND'),
      width: '15%'
    },
    {
      key: 'errorDescription',
      label: t('L_STATUS'),
      width: '15%'
    },
    {
      key: 'check',
      label: t(''),
      width: '10%'
    }
  ];
};
