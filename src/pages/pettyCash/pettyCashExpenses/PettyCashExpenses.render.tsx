import React from 'react';
import classes from './PettyCashExpenses.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  BackToPageButton,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  PrintButton,
  SaveButton
} from '@/components/commonButtons';
import { PettyCashExpensesUIProps } from './types';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { REGEX } from '@/constants/appConstant';
import { getInputPattern } from '@/utils/commonHelper';

const PettyCashExpensesUI = ({
  serviceTypeOptions,
  projectNoListOptions,
  getCutPettyCashExpensesData,
  acc_CardOptions,
  handleSave,
  handleDateChange,
  transactionDetails,
  handleValidation
}: PettyCashExpensesUIProps) => {
  const { t } = useTranslation('common');

  const TopHeader = () => {
    return (
      <>
        <div className={classes.topHeaderContainer}>
          <BackToPageButton />
          <DetailButton />
          <OtherDetailButton />
          <SaveButton onClick={handleSave} />
          <PrintButton />
          <AddButton />
          <CancelButton />
        </div>
      </>
    );
  };

  const BottomBar = () => {
    return (
      <>
        <div className={classes.renderItem}>
          <p>{t('L_COMMENT')}</p>
          <p>{t('L_601_DESC')}</p>
        </div>
        <div className={classes.renderItem}>
          <p>{t('L_ACC_NO')}</p>
          <p>{t('L_MONEY_AMNT')}</p>
        </div>
        <Footer />
      </>
    );
  };

  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW0601')}
        screenNumber="MCFW0601"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card>
          <div className={classes.topHeaderContainer}>
            <Select
              orientation="horizontal"
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              size="md"
              tabIndex={1}
              onClick={handleValidation}
            />
            <Select
              orientation="horizontal"
              label={t('L_BANK_ACC')}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              size="md"
              tabIndex={2}
              onClick={handleValidation}
            />
          </div>
        </Card>
        <Card>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainerLeft}>
              <DatePickerComponent
                selectedDate={transactionDetails?.date_Aut ?? null}
                onChange={date => handleDateChange(date, 'date_Aut')}
                placeholder=" "
                id="date_Aut"
                size="fullWidth"
                orientation="horizontal"
                label={t('L_DATE')}
                tabIndex={3}
              />

              <Select
                orientation="horizontal"
                label={t('L_PROJECT')}
                options={projectNoListOptions}
                size="fullWidth"
                tabIndex={6}
                onClick={handleValidation}
              />
              <Input
                orientation="horizontal"
                label={t('L_DESC')}
                size="fullWidth"
                pattern={REGEX.allCharacter}
                maxLength={30}
                tabIndex={9}
                onClick={handleValidation}
              />
              <Input
                orientation="horizontal"
                label={t('L_SPECIAL_ACT')}
                size="fullWidth"
                type="number"
                pattern={getInputPattern(3)}
                tabIndex={12}
                onClick={handleValidation}
              />
            </div>
            <div className={classes.innerContainer}>
              <Input
                orientation="horizontal"
                label={t('L_SUPP_NUMBER')}
                size="fullWidth"
                type="number"
                pattern={getInputPattern(10)}
                tabIndex={4}
                onClick={handleValidation}
              />
              <Select
                orientation="horizontal"
                label={t('L_SERVICE_TYPE')}
                options={
                  serviceTypeOptions && serviceTypeOptions?.length > 0 ? serviceTypeOptions : []
                }
                size="fullWidth"
                tabIndex={10}
                onClick={handleValidation}
              />
              <Input
                orientation="horizontal"
                label={t('L_DEBIT')}
                size="fullWidth"
                type="amount"
                min={0}
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                tabIndex={13}
                onClick={handleValidation}
              />
              <Input
                orientation="horizontal"
                label={t('V_NAME')}
                size="fullWidth"
                pattern={REGEX.allCharacter}
                maxLength={30}
                tabIndex={14}
                onClick={handleValidation}
              />
            </div>
            <div className={classes.innerContainer}>
              <Input
                orientation="horizontal"
                label={t('L_INVOICE')}
                size="fullWidth"
                type="number"
                pattern={getInputPattern(6)}
                tabIndex={5}
                onClick={handleValidation}
              />
              <Select
                orientation="horizontal"
                label={t('L_ACC_NO')}
                // value={getCutPettyCashExpensesData?.data?.data[0]?.acc_Card_Name ?? ''}
                options={acc_CardOptions}
                size="fullWidth"
                tabIndex={8}
                onClick={handleValidation}
              />
              <Input
                orientation="horizontal"
                label={t('L_SUM_LEFT')}
                size="fullWidth"
                // value={getCutPettyCashExpensesData?.data?.data[0]?.balance ?? ''}
                disabled
                type="amount"
                min={0}
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                tabIndex={11}
                onClick={handleValidation}
              />
            </div>
          </div>
        </Card>

        <Card>
          <></>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default PettyCashExpensesUI;
