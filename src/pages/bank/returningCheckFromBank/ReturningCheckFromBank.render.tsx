import React from 'react';
import classes from './ReturningCheckFromBank.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { REGEX } from '@/constants/appConstant';

interface ReturningCheckFromBankUIProps {
  renderActionItems: () => JSX.Element | null;
}
const ReturningCheckFromBankUI: React.FC<ReturningCheckFromBankUIProps> = ({
  renderActionItems
}) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('T_MCFW0624')}`}</legend>

        <div className={classes.mainContainer}>
          <div className={classes.itemsContainer}>
            <Input orientation="horizontal" label={t('L_S_PAY_WAY')} size="md"  type='number' maxLength={3}/>
            <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                id="L_DATE"
                size="fullWidth"
                orientation="horizontal"
                label={t('L_PAYMENT_DATE')}
              />
          </div>
          <div className={classes.itemsContainer}>
            <div className={classes.flex}>
              <Input orientation="horizontal" label={t('L_BANK')} size="md"  type='number' maxLength={5}/>
             <Input orientation="horizontal" size="md" disabled/>
            </div>
            <Input orientation="horizontal" label={t('L_BANK_ACCOUNT')} size="md" type='number' maxLength={9}/>
          </div>

          <div className={classes.itemsContainer}>
            <Input orientation="horizontal" label={t('L_BANK_DEPOSIT')} size="md"  type='number' maxLength={5} />
            <Input orientation="horizontal" label={t('L_DEPOSIT_NUM')} size="md"  type='number' maxLength={6}/>
          </div>

          <div className={classes.itemsContainer}>
            <Input orientation="horizontal" label={t('L_CHECK_NUM')} size="md" type='text' maxLength={16} pattern={REGEX.allCharacter}/>
            <Input orientation="horizontal" label={t('L_INCOME')} size="md" type='amount' maxLength={10}/>
          </div>

          <div className={classes.itemsContainer}>
            <div className={classes.flex}>
              <Input orientation="horizontal" label={t('L_PAYER')} size="md"  type='number' maxLength={10}/>
             <Input orientation="horizontal" size="md"  disabled/>
            </div>
            <Input orientation="horizontal" label={t('L_SYSTEM_YEAR')} size="md" type='number' maxLength={4} />
          </div>

          <div className={classes.itemsContainer}>
            <Input orientation="horizontal" label={t('L_RECEIPT_NUM')} size="md" type='text' maxLength={7} pattern={REGEX.allCharacter}/>
            <Input orientation="horizontal" label={t('L_CONCENTRATION')} size="md"  type='text' maxLength={8}/>
          </div>

          <div className={classes.itemsContainer}>
            <Input orientation="horizontal" label={t('L_DETAILS')} size="lg" type='text' maxLength={20} pattern={REGEX.allCharacter}  />
            <Select
              orientation="horizontal"
              label={t('L_ACC_ACT_TYPE')}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              size="md"
            />
          </div>

          <Input orientation="horizontal" label={t('L_RETURN_FEE')} size="md"  type='amount' maxLength={10}/>
        </div>
        <div className={classes.innerContainer}>
          <p>{t('L_0624_DESC')}</p>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ReturningCheckFromBankUI;
