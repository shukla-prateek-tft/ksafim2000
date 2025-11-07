import React from 'react';
import classes from './BankAdjustment.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Table } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
import { BankAdjustmentColumns } from './components';
import { Input } from '@/ui/Input';
const BankAdjustmentUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const dummyData = [
    { c1: '2023', c2: '1000', c3: '01/01/2023', c4: 'Doc1', c5: '500' },
    { c1: '2023', c2: '1500', c3: '02/01/2023', c4: 'Doc2', c5: '300' },
    { c1: '2024', c2: '2000', c3: '03/01/2024', c4: 'Doc3', c5: '700' },
    { c1: '2024', c2: '2500', c3: '04/01/2024', c4: 'Doc4', c5: '400' }
  ];
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_AUTO_NUM')}</legend>
        <div className={classes.legendContainer}>
          <legend className={classes.legend}>{t('L_BOOKS')}</legend>
          <legend className={classes.legend}>{t('L_BANK_ONLY')}</legend>
        </div>
        <div className={classes.tableAligner}>
          <div>
            <Table height="47vh" data={dummyData} columns={BankAdjustmentColumns()} />
            <div className={classes.inputAligner}>
              <Input type="number" maxLength={5} />
              <Input type="amount" maxLength={11} onChange={() => {}} onBlur={() => {}} />
            </div>
          </div>
          <div>
            <Table height="47vh" data={dummyData} columns={BankAdjustmentColumns()} />
            <div className={classes.inputAligner}>
              <Input type="number" maxLength={5} />
              <Input type="amount" maxLength={11} onChange={() => {}} onBlur={() => {}} />
            </div>
          </div>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default BankAdjustmentUI;
