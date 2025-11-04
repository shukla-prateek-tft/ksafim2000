import React from 'react';
import classes from './BankReconciliationSection.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { BottomToolBar } from '@/ui/BottomToolBar';

const BankReconciliationSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')}: ${t('T_MCFR0686')}`}</legend>
        <div>
          <Select
            size="md"
            orientation="horizontal"
            label={t('L_BANK')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={1}
          />
          <div className={classes.radioContainer}>
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('V_BANK_MATCH')}
              tabIndex={2}
            />
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('V_BANK_DONT_MAT')}
              tabIndex={3}
            />
            <Input type="checkbox" orientation="horizontal" label={t('V_ALL')} tabIndex={4} />
          </div>
        </div>
        <div className={classes.checkBoxConatiner}>
          <div>
            <Input type="checkbox" orientation="horizontal" label={t('L_BANKS')} tabIndex={5} />
            <Input type="checkbox" orientation="horizontal" label={t('L_DEBIT')} tabIndex={6} />
          </div>
          <div>
            <Input type="checkbox" orientation="horizontal" label={t('L_BOOKS')} tabIndex={7} />
            <Input type="checkbox" orientation="horizontal" label={t('L_CREDIT')} tabIndex={8} />
          </div>
        </div>

        <RangeSelector
          labelOrientation="horizontal"
          type="text"
          fromLabel={t('L_FROM_DATE')}
          toLabel={t('L_TO')}
          maxLength={6}
          tabIndex={9}
        />

        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          fromLabel={t('L_FROM_MERGE')}
          toLabel={t('L_TO')}
          maxLength={6}
          tabIndex={10}
        />
      </fieldset>
      <BottomToolBar pagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default BankReconciliationSectionUI;
