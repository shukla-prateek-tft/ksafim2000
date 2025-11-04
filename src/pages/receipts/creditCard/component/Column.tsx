import { useTranslation } from 'react-i18next';

export const ScholarshipSectionColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'L_Invoice_Number',
      label: t('#'),
      width: '10%'
    },
    {
      key: 'vineCode',
      label: t('L_PAY_WAY'),
      width: '10%'
    },
    {
      key: 'codeDescription',
      label: t('L_PAYMENT_DATE'),
      width: '10%'
    },
    {
      key: 'accountant',
      label: `${t('L_CREDIT_CHEQ_NO')}${t('/')}`,
      width: '10%'
    },

    {
      key: 'list',
      label: t('L_VALID_DATE'),
      width: '10%'
    },
    {
      key: 'codeDescription2',
      label: t('L_BANK'),
      width: '10%'
    },
    {
      key: 'accountant2',
      label: t('L_CREDIT_TYPE'),
      width: '10%'
    },
    {
      key: 'appSecond2',
      label: t('L_BANK_ACT_NO'),
      width: '10%'
    },
    {
      key: 'list2',
      label: t('L_SUM'),
      width: '10%'
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
      label: t('L_STUDENT'),
      width: '15%'
    },
    {
      key: 'STUDENT_ID',
      label: `${t('L_SPECIAL_ACT')} / ${t('L_MON_RET_NO')}`,
      width: '15%'
    },
    {
      key: 'FAMILY_NAME',
      label: `${t('L_SERVICE_TYPE')} / ${t('L_STUDENT')}`,
      width: '15%'
    },
    {
      key: 'FAMILY_NAME2',
      label: `${t('L_ACC_ACT_TYPE')} / ${t('L_ACC_CARD')}`,
      width: '15%'
    },
    {
      key: 'ASS_CO',
      label: `${t('L_MONEY_AMNT')} / ${t('L_PRIORITY_RPT')}`,
      width: '15%'
    },
    {
      key: 'LEFT_DATE',
      label: `${t('L_DEDUCT')} / ${t('L_TOTAL')}`,
      width: '15%'
    }
  ];
};
