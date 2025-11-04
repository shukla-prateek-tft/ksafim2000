import classes from './ChargesAndDiscount.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { TextArea } from '@/ui/TextArea';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { getInputPattern } from '@/utils/commonHelper';
import { DatePicker } from '@/ui/DatePicker';

interface ChargesAndDiscountProps {
  renderActionItems: () => JSX.Element;
}

const ChargesAndDiscount = ({ renderActionItems }: ChargesAndDiscountProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.rowContainer}>
        <legend className={classes.legend}>{t('T_MCFW0603')}</legend>
        <Input
          label={t('L_SUPP_NUM')}
          placeholder={t('L_SUPP_NUM')}
          orientation="horizontal"
          type="number"
          pattern={getInputPattern(10)}
        />
        <Input orientation="horizontal" type="number" pattern={getInputPattern(2)} />
        <Input
          label={t('L_SUPP_NAME')}
          placeholder={t('L_SUPP_NAME')}
          orientation="horizontal"
          type="text"
          maxLength={30}
        />
      </fieldset>
      <fieldset>
        <div className={classes.rowContainer}>
          <Input
            label={t('L_INVOICE_NUM')}
            placeholder={t('L_INVOICE_NUM')}
            orientation="horizontal"
            type="number"
            pattern={getInputPattern(10)}
          />
          <DatePicker
            selectedDate={new Date()}
            onChange={() => {}}
            label={t('L_DATE')}
            placeholder={t('L_DATE')}
            orientation="horizontal"
          />
        </div>
        <Input
          size="fullWidth"
          label={t('L_DESC')}
          placeholder={t('L_DESC')}
          orientation="horizontal"
          type="text"
          maxLength={30}
        />
        <div className={`${classes.rowContainer} ${classes.invoiceContainer}`}>
          <TextArea orientation="horizontal" label={t('L_SERVICE_TYPE')} />
          <div>
            <Input
              label={t('L_TYPE_INVOICE')}
              placeholder={t('L_TYPE_INVOICE')}
              orientation="horizontal"
            />
            <Input placeholder={t('L_DESC_AUT')} orientation="horizontal" maxLength={30} />
          </div>
        </div>
        <div className={classes.rowContainer}>
          <Select
            label={t('L_ACC_ACT_TYPE')}
            placeholder={t('L_ACC_ACT_TYPE')}
            options={[
              { label: '5', value: '5' },
              { label: '10', value: '10' }
            ]}
          />
          <Input
            label={t('L_SUM')}
            placeholder={t('L_SUM')}
            orientation="horizontal"
            type="amount"
            maxLength={11}
          />
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ChargesAndDiscount;
