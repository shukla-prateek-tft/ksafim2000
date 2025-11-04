import { useTranslation } from 'react-i18next';
export const LocatingStudentsColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'Student_Id',
      label: t('L_ID'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'Family_Name',
      label: t('L_FAMILY_NAME'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'Private_Name',
      label: t('L_PRIVATE_NAME'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'Class_Code',
      label: t('L_CLASS_CODE'),
      width: '25%',
      align: 'center'
    }
  ];
};
