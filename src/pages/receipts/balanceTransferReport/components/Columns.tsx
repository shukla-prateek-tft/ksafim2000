import { useTranslation } from 'react-i18next';
export const BalanceTransferReportColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '20%'
    },
    {
      key: 'code2',
      label: t('L_CLASS_CODE'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_F_YEAR'),
      width: '10%'
    },
    {
      key: 'code4',
      label: t('L_FROM_SECTION'),
      width: '15%'
    },
    {
      key: 'code5',
      label: t('L_PER_YEAR'),
      width: '10%'
    },
    {
      key: 'code6',
      label: t('L_TO_SECTION'),
      width: '15%'
    },
    {
      key: 'code7',
      label: t('L_SUM'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_USER_NAME'),
      width: '10%'
    }
  ];
};
