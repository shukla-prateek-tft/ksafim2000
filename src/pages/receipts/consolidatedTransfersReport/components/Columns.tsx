import { useTranslation } from 'react-i18next';
export const ConsolidatedTransfersReportColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_NUM'),
      width: '5%',

    },
    {
      key: 'code2',
      label: t('L_DATE'),
      width: '10%',
    },
    {
      key: 'code3',
      label: t('L_SERVICE_TYPE'),
      width: '15%',
    },
    {
      key: 'code4',
      label: t('L_BANK_CARD'),
      width: '15%',
    },
    {
      key: 'code5',
      label: t('FROM_CLASS'),
      width: '10%',
    },
    {
      key: 'code6',
      label: t('L_AD_CLASS'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_ACC_ACT_TYPE'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_WITH_LEAVING'),
      width: '10%'
    },
     {
      key: 'code9',
      label: t('L_AMOUNT_RECEIPT'),
      width: '10%'
    },
    {
      key: 'code10',
      label: t('L_AMOUNT_CANCELED'),
      width: '10%'
    },
  ];
};
