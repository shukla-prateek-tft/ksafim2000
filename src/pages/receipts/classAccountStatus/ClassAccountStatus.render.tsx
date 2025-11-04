import React from 'react';
import classes from './ClassAccountStatus.module.scss';
import { BottomToolBar } from '@/components';
import { Input, SelectWithInput } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
const ClassAccountStatusUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFS0646_TITLE')}</legend>
        <RangeSelector
          labelOrientation="horizontal"
          fromLabel={t('L_MCFS0646_INPUT_LABEL1')}
          toLabel={t('L_TO')}
          type="number"
          maxLength={10}
        />
        <SelectWithInput
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          label={t('L_CLASS_FROM')}
          onChangeSelect={() => {}}
          onChangeInput={() => {}}
          inputType="number"
          maxLength={2}
        />
        <SelectWithInput
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          label={t('L_AD_CLASS')}
          onChangeSelect={() => {}}
          onChangeInput={() => {}}
          inputType="number"
          maxLength={2}
        />

        <Input type="checkbox" orientation="horizontal" label={t('L_WITH_LEAVING')} />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ClassAccountStatusUI;
