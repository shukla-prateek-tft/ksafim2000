import { RangeSelector } from '@/ui/DateRangePicker';
import classes from './ListOfPaymentInstructionsFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { getInputPattern, getLengthPattern } from '@/utils/commonHelper';

interface ListOfPaymentInstructionsFiltersProps {
  renderActionItems: () => JSX.Element;
}

const ListOfPaymentInstructionsFilters = ({
  renderActionItems
}: ListOfPaymentInstructionsFiltersProps) => {
  const { t } = useTranslation('common');
  const hidden = false; // This should be replaced with actual logic to determine visibility
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW1327')}</legend>
        <RangeSelector
          type="date"
          fromLabel={t('L_FROM_PAY_DATE')}
          toLabel={t('L_PAY_DATE1')}
          labelOrientation="horizontal"
        />
        <RangeSelector
          fromLabel={t('L_FR_PAYMENT')}
          toLabel={t('L_PAYMENT')}
          labelOrientation="horizontal"
          type="number"
          maxLength={6}
          pattern={getLengthPattern(6)}
        />
        <RangeSelector
          fromLabel={t('L_FR_CHECK')}
          toLabel={t('L_CHECK_NUMBER')}
          labelOrientation="horizontal"
          type="text"
          maxLength={16}
          pattern={getInputPattern(16)}
        />
        <div className={classes.otherDetailContainer}>
          <Input
            size="sm"
            label={t('L_SUPP')}
            orientation="horizontal"
            type="number"
            pattern={getLengthPattern(10)}
            maxLength={10}
          />
          <Input type='text' size="sm" disabled orientation="horizontal" pattern={getInputPattern(30)} />
        </div>
        {!hidden && <Input type="checkbox" label={t('L_CURRENT_YEAR')} orientation="horizontal" />}
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ListOfPaymentInstructionsFilters;
