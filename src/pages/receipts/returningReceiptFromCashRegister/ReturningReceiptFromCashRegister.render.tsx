import classes from './ReturningReceiptFromCashRegister.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';
import { useTranslation } from 'react-i18next';
const ReturningReceiptFromCashRegisterUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFS1185_TITLE')}</legend>
        <div className={classes.itemsContainer}>
          <div>
            <Input
              orientation="horizontal"
              label={t('L_RECEIPT')}
              size="fullWidth"
              type="number"
              pattern={getInputPattern(6)}
            />
            <Input
              orientation="horizontal"
              value={t('L_ACT_NO')}
              isLabel
              size="fullWidth"
              type="text"
              maxLength={7}
            />
          </div>
          <Input
            type="checkbox"
            checked={false}
            label={t('L_GIFT_RECEIPT')}
            orientation="horizontal"
            size="fullWidth"
          />
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ReturningReceiptFromCashRegisterUI;
