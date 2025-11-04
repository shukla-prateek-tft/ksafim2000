import { useTranslation } from 'react-i18next';

export const SMSMovementsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'c1',
      width: '4%',
      align: 'center'
    },
    {
      key: 'c2',
      label: t('L_MCFW1330_CELL1'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c3',
      label: t('L_DATE_CREATED'),
      width: '14%',
      align: 'center'
    },
    {
      key: 'c4',
      label: t('L_TOPIC_MES'),
      width: '28%',
      align: 'center'
    },
    {
      key: 'c5',
      label: t('L_MCFW1389_TABLE_CELL5'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c6',
      label: t('L_AMOUNT_SMS'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c7',
      label: t('L_MCFW1389_TABLE_CELL7'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c8',
      label: t('L_MCFW1389_TABLE_CELL8'),
      width: '10%',
      align: 'center'
    },{
      key: 'c9',
      width: '4%',
      align: 'center'
    },
  ];
};
