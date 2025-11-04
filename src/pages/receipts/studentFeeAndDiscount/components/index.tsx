import { useTranslation } from 'react-i18next';

export const ListofGefenColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number2',
      label: t('L_ID'),
      width: '10%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_NAME'),
      width: '10%'
    },
    {
      key: 'L_Invoice_Number',
      label: t('L_CITY'),
      width: '10%'
    },
    {
      key: 'STUDENT_ID2',
      label: t('L_PHONE'),
      width: '5%'
    },
    {
      key: 'STUDENT_ID3',
      label: t('L_CLASS_CODE'),
      width: '5%'
    },
    {
      key: 'vineCode',
      label: t('L_LEFT_DATE'),
      width: '10%'
    },
    {
      key: 'codeDescription',
      label: t('L_MAJOR'),
      width: '10%'
    },
    {
      key: 'accountant',
      label: t('IF_ORAT_KEVA'),
      width: '5%'
    },
    {
      key: 'appSecond',
      label: t('V_DEBIT'),
      width: '10%'
    },
    {
      key: 'list',
      label: t('V_CREDIT'),
      width: '10%'
    },
    {
      key: 'errorDescription',
      label: t('L_SUM_LEFT'),
      width: '10%'
    },
    {
      key: 'check',
      label: t(''),
      width: '5%'
    }
  ];
};
