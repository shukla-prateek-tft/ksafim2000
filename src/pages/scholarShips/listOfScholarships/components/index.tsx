import { useTranslation } from 'react-i18next';
export const ListOfScholarshipsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      width: '3%',
      align: 'center'
    },
    {
      key: 'code2',
      label: t('L_MCFW1330_CELL1'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('V_DATE'),
      width: '9%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_SERVICE_TYPE'),
      width: '9%',
      align: 'center'
    },
    {
      key: 'code5',
      label: t('L_ACC_NUM'),
      width: '9%',
      align: 'center'
    },
    {
      key: 'code6',
      width: '9%',
      label: t('L_STOR_ACT_TYPE'),
      align: 'center'
    },
    {
      key: 'code7',
      width: '9%',
      label: t('L_DESCRIPTION'),
      align: 'center'
    },

    {
      key: 'code8',
      width: '9%',
      label: t('L_MILGA_SUM'),
      align: 'center'
    },

    {
      key: 'code9',
      width: '8%',
      label: t('L_DISTRIB_SUM'),
      align: 'center'
    },

    {
      key: 'code10',
      width: '8%',
      label: t('L_MCFW1330_CELL2'),
      align: 'center'
    },

    {
      key: 'code11',
      width: '8%',
      label: t('L_SUM_LEFT'),
      align: 'center'
    },
    {
      key: 'code12',
      width: '8%',
      label: t('L_RECEIVE_NUM'),
      align: 'center'
    },
    {
      key: 'code13',
      width: '3%',
      align: 'center'
    }
  ];
};
