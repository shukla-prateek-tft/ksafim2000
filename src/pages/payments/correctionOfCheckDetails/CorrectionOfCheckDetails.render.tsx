import React, { useState } from 'react';
import classes from './CorrectionOfCheckDetails.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { DatePicker } from '@/ui/DatePicker';
import { getInputPattern } from '@/utils/commonHelper';
import { REGEX } from '@/constants/appConstant';

interface FormState {
  amount: string;
  bankFrom: string;
  bankTo: string;
  bankAccountFrom: string;
  bankAccountTo: string;
  changeDate: Date | null;
  paymentDateFrom: string;
  paymentDateTo: string;
}

const CorrectionOfCheckDetailsUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const [formState, setFormState] = useState<FormState>({
    amount: '',
    bankFrom: '',
    bankTo: '',
    bankAccountFrom: '',
    bankAccountTo: '',
    changeDate: null,
    paymentDateFrom: '',
    paymentDateTo: ''
  });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({
      ...prev,
      amount: e.target.value
    }));
  };

  const handleAmountBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && !isNaN(Number(value))) {
      setFormState(prev => ({
        ...prev,
        amount: Number(value).toFixed(2)
      }));
    }
  };

  const handleBankRangeChange = (values: Record<string, string>) => {
    setFormState(prev => ({
      ...prev,
      bankTo: values.to ?? prev.bankTo
    }));
  };

  const handleBankAccountRangeChange = (values: Record<string, string>) => {
    setFormState(prev => ({
      ...prev,
      bankAccountTo: values.to ?? prev.bankAccountTo
    }));
  };

  const handleChangeDate = (date: Date | null) => {
    setFormState(prev => ({
      ...prev,
      changeDate: date
    }));
  };

  const handlePaymentDateRangeChange = (values: Record<string, string>) => {
    setFormState(prev => ({
      ...prev,
      paymentDateTo: values.to ?? prev.paymentDateTo
    }));
  };

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW0615')}</legend>
        <div className={classes.mainContainer}>
          <div className={classes.flex}>
            <Input
              orientation="horizontal"
              label={t('L_RECEIPT')}
              pattern={REGEX.allCharacter}
              maxLength={6}
            />
            <Input
              orientation="horizontal"
              label={t('L_MONEY_AMNT')}
              type="amount"
              maxLength={10}
              value={formState.amount}
              onChange={handleAmountChange}
              onBlur={handleAmountBlur}
            />
            <DatePicker
              label={t('L_CHANGE')}
              orientation="horizontal"
              selectedDate={formState.changeDate}
              onChange={handleChangeDate}
            />
          </div>
          <div className={classes.flexCol}>
            <RangeSelector
              labelOrientation="horizontal"
              type="text"
              fromLabel={t('L_PAY_WAY')}
              toLabel={t('L_NEW_VALUE')}
              size="fullWidth"
              maxLength={60}
            />
            <RangeSelector
              labelOrientation="horizontal"
              type="date"
              fromLabel={t('L_PAYMENT_DATE')}
              toLabel={t('L_NEW_VALUE')}
              size="fullWidth"
              fromValue={formState.paymentDateFrom}
              toValue={formState.paymentDateTo}
              onChange={handlePaymentDateRangeChange}
            />
            <RangeSelector
              labelOrientation="horizontal"
              type="number"
              fromLabel={t('L_BANK')}
              toLabel={t('L_NEW_VALUE')}
              size="fullWidth"
              toValue={formState.bankTo}
              fromValue={formState.bankFrom}
              onChange={handleBankRangeChange}
              pattern={getInputPattern(5)}
            />
            <RangeSelector
              labelOrientation="horizontal"
              type="number"
              fromLabel={t('L_BANK_ACCOUNT')}
              toLabel={t('L_NEW_VALUE')}
              size="fullWidth"
              fromValue={formState.bankAccountFrom}
              toValue={formState.bankAccountTo}
              pattern={getInputPattern(9)}
              onChange={handleBankAccountRangeChange}
            />
            <RangeSelector
              labelOrientation="horizontal"
              type="text"
              fromLabel={t('L_CHECK_NUM')}
              toLabel={t('L_NEW_VALUE')}
              size="fullWidth"
              maxLength={16}
            />
          </div>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CorrectionOfCheckDetailsUI;
