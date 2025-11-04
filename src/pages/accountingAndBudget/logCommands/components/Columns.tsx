import { useTranslation } from 'react-i18next';

const LogCommandsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'c1',
      label: t('L_NUM'),
      width: '5%',
      align: 'center'
    },
    {
      key: 'c2',
      label: t('L_SET_NUMBER'),
      width: '5%',
      align: 'center'
    },
    {
      key: 'c3',
      label: t('L_DATE_RELEVANT'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c4',
      label: t('L_VALUE_DATE'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c5',
      label: t('L_ACC_ACT_TYPE'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c6',
      label: t('L_CHECK_NO1'),
      width: '6%',
      align: 'center'
    },
    {
      key: 'c7',
      label: t('L_DETAILS'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'c8',
      label: t('L_TEMP'),
      width: '4%',
      align: 'center'
    },
    {
      key: 'c9',
      label: t('L_SERVICE_TYPE'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c10',
      label: t('L_ACC_CARD'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'c11',
      label: t('L_SUM'),
      width: '10%',
      align: 'center'
    },
     {
      key: 'c12',
      label: "",
      width: '3%',
      align: 'center'
    }
  ];
};

export default LogCommandsColumns;
