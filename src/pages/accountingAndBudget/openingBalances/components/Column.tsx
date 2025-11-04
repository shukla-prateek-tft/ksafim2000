import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('L_SET_NUMBER'),
      width: '10%'
    },
    {
      key: 'Date1',
      label: t('L_DATE_RELEVANT'),
      width: '10%'
    },
    {
      key: 'Date2',
      label: t('L_VALUE_DATE'),
      width: '10%'
    },
    {
      key: 'vineCode',
      label: t('L_ACC_ACT_TYPE'),
      width: '10%'
    },
    {
      key: 'codeDescription',
      label: t('L_CHECK_NO1'), //
      width: '10%'
    },
    {
      key: 'accountant',
      label: t('L_DETAILS'),
      width: '10%'
    },
    {
      key: 'appSecond',
      label: t('L_TEMP'),
      width: '10%'
    },
    {
      key: 'list',
      label: t('L_SERVICE_TYPE'),
      width: '10%'
    },
    {
      key: 'errorDescription',
      label: t('L_ACC_CARD'),
      width: '10%'
    },
    {
      key: 'btnText',
      label: t('L_SUM'),
      width: '8%'
    },
    {
      key: 'check',
      label: t(''),
      width: '2%'
    }
  ];
};
