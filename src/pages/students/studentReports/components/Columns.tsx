import { useTranslation } from 'react-i18next';
export const IncomeTaxSuppliersReportColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '15%'
    },
    {
      key: 'code2',
      label: t('L_ST_NAME'),
      width: '9%'
    },
    {
      key: 'code3',
      label: t('L_CLASS_CODE'),
      width: '9%'
    },
    {
      key: 'code4',
      label: t('L_CLASS_NUM'),
      width: '9%'
    },
    {
      key: 'code5',
      label: t('L_TABLE_MCFR1362'),
      width: '9%'
    },
    {
      key: 'code6',
      label: t('L_END_DATE'),
      width: '9%'
    },
    {
      key: 'code7',
      label: t('L_UPDATE_DT'),
      width: '9%'
    },
    {
      key: 'code8',
      label: t('L_DEBIT'),
      width: '9%'
    },
    {
      key: 'code9',
      label: t('L_CREDIT'),
      width: '9%'
    },
    {
      key: 'code10',
      label: t('L_REST'),
      width: '9%'
    },
    {
      key: 'code11',
      label: t('L_IS_MAZEVET'),
      width: '9%'
    }
  ];
};
