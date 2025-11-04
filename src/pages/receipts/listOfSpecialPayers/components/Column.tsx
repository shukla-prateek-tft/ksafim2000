import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { SpecialPayerType } from '../types';
export const ListOfSpecialPayersColumn = (): TableColumnType<Partial<SpecialPayerType>>[]  => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'payer',
      label: t('L_MCFW0598_CELL1'),
      width: '11%',
      align: 'center'
    },
    {
      key: 'payerName',
      label: t('V_NAME'),
      width: '14%',
      align: 'center'
    },
    {
      key: 'city',
      label: t('L_CITY'),
      width: '11%',
      align: 'center'
    },
    {
      key: 'street',
      label: t('L_STREET'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'build',
      label: t('L_BUILD'),
      width: '7%',
      align: 'center'
    },
    {
      key: 'phone',
      label: t('L_PHONE'),
      width: '9%',
      align: 'center'
    },
    {
      key: 'accName',
      label: t('L_MCFW0598_CELL2'),
      width: '14%',
      align: 'center'
    },
    {
      key: 'email',
      label: t('L_MCFW0598_CELL3'),
      width: '14%',
      align: 'center'
    },
    {
      key: 'receipt',
      label: t('L_MCFW0598_CELL4'),
      width: '10%',
      align: 'center'
    }
  ];
};
