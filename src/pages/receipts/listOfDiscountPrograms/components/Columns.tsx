import { useTranslation } from 'react-i18next';

const ProgramColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'c1',
      label: t('L_PLAN_NUM'),
      width: '20%',
      sortable: true,
      align: 'center'
    },
    {
      key: 'c2',
      label: t('L_PROG_NAME'),
      width: '30%',
      sortable: true,
      align: 'center'
    },
    {
      key: 'c3',
      label: t('L_FULL_NAME'),
      width: '50%',
      sortable: true,
      align: 'center'
    }
  ];
};

export default ProgramColumns;
