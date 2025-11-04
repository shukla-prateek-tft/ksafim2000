import classes from './ManagerInterface.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/commonButtons';
import { attachMultipleClasses } from '@/Languages';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
const ManagerInterfaceUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const ItemView = ({ title, description }: any) => {
    return (
      <div className={classes.itemView}>
        <p className={classes.itemTitle}>{title}</p>
        <p className={classes.itemDescription}>{description}</p>
      </div>
    );
  };
  return (
    <ScreenLayout
      renderFooter={<Footer icon={undefined} title={''} />}
      screenNumber="MCFW1345"
      renderHeader={renderActionItems()}
    >
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_ADMIN_SCREEN')}`}</legend>
        <div className={classes.innerContainer}>
          <div className={classes.innerBox}>
            <span className={classes.textCenter}>{t('L_BALANCE_DATE')}</span>
            <ItemView title={t('L_BANK_ACC_NAME')} description="sdfgsdsf" />
            <div className={classes.aligner}>
              <ItemView title={t('L_NUM_ACCOUNT')} description="sdfgsdsf" />
              <ItemView title={t('L_ITRA_DATE')} description="sdfgsdsf" />
            </div>
            <div className={classes.inputContainer}>
              <Input type="amount" maxLength={11} onChange={() => {}} onBlur={() => {}} disabled />
            </div>
            <div className={classes.boxContainer}>
              <Button variant="outline" title={t('L_BALANCE_DATE')} />
              <Button variant="outline" title={t('T_MCFW1299')} />
            </div>
          </div>
          <div className={classes.innerBox}>
            <span className={classes.textCenter}>{t('L_BALANCE_DATE')}</span>
            <ItemView title={t('L_BANK_ACC_NAME')} />
            <div className={classes.aligner}>
              <ItemView title={t('L_NUM_ACCOUNT')} />
              <ItemView title={t('L_ITRA_DATE')} />
            </div>
            <div className={classes.inputContainer}>
              <Input type="amount" maxLength={11} onChange={() => {}} onBlur={() => {}} />
            </div>
            <div className={classes.boxContainer}></div>
          </div>
        </div>
        <p className={attachMultipleClasses(classes.legend, classes.textCenter)}>
          {t('L_DATA_CONCENTR')}
        </p>
        <div className={classes.innerContainer}>
          <div className={classes.innerBox}>
            <span className={classes.textCenter}>{t('L_PERSENT')}</span>

            <div className={classes.inputContainer}>
              <Input type="number" maxLength={6} />
            </div>
            <div className={classes.boxContainer}>
              <Button variant="outline" title={t('L_COLLECT_STATUS')} />
            </div>
          </div>
          <div className={classes.innerBox}>
            <span className={classes.textCenter}>{t('L_OPEN_INV')}</span>

            <div className={classes.inputContainer}>
              <Input type="amount" maxLength={11} onChange={() => {}} onBlur={() => {}} disabled />
            </div>
            <div className={classes.boxContainer}>
              <Button variant="outline" title={t('L_TO_PAY')} />
            </div>
          </div>
          <div className={classes.innerBox}>
            <span className={classes.textCenter}>{t('L_CASHBOX')}</span>

            <div className={classes.inputContainer}>
              <Input type="amount" maxLength={11} onChange={() => {}} onBlur={() => {}} disabled />
            </div>
            <div className={classes.boxContainer}>
              <Button variant="outline" title={t('L_CASH_REP1')} />
            </div>
          </div>
        </div>
      </fieldset>
    </ScreenLayout>
  );
};

export default ManagerInterfaceUI;
