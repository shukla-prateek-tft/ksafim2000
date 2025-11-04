
import { useTranslation } from 'react-i18next';


export const PullingOutMyPermitAuthorizedCardColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'dbName',
      label: t("L_DB"),
      width: '7%'
    },
    {
      key: 'institute',
      label: t("L_INSTI"),
      width: '7%'
    },
    {
      key: 'instituteName',
      label: t("INST_NAME"),
      width: '7%'
    },
    {
      key: 'year',
      label: t("L_YEAR"),
      width: '7%'
    },
    {
      key: 'setNumber',
      label: t("L_SET_NUMBER"),
      width: '7%'
    },
    {
      key: 'valueDate',
      label: t("L_VALUE_DATE"),
      width: '7%'
    },
    {
      key: 'relevantDate',
      label: t("L_DATE_RELEVANT"),
      width: '7%'
    },
    {
      key: 'creditAccount',
      label: t("L_ACC_CREDIT"),
      width: '7%'
    },
    {
      key: 'creditName',
      label: t("V_CARD_NAME"),
      width: '7%'
    },
    {
      key: 'debitAccount',
      label: t("L_ACC_DEBIT"),
      width: '7%'
    },
    {
      key: 'debitName',
      label: t("V_CARD_NAME"),
      width: '10%'
    },
    {
      key: 'credit',
      label: t('V_CREDIT'),
      width: '10%'
    },
    {
      key: 'debit',
      label: t('V_DEBIT'),
      width: '10%'
    },
    
  ];
};
