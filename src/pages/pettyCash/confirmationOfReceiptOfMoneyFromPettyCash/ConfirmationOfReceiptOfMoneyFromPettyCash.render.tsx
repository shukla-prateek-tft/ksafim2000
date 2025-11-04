import { useTranslation } from 'react-i18next';
import classes from './ConfirmationOfReceiptOfMoneyFromPettyCash.module.scss';
import { Input } from '@/ui/Input';
const ConfirmationOfReceiptOfMoneyFromPettyCashUI = ({ data }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <span>{t('T_MCFR0692')}</span>
      </div>
      <div className={classes.horizontalInputContainer}>
        <Input size="md" label={t('L_INV_DATE')} orientation="horizontal" />
        <Input size="md" label={t('L_DESC')} orientation="horizontal" />
      </div>
      <div className={classes.horizontalInputContainer}>
        <Input size="md" label={t('L_SUPP_NUMBER')} orientation="horizontal" />
        <Input size="md" label={t('L_INVOICE')} orientation="horizontal" />
      </div>
      <div className={classes.horizontalInputContainer}>
        <Input size="md" label={t('L_SERVICE_TYPE')} orientation="horizontal" />
        <Input size="md" label={t('L_ACC_NO')} orientation="horizontal" />
      </div>
      <Input size="fullWidth" label={t('L_NAME')} orientation="horizontal" />
      <div className={classes.bottomContainer}>
        <div className={classes.bottomInnerLeftContainer}>
          <span>{t('L_SIGNITURE')}</span>
        </div>
        <div className={classes.bottomInnerRightContainer}>
          <Input size="md" label={t('L_DEBIT')} orientation="horizontal" />
          <Input size="md" label={t('L_DATE')} orientation="horizontal" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationOfReceiptOfMoneyFromPettyCashUI;
