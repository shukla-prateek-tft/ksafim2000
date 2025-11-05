import { useTranslation } from 'react-i18next';
import classes from '../TrialBalanceWithoutBudget.module.scss';
export const TrialBalanceWithoutBudgetColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_SORT'),
      width: '11.1%',
    },
    {
      key: 'code2',
      label: t('L_CODE'),
      width: '11.1%',
    },
    {
      key: 'code3',
      label: t('L_CODE_GEFEN'),
      width: '11.1%',
    },
    {
      key: 'code4',
      label: t('L_DESC'),
      width: '11.1%',
    },
    {
      key: 'code5',
      width: '11.1%',
       header: () => (
        <div className={classes['column-fourth']}>
          <div className={classes.title}>{t('L_REST_OPEN')}</div>
          <div className={classes['column-third']}>
            <div>{t('L_CREDIT')}</div>
          </div>
        </div>
      )
    },
    {
      key: 'code6',
      label: t('L_REST'),
      width: '11.1%',
       header: () => (
        <div className={classes['column-fourth']}>
          <div className={classes.title}>{t('L_REST_OPEN')}</div>
          <div className={classes['column-third']}>
            <div>{t('L_DEBIT')}</div>
          </div>
        </div>
      )
    },
    {
      key: 'code7',
      label: t('L_DEBIT'),
      width: '11.1%'
    },
    {
      key: 'code8',
      label: t('L_CREDIT'),
      width: '11.1%'
    },
      {
      key: 'code9',
      label: t('L_REST'),
      width: '11.1%'
    },
  ];
};
