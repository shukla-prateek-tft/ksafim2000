import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ClosePettyCash.module.scss';
import { Input } from '@/ui/Input';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { ClosePettyCashUIProps } from './types';
import { REGEX } from '@/constants/appConstant';

const ClosePettyCashUI = ({
  renderActionItems,
  paywayData,
  handleChangeFilters,
  handleDateChange,
  filters,
  title
}: ClosePettyCashUIProps) => {
  const { t } = useTranslation('common');
  return (

    <div className={classes.container}>
      <fieldset>
        <legend>{t('T_MCFW0619')}</legend>
        <div className={classes.formGroup}>
          <div className={classes.section}>
            <Input
              tabIndex={1}
              label={t('L_DOCUMENT')}
              disabled
              orientation="horizontal"
              size="md"
              id="Act_No"
              onChange={handleChangeFilters}
              value={filters?.Act_No || ''}
            />
            <DatePickerComponent
              tabIndex={2}
              label={t('L_PAY_DATE')}
              onChange={date => handleDateChange(date, 'Pay_Date')}
              selectedDate={filters?.Pay_Date ? new Date(filters.Pay_Date) : new Date()}
              orientation="horizontal"
              size="md"
              id="Pay_Date"
            />
          </div>
          <Select
            tabIndex={3}
            label={t('L_ACC_CARD')}
            options={[]}
            orientation="horizontal"
            size="md"
            id="Oposit_Card"
            onChange={handleChangeFilters}
            value={filters?.Oposit_Card || ''}
          />
          <Select
            tabIndex={4}
            label={t('L_BANK_ACC')}
            options={[]}
            orientation="horizontal"
            size="md"
            id="Bank_Card"
            onChange={handleChangeFilters}
            value={filters?.Bank_Card || ''}
          />
          <Input
            tabIndex={5}
            type="text"
            pattern={REGEX.allCharacter}
            maxLength={30}
            label={t('L_DETAILS')}
            orientation="horizontal"
            size="md"
            id="Desc_Aut"
            onChange={handleChangeFilters}
            value={filters?.Desc_Aut || ''}
          />
        </div>
      </fieldset>
      <div className={classes.bottomContainer}>
        <Select
          tabIndex={6}
          label={t('L_PAY_WAY')}
          options={paywayData ?? []}
          size="sm"
          value={filters?.Pay_Way || ''}
          id="Pay_Way"
          placeholder=""
          disabled
          onChange={handleChangeFilters}
        />
        <DatePickerComponent
          tabIndex={7}
          label={t('L_PAYMENT_DATE')}
          onChange={date => handleDateChange(date, 'Payment_Date')}
          selectedDate={filters?.Payment_Date ? new Date(filters.Payment_Date) : null}
          size="sm"
          id="Payment_Date"
        />
        <Input
          label={t('L_MONEY_AMNT')}
          orientation="vertical"
          disabled
          tabIndex={8}
          size="sm"
          id="Income"
          value={filters?.Income?.toString() || ''}
          type="amount"
          maxLength={11}
          onChange={handleChangeFilters}
        />
      </div>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default ClosePettyCashUI;
