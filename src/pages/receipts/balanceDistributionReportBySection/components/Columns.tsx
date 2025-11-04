import { useTranslation } from 'react-i18next';
export const BalanceDistributionReportBySectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('#'),
      width: '25%'
    },
    {
      key: 'code2',
      label: t('L_MCFW0582_ID'),
      width: '25%'
    },
    {
      key: 'code3',
      label: t('L_FAMILY_NAME'),
      width: '25%'
    },
    {
      key: 'code4',
      label: t('L_PRIVATE_NAME'),
      width: '25%'
    }
  ];
};
