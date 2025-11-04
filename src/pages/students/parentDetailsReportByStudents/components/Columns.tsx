import { useTranslation } from 'react-i18next';
export const ParentDetailsReportByStudentsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'index',
      label: t('L_NUM'),
      width: '5%'
    },
    {
      key: 'Student',
      label: t('L_ID'),
      width: '6%'
    },
    {
      key: 'Student_Family_Name',
      label: t('L_NAME'),
      width: '8%'
    },
    {
      key: 'Class_Num',
      label: t('L_CLASS_CODE'),
      width: '5%'
    },
    {
      key: 'Pay1',
      label: t('L_PAY_SCHOOL'),
      width: '5%'
    },
    {
      key: 'Father_Id',
      label: t('L_ID'),
      width: '6%'
    },
    {
      key: 'Father_Family_Name',
      label: t('L_NAME'),
      width: '7.5%'
    },
    {
      key: 'Father_Phone',
      label: t('L_PHONE_NUM'),
      width: '6%'
    },
    {
      key: 'Father_Mispar_Nayad1',
      label: t('L_MOBILE_PHONE'),
      width: '6%'
    },
    {
      key: 'Father_Email',
      label: t('L_MAIL'),
      width: '7.5%'
    },
    {
      key: 'Pay',
      label: t('L_PAY_SCHOOL'),
      width: '5%'
    },
    {
      key: 'Mother_Id',
      label: t('L_ID'),
      width: '6%'
    },
    {
      key: 'Mother_Family_Name',
      label: t('L_NAME'),
      width: '7.5%'
    },
    {
      key: 'Mother_Phone',
      label: t('L_PHONE_NUM'),
      width: '6%'
    },
    {
      key: 'Mother_Mispar_Nayad1',
      label: t('L_MOBILE_PHONE'),
      width: '6%'
    },
    {
      key: 'Mother_Email',
      label: t('L_MAIL'),
      width: '7.5%'
    }
  ];
};
