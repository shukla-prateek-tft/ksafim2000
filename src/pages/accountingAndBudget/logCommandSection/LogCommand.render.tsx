import classes from './LogCommand.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';
import { RangeSelector } from '@/ui/DateRangePicker';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { LogCommandUIProps } from './types';

const LogCommandUI = ({ 
  renderActionItems,
  onChange,
  filter,
  onRangeChange 
}: LogCommandUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')} : ${t('T_MCFR0605')}`}</legend>

        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          fromLabel={t('L_FROM_SET')}
          toLabel={t('L_TO')}
          toId='toSet'
          toValue={filter.toSet}
          fromId='toSet'
          fromValue={filter.fromSet}
          maxLength={6}
          onChange={onRangeChange}
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_FROM_VAL_DATE')}
          toLabel={t('L_TO')}
          fromId='fromValDate'
          toId='toValDate'
          fromValue={filter.fromValDate}
          toValue={filter.toValDate}
          onChange={onRangeChange}
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_FROM_REL_DATE')}
          toLabel={t('L_TO')}
          fromId='fromRelDate'
          toId='toRelDate'
          fromValue={filter.fromRelDate}
          toValue={filter.toRelDate}          
          onChange={onRangeChange}
        />

        <Input size="md" orientation="horizontal" label={t('L_CHECK_NO1')} type='number' maxLength={16} value={filter.checkNo} onChange={(e) => onChange('checkNo', e.target.value)} />

        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_FROM_RUN_NUM')}
          toLabel={t('L_TO')}
          fromId='fromRunDate'
          toId='toRunDate'
          fromValue={filter.fromRunDate}
          toValue={filter.toRunDate}
          onChange={onRangeChange}
        />

        <div className={classes.flex}>
          <Input size="md" orientation="horizontal" label={t('L_DEBIT')} type='amount' maxLength={9} value={filter.debit} onChange={(e) => onChange('debit', e.target.value)} />
          <Input size="md" orientation="horizontal" label={t('L_CREDIT')} type='amount' maxLength={9} value={filter.credit} onChange={(e) => onChange('credit', e.target.value)} />
        </div>
        <div className={classes.flex}>
          <Select
            size="md"
            orientation="horizontal"
            label={t('L_RIGHT')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            value={filter.right}
            onChange={(e)=> onChange('right', e.target.value)}
          />
          <Select
            size="md"
            orientation="horizontal"
            label={t('L_OBLIGATION')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            value={filter.obligation}
            onChange={(e) => onChange('obligation', e.target.value)}
          />
        </div>

        <GroupRadio
          labelOrientation="horizontal"
          title={t('L_LEFT_TYPE')}
          orientation="horizontal"
          options={[
            { label: t('L_SUM_NOT_ZERO'), value: 'dsdsd' },
            { label: t('L_TEXTMCFS0605'), value: 'dsdsd' },
            { label: t('L_YEAR_CURR'), value: 'dsdsd1' }
          ]}
          name={''}
          selectedValue={filter.leftType}
          onChange={(value) => onChange('leftType', value)}
        />

        <div className={classes.innerContainer}>
          <p>{t('L_HASHAV_EXIST')}</p>
          <p>{t('L_0605_DESC')}</p>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default LogCommandUI;
