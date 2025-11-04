import { useTranslation } from 'react-i18next';
import classes from '../BalanceReportForThePayerInTheSettlement.module.scss';
export const BalanceReportForThePayerInTheSettlementColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_STUDENT_ID_CARD'),
      width: '11.1%',
    },
    {
      key: 'code2',
      label: t('L_STUDENT_NAME'),
      width: '11.1%',
    },
    {
      key: 'code3',
      label: t('L_S_CLASS_CODE'),
      width: '11.1%',
    },
    {
      key: 'code4',
      label: t('L_STUDENT_ADD'),
      width: '11.1%',
    },
    {
      key: 'code5',
      label: t('L_DEBIT'),
      width: '11.1%',
    },
    {
      key: 'code6',
      label: t('L_CREDIT'),
      width: '11.1%',
    },
    {
      key: 'code7',
      label: t('L_STUD_TOTAL'),
      width: '11.1%'
    },
    {
      key: 'code8',
      label: t('L_TOTAL'),
      width: '11.1%'
    },
  ];
};
