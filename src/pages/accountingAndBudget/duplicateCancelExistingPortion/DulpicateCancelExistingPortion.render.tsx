import classes from './DulpicateCancelExistingPortion.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { DulpicateCancelExistingPortionUIProps } from './types';

const DulpicateCancelExistingPortionUI = ({
  renderActionItems,
  filter,
  onChange,
  onRangeSelect
}: DulpicateCancelExistingPortionUIProps) => {
  const { t } = useTranslation('common');
  const v_button_mark = 2;
  let header;
  if (v_button_mark == 2) {
    header = t('L_STORNO_COMMAND');
  } else {
    header = t('L_COPY_ACTION');
  }

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend>{header}</legend>

        <Input
          orientation="horizontal"
          label={t('L_SET_NUMBER')}
          size="md"
          type='number'
          maxLength={6}
          value={filter.setNumber}
          onChange={(e) => onChange('setNumber', e.target.value)}
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_DATE_RELEVANT')}
          toLabel={t('L_VALUE_DATE')}
          fromId='valueDate'
          toId='relevantDate'
          toValue={filter.relevantDate}
          fromValue={filter.valueDate}
          onChange={onRangeSelect}
        />
        <Input
          orientation="horizontal"
          label={t('L_CHECK_NO1')}
          size="md"
          type='number'
          maxLength={16}
          value={filter.checkNo}
          onChange={(e) => onChange('checkNo', e.target.value)}
        />
        <Input
          orientation="horizontal"
          label={t('L_DETAILS')}
          size="md"
          type='text'
          maxLength={30}
          value={filter.details}
          onChange={(e) => onChange('details', e.target.value)}
        />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default DulpicateCancelExistingPortionUI;
