import { useTranslation } from 'react-i18next';

export const ScholarshipSectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t(''),
      width: '15%'
    },
    {
      key: 'vineCode',
      label: t('L_MCSW0101'),
      width: '15%'
    },
    {
      key: 'codeDescription',
      label: t(''),
      width: '15%'
    },
    {
      key: 'accountant',
      label: t('L_SERVICE_TYPE'),
      width: '15%'
    },
    {
      key: 'appSecond',
      label: t('L_ACC_NO'),
      width: '20%'
    },
    {
      key: 'list',
      label: t('L_MONEY_AMNT'),
      width: '20%'
    }
  ];
};

export const CentralizedCorrectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'CHECK',
      label: t(''),
      width: '10%'
    },
    {
      key: 'LEFT_DATE2',
      label: t(''),
      width: '20%'
    },
    {
      key: 'STUDENT_ID',
      label: t('L_MCSW0101'),
      width: '20%'
    },
    {
      key: 'FAMILY_NAME',
      label: t('L_PRIORITY_S'),
      width: '10%'
    },
    {
      key: 'FAMILY_NAME2',
      label: t('L_SERVICE_TYPE'),
      width: '10%'
    },
    {
      key: 'ASS_CO',
      label: t('L_ACC_NUM'),
      width: '15%'
    },
    {
      key: 'LEFT_DATE',
      label: t('L_MONEY_AMNT'),
      width: '15%'
    }
  ];
};
