import { useTranslation } from 'react-i18next';

const SelectingStudentsForAscholarshipColumn = () => {
  const { t } = useTranslation('common');

  return [
    {
      key: 'code1',
      label: t('L_SIMUN'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_ID'),
      width: '16%'
    },
    {
      key: 'code3',
      label: t('L_FAMILY_NAME'),
      width: '16%'
    },
    {
      key: 'code4',
      label: t('L_PRIVATE_NAME'),
      width: '16%'
    },
    {
      key: 'code5',
      label: t('L_CLASS_CODE'),
      width: '16%'
    },
    {
      key: 'code6',
      label: t('L_SUM_LEFT'),
      width: '16%'
    },
    { key: 'code7', label: t('IF_ORAT_KEVA'), width: '10%' }
  ];
};

export default SelectingStudentsForAscholarshipColumn;
