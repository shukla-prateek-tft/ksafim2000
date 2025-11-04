import { Column } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
export const BankAdjustmentColumns = (): Column<any>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'c1',
      width: '5%'
    },
    {
      key: 'c2',
      label:t('L_MERGE'),
      width: '23%'
    },
    {
      key: 'c3',
      label: t('L_VALUE_DATE'),
      width: '23%'
    },{
      key: 'c4',
      label: t('L_DOCUMENT'),
      width: '23%'
    },
    {
      key: 'c5',
      label: t('L_MONEY'),
      width: '23%'
    }
  ];
};
