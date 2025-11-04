import { useTranslation } from 'react-i18next';
export const StandingOrdersColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_V'),
      width: '4%'
    },
    {
      key: 'code2',
      label: t('L_ID'),
      width: '7%'
    },
    {
      key: 'code3',
      label: t('L_NAME'),
      width: '14%'
    },
    {
      key: 'code4',
      label: t('L_BANK'),
      width: '10%'
    },
    {
      key: 'code5',
      label: t('L_BANK_ACCOUNT'),
      width: '7%'
    },
    {
      key: 'code6',
      label: t('L_NUM_PAYMENTS'),
      width: '7%'
    },
    {
      key: 'code7',
      label: t('L_TOTAL_PAYMENTS'),
      width: '7%'
    },
    {
      key: 'code8',
      label: t('L_START_DATE'),
      width: '7%'
    },
    {
      key: 'code9',
      label: t('L_FIRST_PAYMENT'),
      width: '7%'
    },
    {
      key: 'code10',
      label: t('L_EACH_PAYMENT'),
      width: '7%'
    },
    {
      key: 'code11',
      label: t('L_SEND_DATE'),
      width: '7%'
    },
    {
      key: 'code12',
      label: t('L_PAYED'),
      width: '7%'
    },
    {
      key: 'code13',
      label: t('L_NO_PAYED'),
      width: '7%'
    },
    {
      key: 'code14',
      label: t(''),
      width: '4%'
    }
  ];
};

export const DetailSTtudentColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t(''),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_STUDENT'),
      width: '15%'
    },
    {
      key: 'code3',
      label: t('L_NAME'),
      width: '20%'
    },
    {
      key: 'code4',
      label: t('L_CLASS_CODE'),
      width: '15%'
    },
    {
      key: 'code5',
      label: t('L_STUD_BALANCE'),
      width: '15%'
    },
    {
      key: 'code6',
      label: t(''),
      width: '10%'
    }
  ];
};
