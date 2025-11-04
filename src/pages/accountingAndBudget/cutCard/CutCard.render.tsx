import classes from './CutCard.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { GroupRadio } from '@/ui/GroupRadio';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { Card } from '@/ui/Card';
import { CutCardUIProps } from './types';

const CutCardUI = ({ 
  renderActionItems, 
  filter, 
  onChange,
}: CutCardUIProps) => {
  const hidden = false;
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <Card title={`${t('L_QUERY')}: ${t('T_MCFR0681')}`}>
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_F_VALUE_DATE')}
          toLabel={t('L_TO')}
          toId='to'
          fromId='from'
          toValue={filter.valueDate?.to}
          fromValue={filter.valueDate?.from}
          onChange={(newRange: Record<string, string>) => onChange('valueDate', newRange)}
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
          onChange={(newRange: Record<string, string>) => onChange('relevantDate', newRange)}
        />
        <div className={classes.itemContainer}>
          <Input type="dropdown" orientation="horizontal" label={t('L_ACC_NO')} size="md" value={filter.accNo} onChange={(e) => onChange('accNo', e.target.value)} />
          <Input orientation="horizontal" label={t('L_FILTER')} size="md" type='text' maxLength={10} value={filter.accFilter} onChange={(e) => onChange('accFilter', e.target.value)} />
        </div>
        {!hidden && (
          <div className={classes.selectContainer}>
            <Select options={[]} size="fullWidth" />
          </div>
        )}
        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          maxLength={10}
          fromLabel={t('L_FROM_CARD')}
          toLabel={t('L_TO')}
          toId='to'
          fromId='from'
          toValue={filter.fromCard?.to}
          fromValue={filter.fromCard?.from}
          onChange={(newRange: Record<string, string>) => onChange('fromCard', newRange)}
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          maxLength={3}
          fromLabel={t('L_FROM_SORT')}
          toLabel={t('L_TO')}
          toId='to'
          fromId='from'
          toValue={filter.sort?.to}
          fromValue={filter.sort?.from}
          onChange={(newRange: Record<string, string>) => onChange('sort', newRange)}
        />

        <div className={classes.itemContainer}>
          <Select
            orientation="horizontal"
            label={t('L_SORT_CODE')}
            options={[
              { label: t('V_CODE1'), value: 1 },
              { label: t('V_CODE2'), value: 2 },
              { label: t('V_CODE3'), value: 3 },
              { label: t('V_CODE4'), value: 4 }
            ]}
            value={filter.sortCode}
            onChange={(e) => onChange('sortCode', e.target.value)}
          />
          <Input type="checkbox" orientation="horizontal" label={t('L_NOT_ZERO')} checked={filter.notZero} onChange={(e) => onChange('notZero', e.target.value)} />
        </div>
        {!hidden && (
          <div className={classes.bottom}>
            <Input orientation="horizontal" label={t('L_F_SYSTEM_YEAR')} type='number' maxLength={4} value={filter.fromSystemYear} onChange={(e) => onChange('fromSystemYear', e.target.value)} />
            <Input orientation="horizontal" label={t('L_TO')} type='number' maxLength={4} value={filter.toSystemYear} onChange={(e) => onChange('toSystemYear', e.target.value)} />
          </div>
        )}
        <div className={classes.groupContainer}>
          <GroupRadio
            onChange={(value) => onChange('sortOrder', value)}
            title={t('L_SORT_ORDER')}
            orientation="horizontal"
            labelOrientation="horizontal"
            options={[
              { label: t('L_DATE_RELEVANT'), value: 'dsdsd' },
              { label: t('L_VALUE_DATE'), value: 'dsdsd' }
            ]}
            name={''}
            selectedValue={filter.sortOrder}
          />
        </div>

        <div className={classes.itemContainer}>
          <div className={classes.groupContainer}>
            <GroupRadio
              onChange={(value) => onChange('catalog', value)}
              title={t('L_CATALOG_TO')}
              orientation="horizontal"
              labelOrientation="horizontal"
              options={[
                { label: t('L_STUDY'), value: 'dsdsd' },
                { label: t('L_KANEND_YEAR'), value: 'dsdsd' }
              ]}
              name={''}
              selectedValue={filter.catalog}
            />
          </div>
          <Input orientation="horizontal" label={t('L_KALENDAR_YEAR')} type='number' maxLength={4} value={filter.kalendarYear} onChange={(e) => onChange('kalendarYear', e.target.value)} />
        </div>
        <div className={classes.bottom}>
          <Input orientation="horizontal" label={t('L_FROM_DATE')} type='date' disabled />
          <Input orientation="horizontal" label={t('L_TO')} type='date' disabled />
        </div>
      </Card>

      <div className={classes.bottomBarContent}>
        <div>{t('L_REMARK')}</div>
        <Badge renderIcon={<PiWarningCircleFill />} variant="warning" title={t('L_0603_DESC')} />
      </div>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CutCardUI;
