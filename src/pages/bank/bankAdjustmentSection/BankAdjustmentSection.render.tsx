import React from 'react';
import classes from './BankAdjustmentSection.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';

const BankAdjustmentSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')} : ${t('T_MCFR1183')}`}</legend>
        <div className={classes.mainContainer}>
          <Select
            orientation="horizontal"
            label={t('L_BANK_ACC')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="md"
            tabIndex={1}
          />
          <GroupRadio
            onChange={() => {}}
            orientation="horizontal"
            options={[
              { label: t('V_UNMERGE_ONLY'), value: 'dsdsd' },
              { label: t('V_MERGE_ONLY'), value: 'dsdsd' }
            ]}
            name={''}
            selectedValue={''}
            labelOrientation="horizontal"
            tabIndex={2}
          />
          <div className={classes.flex}>
            <DatePickerComponent
              selectedDate={new Date()}
              onChange={() => {}}
              placeholder=" "
              id="L_DATE"
              size="md"
              orientation="horizontal"
              label={t('L_VALUE_DATE')}
              tabIndex={3}
            />
            <DatePickerComponent
              selectedDate={new Date()}
              onChange={() => {}}
              placeholder=" "
              id="L_DATE"
              size="md"
              orientation="horizontal"
              label={t('L_TO')}
              tabIndex={4}
            />
          </div>
          <Input
            orientation="horizontal"
            label={t('L_MERGE')}
            size="md"
            type="number"
            maxLength={5}
            tabIndex={5}
          />
          <Input
            type="checkbox"
            orientation="horizontal"
            label={t('L_UNBALANCED')}
            size="md"
            tabIndex={6}
          />
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default BankAdjustmentSectionUI;
