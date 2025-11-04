import { useTranslation } from 'react-i18next';
export const FromStudentColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '30%'
    },
    {
      key: 'code2',
      label: t('L_SERVICE_TYPE'),
      width: '20%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('L_ACC_NO'),
      width: '20%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_INCOME'),
      width: '15%',
      align: 'center'
    }
  ];
};

export const ForStudentColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT'),
      width: '30%'
    },
    {
      key: 'code2',
      label: t('L_SERVICE_TYPE'),
      width: '20%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('L_ACC_NO'),
      width: '20%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_INCOME'),
      width: '15%',
      align: 'center'
    }
  ];
};
