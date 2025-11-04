import { useTranslation } from 'react-i18next';

export const ParentDetailsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_MCSW0107_KINSHIP'),
      width: '7%',
      align: 'center'
    },
    {
      key: 'code2',
      label: t('L_MCFW0582_ID'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('L_FAMILY_NAME'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_PRIVATE_NAME'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'code5',
      label: t('L_MAIL_DEF'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'code6',
      label: t('L_PHONE'),
      width: '10%'
    },
    {
      key: 'code7',
      label: t('L_MOBILE'),
      width: '10%'
    },
    {
      key: 'code8',
      label: t('L_BANKBRANCH'),
      width: '15%',
      align: 'center'
    },
    {
      key: 'code9',
      label: t('L_ACCOUNT_NUMBER'),
      width: '8%',
      align: 'center'
    },
    {
      key: 'code10',
      label: t('L_PAYER'),
      width: '5%',
      align: 'center'
    }
  ];
};

export const StudentGroupColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_CHARGE'),
      width: '18%',
      align: 'center'
    },
    {
      key: 'code2',
      label: t('L_DESC'),
      width: '35%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('L_STUDY_GROUP'),
      width: '30%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_AUTO_SET'),
      width: '17%',
      align: 'center'
    }
  ];
};
export const DiscountColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_A_DISCOUNT'),
      width: '40%',
      align: 'center'
    },
    {
      key: 'code2',
      label: t('L_DESC'),
      width: '60%',
      align: 'center'
    }
  ];
};

export const DiscountAccountColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_A_DISCOUNT'),
      width: '13%',
      align: 'center'
    },
    {
      key: 'code2',
      label: t('L_ACC_ACT_TYPE'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('L_DISCOUNT_SUM'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_DISCOUNT_PCT'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'code5',
      label: t('L_CANCELED'),
      width: '12%',
      align: 'center'
    }
  ];
};

export const ServiceTypeColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SERVICE_TYPE'),
      width: '30%',
      align: 'center'
    },
    {
      key: 'code2',
      label: t('L_ACC_NO'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('L_ACC_ACT_TYPE'),
      width: '25%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_DISCOUNT_PCT'),
      width: '10%',
      align: 'center'
    },
    {
      key: 'code5',
      label: t('L_DISCOUNT_SUM'),
      width: '15%',
      align: 'center'
    }
  ];
};
