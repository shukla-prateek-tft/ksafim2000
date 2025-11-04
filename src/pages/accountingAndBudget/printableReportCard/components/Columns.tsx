import { Column } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
export const PrintableReportCardColumn = (): Column<any>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      width: '3%'
    },
    {
      key: 'code2',
      label: t('L_SET_NUMBER'),
      width: '6%'
    },
    {
      key: 'code3',
      label: t('L_DATE_RELEVANT'),
      width: '6%'
    },
    {
      key: 'code4',
      label: t('L_CHECK_NO1'),
      width: '7%'
    },
    {
      key: 'code5',
      label: t('L_VALUE_DATE'),
      width: '7%'
    },
    {
      key: 'code6',
      label: t('L_DEBIT'),
      width: '7%'
    },
    {
      key: 'code7',
      label: t('L_CREDIT'),
      width: '7%'
    },
    {
      key: 'code8',
      label: t('L_REST'),
      width: '7%'
    },
    {
      key: 'code9',
      label: t('L_CONTRA'),
      width: '10%'
    },
    {
      key: 'code10',
      label: t('L_DETAILS'),
      width: '12%'
    },
    {
      key: 'code11',
      label: t('L_DOC'),
      width: '15%'
    },
    {
      key: 'code12',
      label: t('L_USER_NAME'),
      width: '8%'
    },
    {
      key: 'code13',
      label: t('L_MANUAL'),
      width: '5%'
    }
  ];
};
