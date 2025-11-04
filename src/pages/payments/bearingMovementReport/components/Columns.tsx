import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { BearingMovementReport } from '../types';

export const BearingMovementReportColumn = (): TableColumnType<BearingMovementReport>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'supp_id',
      label: t('L_SUPP_NUM'),
      width: '15%'
    },
    {
      key: 'supp_name',
      label: t('L_SUPP_NAME'),
      width: '15%'
    },
    {
      key: 'bank',
      label: t('L_BANK'),
      width: '15%'
    },
    {
      key: 'bank_account',
      label: t('L_BANK_ACCOUNT'),
      width: '15%'
    },
    {
      key: 'desc_aut',
      label: t('L_DESC'),
      width: '15%'
    },
    {
      key: 'outcome',
      label: t('L_SUM'),
      width: '15%'
    },
    {
      key: 'signature',
      label: t('L_SIGNATURE'),
      width: '15%'
    }
  ];
};
