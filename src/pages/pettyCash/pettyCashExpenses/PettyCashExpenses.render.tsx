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
  handleValidation,
  handleAddCard,
  handleDeleteCard,
  handleInputChange
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
          <AddButton onClick={handleAddCard} />
          {/* <CancelButton
            onClick={() => handleDeleteCard(index)}
            disabled={transactionDetails.length === 1}
          /> */}
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
              id="bank"
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
              id="back_card_name"
            />
          </div>
        </Card>

        {transactionDetails.map((item, index) => {
          return (
            <>
              {transactionDetails.map((item, index) => (
                <Card key={index}>
                  <div className={classes.mainContainer}>
                    {/* LEFT COLUMN */}
                    <div className={classes.innerContainerLeft}>
                      <DatePickerComponent
                        selectedDate={item.date_Aut ?? null}
                        onChange={date => handleDateChange(index, date, 'date_Aut')}
                        placeholder=" "
                        id={`date_Aut_${index}`}
                        size="fullWidth"
                        orientation="horizontal"
                        label={t('L_DATE')}
                      />

                      <Select
                        orientation="horizontal"
                        label={t('L_PROJECT')}
                        options={projectNoListOptions}
                        size="fullWidth"
                        value={item.project_no ?? ''}
                        onChange={val => handleInputChange(index, 'project_no', val)}
                      />

                      <Input
                        orientation="horizontal"
                        label={t('L_DESC')}
                        size="fullWidth"
                        id={`desc_aut_${index}`}
                        value={item.desc_aut}
                        onChange={e => handleInputChange(index, 'desc_aut', e.target.value)}
                      />

                      <Input
                        orientation="horizontal"
                        label={t('L_SPECIAL_ACT')}
                        size="fullWidth"
                        type="number"
                        id={`run_number_${index}`}
                        value={item.run_number ?? ''}
                        onChange={e => handleInputChange(index, 'run_number', e.target.value)}
                      />
                    </div>

                    {/* MIDDLE COLUMN */}
                    <div className={classes.innerContainer}>
                      <Input
                        orientation="horizontal"
                        label={t('L_SUPP_NUMBER')}
                        size="fullWidth"
                        type="number"
                        id={`supp_number_${index}`}
                        value={item.supp_number ?? ''}
                        onChange={e => handleInputChange(index, 'supp_number', e.target.value)}
                      />

                      <Select
                        orientation="horizontal"
                        label={t('L_SERVICE_TYPE')}
                        options={serviceTypeOptions}
                        size="fullWidth"
                        value={item.service_type ?? ''}
                        onChange={val => handleInputChange(index, 'service_type', val)}
                      />

                      <Input
                        orientation="horizontal"
                        label={t('L_DEBIT')}
                        size="fullWidth"
                        type="amount"
                        id={`debit_${index}`}
                        value={item.debit}
                        onChange={e => handleInputChange(index, 'debit', e.target.value)}
                      />

                      <Input
                        orientation="horizontal"
                        label={t('V_NAME')}
                        size="fullWidth"
                        id={`name_${index}`}
                        value={item.name}
                        onChange={e => handleInputChange(index, 'name', e.target.value)}
                      />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className={classes.innerContainer}>
                      <Input
                        orientation="horizontal"
                        label={t('L_INVOICE')}
                        size="fullWidth"
                        type="number"
                        id={`invoice_number_${index}`}
                        value={item.invoice_number ?? ''}
                        onChange={e => handleInputChange(index, 'invoice_number', e.target.value)}
                      />

                      <Select
                        orientation="horizontal"
                        label={t('L_ACC_NO')}
                        options={acc_CardOptions}
                        size="fullWidth"
                        value={item.acc_card_name ?? ''}
                        onChange={val => handleInputChange(index, 'acc_card_name', val)}
                      />

                      <Input
                        orientation="horizontal"
                        label={t('L_SUM_LEFT')}
                        size="fullWidth"
                        disabled
                        type="amount"
                        id={`balance_${index}`}
                        value={item.balance}
                        onChange={e => handleInputChange(index, 'balance', e.target.value)}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </>
          );
        })}
      </ScreenLayout>
    </>
  );
};

export default PettyCashExpensesUI;
