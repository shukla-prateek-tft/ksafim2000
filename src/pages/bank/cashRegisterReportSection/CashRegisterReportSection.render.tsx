import React from 'react';
import classes from './CashRegisterReportSection.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { GroupRadio } from '@/ui/GroupRadio';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Label } from '@/ui/Label';

const CashRegisterReportSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFS0664_TITLE')}</legend>
        <Select
          size="md"
          orientation="horizontal"
          label={t('L_PAY_WAY')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          tabIndex={0}
        />

        <Input orientation="horizontal" label={t('L_BANK')} size="md" type="number" maxLength={5} />
        <Input
          orientation="horizontal"
          label={t('L_BANK_ACCOUNT')}
          size="md"
          type="number"
          maxLength={9}
        />
        <RangeSelector
          size="md"
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_PAYMENT_DATE')}
          toLabel={t('L_TO')}
        />

        <Input type="checkbox" orientation="horizontal" label={t('L_CURRENT_YEAR')} />
        <div className={classes.groupRadio}>
          <Label label={t('L_SORT')} />
          <GroupRadio
            labelOrientation="horizontal"
            options={[
              { label: t('L_RECEIPT'), value: 'sdfsdfsd' },
              { label: t('L_PAYMENT_DATE'), value: 'sdfsdfsd' },
              { label: t('L_SUM'), value: 'sdfsdfsd' },
              { label: t('L_BANK'), value: 'sdfsdfsd' }
            ]}
            name={''}
            selectedValue={''}
            onChange={function (value: string | number): void {}}
            inversed
          />
        </div>
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_PAY_DATE')}
          toLabel={t('L_TO')}
        />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default CashRegisterReportSectionUI;
