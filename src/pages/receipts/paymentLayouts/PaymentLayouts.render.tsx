import classes from './PaymentLayouts.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { getInputPattern } from '@/utils/commonHelper';
const PaymentLayoutsUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_PAYMENT_SPREAD')}</legend>
        <Input
          orientation="horizontal"
          label={t('L_PAYMENT_NUMBER')}
          type="number"
          pattern={getInputPattern(2)}
        />
        <Input orientation="horizontal" label={t('L_TOTAL_SUM')} type='amount' maxLength={10} />
      </fieldset>
      <div className={classes.innerContainer}>
        <p>{t('L_COMMENT')}</p>
        <div>
          <p>{t('E_506')}</p>
        </div>
      </div>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default PaymentLayoutsUI;
