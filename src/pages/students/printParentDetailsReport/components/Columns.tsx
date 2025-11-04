import { useTranslation } from 'react-i18next';
export const ParentDetailsReportColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'Num',
      label: t('L_NUM'),
      width: '6%'
    },
    {
      key: 'PAY',
      label: t('L_PAY_SCHOOL'),
      width: '7%'
    },
    {
      key: 'ID_PARENT',
      label: t('L_PARENT_ID'),
      width: '9%'
    },
    {
      key: 'NAME_PARENT',
      label: t('L_PARENT_NAME'),
      width: '9%'
    },
    {
      key: 'PHONE_PARENT',
      label: t('L_PHONE_NUM'),
      width: '9%'
    },
    {
      key: 'MISPAR_NAYAD_PARENT',
      label: t('L_MOBILE_PHONE'),
      width: '9%'
    },
    {
      key: 'EMAIL_PARENT',
      label: t('L_PARENT_MAIL'),
      width: '15%'
    },
    {
      key: 'STUD_ID',
      label: t('L_STUDENT_ID'),
      width: '9%'
    },
    {
      key: 'STUD_NAME',
      label: t('L_STUDENT_NAME'),
      width: '9%'
    },
    {
      key: 'CITY',
      label: t('L_CITY'),
      width: '9%'
    },
    {
      key: 'CLASS',
      label: t('L_CLASS_CODE'),
      width: '9%'
    }
  ];
};
