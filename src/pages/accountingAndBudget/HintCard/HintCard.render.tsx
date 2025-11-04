import clsx from 'clsx';
import classes from './HintCard.module.scss';
import { useTranslation } from 'react-i18next';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { GroupRadio } from '@/ui/GroupRadio';
import { Input } from '@/ui/Input';
import { RangeSelector } from '@/ui/DateRangePicker';
import { Select } from '@/ui/Select';
import { HintCardUIProps } from './types';

const HintCardUI = ({ 
  renderActionItems,
  filter,
  onChange 
}: HintCardUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
      <fieldset>
        <legend>{`${t('L_QUERY')} : ${t('T_MCFR0681')}`}</legend>
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_F_VALUE_DATE')}
          toLabel={t('L_TO')}
          toId='to'
          fromId='from'
          toValue={filter.valueDate?.to}
          fromValue={filter.valueDate?.from}
          onChange={(value) => onChange('valueDate', value)}
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_DATE_RELEVANT')}
          toLabel={t('L_TO')}
          toId='to'
          fromId='from'
          toValue={filter.relevantDate?.to}
          fromValue={filter.relevantDate?.from}
          onChange={(value) => onChange('relevantDate', value)}
        />
        <div className={classes.inputRow}>
          <Select size="md" orientation="horizontal" label={t('L_ACC_NO')} options={[]} value={filter.accNo} onChange={(e) => onChange('accNo', e.target.value)} />
          <Input size="md" orientation="horizontal" label={t('L_FILTER')} type='text' maxLength={10} value={filter.accFilter} onChange={(e) => onChange('accFilter', e.target.value)} />
        </div>
        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          fromLabel={t('L_FROM_CARD')}
          toLabel={t('L_TO')}
          toId='to'
          fromId='from'
          toValue={filter.fromCard?.to}
          fromValue={filter.fromCard?.from}
          onChange={(value) => onChange('fromCard', value)}
          maxLength={10}
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          fromLabel={t('L_FROM_SORT')}
          toLabel={t('L_TO')}
          toId='to'
          fromId='from'
          toValue={filter.sort?.to}
          fromValue={filter.sort?.from}
          onChange={(value) => onChange('sort', value)}
          maxLength={3}
        />
        <div className={classes.inputRow}>
          <Select size="md" orientation="horizontal" label={t('L_SORT_CODE')} options={[]} value={filter.sortCode} onChange={(e) => onChange('sortCode', e.target.value)} />
          <Input size="md" orientation="horizontal" type="checkbox" label={t('L_NOT_ZERO')} checked={filter.notZero} onChange={(e) => onChange('notZero', e.target.value)} />
        </div>
        <GroupRadio
          inversed
          orientation="horizontal"
          options={[
            { label: t('L_DATE_RELEVANT'), value: '1' },
            { label: t('L_VALUE_DATE'), value: '2' }
          ]}
          title={t('L_SORT_ORDER')}
          name="group1"
          selectedValue={filter.sortOrder}
          onChange={(value) => onChange('sortOrder', value)}
        />
        <div className={classes.inputRow}>
          <GroupRadio
            inversed
            size="lg"
            orientation="horizontal"
            options={[
              { label: t('L_STUDY'), value: '1' },
              { label: t('L_KANEND_YEAR'), value: '2' }
            ]}
            title={t('L_CATALOG_TO')}
            name="group1"
          selectedValue={filter.catalog}
          onChange={(value) => onChange('catalog', value)}
          />
          <Input orientation="horizontal" label={t('L_KALENDAR_YEAR')} type='number' maxLength={4} value={filter.kalendarYear} onChange={(e) => onChange('kalendarYear', e.target.value)} />
        </div>
        <div className={clsx(classes.inputRow, classes.lastRow)}>
          <Input orientation="horizontal" label={t('L_FROM_DATE')} disabled />
          <Input orientation="horizontal" label={t('L_TO')} disabled />
        </div>
      </fieldset>
      <div className={classes.innerContainer}>
        <p>{t('L_REMARK')}</p>
        <p>{t('L_0603_DESC')}</p>
      </div>
      <BottomToolBar
        showPagination={false}
        renderActionItems={renderActionItems}
      />
    </div>
  );
};

export default HintCardUI;
