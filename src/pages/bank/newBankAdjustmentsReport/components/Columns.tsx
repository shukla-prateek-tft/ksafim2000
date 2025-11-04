import { useTranslation } from 'react-i18next';
export const NewBankAdjustmentsReportBankColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_MERGE'),
      width: '8%',
    },
    {
      key: 'code2',
      label: t('L_VALUE_DATE'),
      width: '8%',
    },
    {
      key: 'code3',
      label: t('L_DOCUMENT'),
      width: '8%',
    },
    {
      key: 'code4',
      label: t('L_DESC'),
      width: '13%',
    },
    {
      key: 'code5',
      label: t('L_MONEY'),
      width: '13%',
    },
  ];
};

export const NewBankAdjustmentsReportSchoolColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_MERGE'),
      width: '8%',
    },
    {
      key: 'code2',
      label: t('L_VALUE_DATE'),
      width: '8%',
    },
    {
      key: 'code3',
      label: t('L_DOCUMENT'),
      width: '8%',
    },
    {
      key: 'code4',
      label: t('L_DESC'),
      width: '13%',
    },
    {
      key: 'code5',
      label: t('L_MONEY'),
      width: '13%',
    },
  ];
};
