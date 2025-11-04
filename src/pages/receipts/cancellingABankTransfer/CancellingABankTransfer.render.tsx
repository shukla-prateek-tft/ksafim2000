import React, { useEffect, useState } from 'react';
import classes from './CancellingABankTransfer.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { Table } from '@/ui/Table';
import { CancellingABankTransferColumn } from './components';
import { Select } from '@/ui/Select';
import { DatePicker } from '@/ui/DatePicker';
import { CancellingABankTransferUIProps } from './types';
const CancellingABankTransferUI = ({
  renderActionItems,
  filter,
  handlePagination,
  pagination,
  onFilterChange,
  gridData,
  onGridChange
}: CancellingABankTransferUIProps) => {
  const { t } = useTranslation('common');
  const [oldSumAutValue, setOldSumAutValue] = useState(0);
  const [tot_2, setTot_2] = useState(getCancellingBankTransferListResponseData?.data[0]?.tot_2);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const checkManField = (fieldName, fieldValue) => {
    if (getCancellingBankTransferListResponseData?.data[0]?.act_No) {
      if (
        fieldValue === '' ||
        fieldValue === 0 ||
        fieldValue === undefined ||
        fieldValue === null
      ) {
        // display error message e_003
      }
    }
  };

  useEffect(() => {
    /*
    1.) call gp_trg_execute
    2.) Initialize the dropdow of pay_way,service_type,acc_credit and acc_act_type
    3.) set $to_calc_ogf$ = 0
    4.) initialize $ledger_split$
    5.) call lp_retrieve
    6.) open up form for edit 
     */
  }, []);

  useEffect(() => {
    setTot_2(getCancellingBankTransferListResponseData?.data[0]?.tot_2);
  }, [getCancellingBankTransferListResponseData?.data[0]?.tot_2]);

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW1179')}</legend>
        <div className={classes.itemsContainer}>
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_S_PAY_WAY')}
            type="number"
            maxLength={3}
            value={filter.payWay}
            onChange={e => onFilterChange('payWay', e.target.value)}
          />
          <DatePicker
            size="md"
            label={t('L_PAYMENT_DATE')}
            onChange={() => {}}
            selectedDate={filter.payDate || new Date()}
            orientation="horizontal"
            onBlur={date => onFilterChange('payDate', date)}
          />
        </div>
        <div className={classes.itemsContainer}>
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_CHECK_NUM')}
            type="number"
            maxLength={16}
            value={filter.checkNum}
            onChange={e => onFilterChange('checkNum', e.target.value)}
          />
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_INCOME')}
            type="amount"
            value={filter.income}
            onChange={e => onFilterChange('income', e.target.value)}
            maxLength={9}
          />
        </div>
        <div className={classes.itemsContainer}>
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_BANK')}
            type="number"
            maxLength={5}
            value={filter.bank}
            onChange={e => onFilterChange('bank', e.target.value)}
          />
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_BANK_ACCOUNT')}
            type="number"
            maxLength={9}
            value={filter.bankAccount}
            onChange={e => onFilterChange('bankAccount', e.target.value)}
          />
        </div>
        <div className={classes.itemsContainer}>
          <Select
            size="md"
            orientation="horizontal"
            label={t('L_ACC_ACT_TYPE')}
            options={[]}
            value={filter.actType}
            onChange={e => onFilterChange('actType', e.target.value)}
          />
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_RECEIPT')}
            maxLength={7}
            value={filter.receipt}
            onChange={e => onFilterChange('receipt', e.target.value)}
          />
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_SYSTEM_YEAR')}
            type="number"
            maxLength={4}
            value={filter.systemYear}
            onChange={e => onFilterChange('systemYear', e.target.value)}
          />
        </div>
        <div className={classes.itemsContainer}>
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_DETAILS')}
            maxLength={30}
            value={filter.details}
            onChange={e => onFilterChange('details', e.target.value)}
          />
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_PAYER')}
            type="number"
            maxLength={10}
            value={filter.payer}
            onChange={e => onFilterChange('payer', e.target.value)}
          />
          <Input size="md" orientation="horizontal" maxLength={20} />
        </div>
        <Table
          height="15vh"
          columns={CancellingABankTransferColumn()}
          data={gridData}
          customRowRenderer={(key, row, index) => {
            switch (key) {
              case 'student':
                return DisplayItems(row.student, row.family_Name, row.private_Name);

              case 'service_type':
                return (
                  <Select
                    size="fullWidth"
                    options={[]}
                    value={row.service_Type}
                    onChange={e => onGridChange(index, 'service_Type', String(e.target.value))}
                    onBlur={() => checkManField('service_Type', row.service_Type)}
                  />
                );

              case 'acc_no':
                return (
                  <Select
                    size="fullWidth"
                    options={[]}
                    value={row.acc_Card}
                    onChange={e => onGridChange(index, 'acc_Card', String(e.target.value))}
                  />
                );

              case 'credit':
                return (
                  <Input
                    type="amount"
                    size="fullWidth"
                    value={row.income_Sum}
                    onChange={() => {}}
                    onBlur={() => {
                      checkManField('income_Sum', row.income_Sum);
                    }}
                    readOnly
                  />
                );

              case 'bill_sum': {
                return (
                  <Input
                    size="fullWidth"
                    type="amount"
                    maxLength={11}
                    value={row.sum_Aut}
                    onChange={e => {
                      const newValue = Number(e.target.value);
                      onGridChange(index, 'sum_Aut', newValue);
                    }}
                    onBlur={(e) => {
                      const newValue = Number(e.target.value);
                      // onGridChange(index, 'sum_Aut', newValue);

                      if (debounceTimer) clearTimeout(debounceTimer);

                      const timer = setTimeout(() => {
                        setTot_2(prevTot2 => prevTot2 - oldSumAutValue + newValue);
                      }, 1000);

                      setDebounceTimer(timer);
                    }}
                    onFocus={e => {
                      setOldSumAutValue(Number(e.target.value));
                    }}
                  />
                );
              }
            }
          }}
        />
        <div className={classes.bottomOne}>
          <Input
            size="md"
            orientation="horizontal"
            label={t('L_TOTAL')}
            type="amount"
            maxLength={11}
            value={getCancellingBankTransferListResponseData?.data[0]?.tot_1}
            onChange={() => {}}
            onBlur={() => {}}
            readOnly
          />
          <Input
            size="sm"
            orientation="horizontal"
            type="amount"
            maxLength={11}
            value={tot_2}
            onChange={() => {}}
            onBlur={() => {}}
            readOnly
          />
          <Input size="sm" orientation="horizontal" type="amount" maxLength={9} />
        </div>
        <div className={classes.bottomTwo}>
          <div>
            <span>{t('L_CONFIRM_SIGN')}</span>
          </div>
          <Input size="md" orientation="horizontal" disabled label={t('L_SIGNITURE')} />
        </div>
        <span>{t('L_1179_DESC')}</span>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CancellingABankTransferUI;
