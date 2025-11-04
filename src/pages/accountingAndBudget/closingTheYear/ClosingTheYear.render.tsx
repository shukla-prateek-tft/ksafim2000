import classes from './ClosingTheYear.module.scss';
import { BottomToolBar } from '@/components';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/commonButtons';
import { attachMultipleClasses } from '@/Languages';
const ClosingTheYearUI = ({ renderActionItems }: any) => {
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
    <div className={classes.mainContainer}>
     
      <fieldset className={classes.fieldSet}>
         <div className={classes.topContent}>
           <span className={classes.textCenter}>{t('L_BANK_ACC_NAME')}</span>
           <div  className={classes.topContentBottom}>
            <ItemView title={t('L_BANK1')} description="BANK" />
            <ItemView title={t('L_NUM_ACCOUNT')} description="ACC" />
           </div>
      </div>
        <legend className={classes.legend}>{`${t('L_YEAR_END')} : ${t('L_BANK_ACC_NAME')}`}</legend>
        <div className={classes.innerContainer}>
          <div className={classes.innerBox}>
            <span className={classes.textCenter}>{t('L_BANK')}</span>
            <div className={classes.aligner}>
              <ItemView title={t('L_DATE_DAF_BANK')} description="sdfgsdsf" />
              <ItemView title={t('L_L_DATE')} description="sdfgsdsf" />
            </div>
            <ItemView title={t('L_TOT_DEPOSIT')} description="sdfgsdsf" />
            <ItemView title={t('L_ROWS_OPEN')} description="sdfgsdsf" />
            <div className={classes.boxContainer}>
              <Button variant="outline" title={t('T_MCFW0626')} />
              <Button variant="outline" title={t('T_MCFW1299')} />
              <Button variant="outline" title={t('L_BANK_MERGE')} />
            </div>
          </div>
          <div className={classes.innerBox}>
            <span className={classes.textCenter}>{t('L_SUPP_PAY')}</span>
            <ItemView title={t('L_SUM_OPEN_INV')} description="sdfgsdsf" />
            <div className={classes.boxContainer}>
              <Button variant="outline" title={t('L_SUPP_PAY')} />
              <Button variant="outline" title={t('L_INV_OPEN')} />
            </div>
          </div>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.innerBox}>
            <span className={classes.textCenter}>{t('L_PETY_CASH')}</span>
            <ItemView title={t('L_PETY_CASH_ITRA')} description="sdfgsdsf" />
            <div className={classes.boxContainer}>
              <Button variant="outline" title={t('L_EXPENSES_ENT')} />
            </div>
          </div>
          <div className={attachMultipleClasses(classes.innerBox, classes.bigBox)}>
            <div className={classes.centerAlign}>
              <ItemView title={t('L_CASHBOX')} description="sdfgsdsf" />
            </div>
            <div className={classes.aligner}>
              <ItemView title={t('L_TOT_CASH')} description="sdfgsdsf" />
              <ItemView title={t('L_TOT_CREDIT')} description="sdfgsdsf" />
            </div>
            <ItemView title={t('L_TOT_CHECK')} description="sdfgsdsf" />
            <div className={classes.boxContainer}>
              <Button variant="outline" title={t('L_DEPOSIT_LOG')} />
              <Button variant="outline" title={t('L_CASH_REP')} />
            </div>
          </div>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ClosingTheYearUI;
