import React, { useState } from 'react';
import classes from './ChangePaymentDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { ChangePaymentDetailsUIProps } from './type';
import { getFormatedDate } from '@/utils/commonHelper';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { REGEX } from '@/constants/appConstant';

const ChangePaymentDetailsUI = ({
  renderActionItems,
  data,
  loading,
  newPaymentDate,
  setNewPaymentDate,
  newCheckNum,
  setNewCheckNum
}: ChangePaymentDetailsUIProps) => {
  const { t } = useTranslation('common');
  const [amount, setAmount] = useState('');
  const [repaymentDate, setRepaymentDate] = useState<Date | null>(
    data?.payment_Date ? new Date(data.payment_Date) : null
  );

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleAmountBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && !isNaN(Number(value))) {
      setAmount(Number(value).toFixed(2));
    }
  };

  const handleRepaymentDateChange = (date: Date | null) => {
    setRepaymentDate(date);
  };

  return (
    <>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW1328')}</legend>
        <div className={classes.section}>
          <RangeSelector
            labelOrientation="horizontal"
            type="number"
            fromLabel={t('L_ACT_NO')}
            fromValue={data?.act_No}
            toValue={data?.df_Date}
            toLabel={t('L_CHANGE_DATE2')}
          />
          <Input
            type="amount"
            orientation="horizontal"
            label={t('L_MONEY_AMNT')}
            size="md"
            value={amount}
            onChange={handleAmountChange}
            onBlur={handleAmountBlur}
            maxLength={10}
          />
        </div>
        <div className={classes.section}>
          <div className={classes.container}>
            <Input
              type="number"
              label={t('L_CHECK_NUM')}
              orientation="horizontal"
              value={data?.check_Num}
              size="md"
              readOnly
            />
            <Input
              pattern={REGEX.allCharacter}
              label={t('L_NEW_VALUE')}
              orientation="horizontal"
              value={newCheckNum}
              size="md"
              onChange={e => setNewCheckNum(e.target.value)}
              maxLength={16}
            />
          </div>

          <div className={classes.container}>
            <DatePickerComponent
              label={t('L_REPAYMENT_DATE')}
              selectedDate={repaymentDate}
              onChange={handleRepaymentDateChange}
              size="md"
              orientation="horizontal"
            />
            <DatePickerComponent
              label={t('L_NEW_VALUE')}
              selectedDate={newPaymentDate}
              onChange={setNewPaymentDate}
              size="md"
              orientation="horizontal"
            />
          </div>
        </div>
      </fieldset>

      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </>
  );
};

export default ChangePaymentDetailsUI;
