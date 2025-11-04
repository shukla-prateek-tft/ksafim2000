import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { FinancialTransactionColumn } from './components';
import { useTranslation } from 'react-i18next';
import classes from './FinancialTransaction.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel,
  Button
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { FinancialTransactionUIProps } from './type';

const FinancialTransactionUI: React.FC<FinancialTransactionUIProps> = ({
  data,
  customRowRender
}) => {
  const { t } = useTranslation('common');

  const handlePrint = () => {
    window.print();
  };

  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.renderItem}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton onClick={handlePrint} />
          <Button>{t('L_TRANS_DETAILS')}</Button>
          <PrintExcel />
          <SearchButton />
        </div>
      }
      footer={
        <>
          <div className={classes.flex}>
            <Input label={t('L_TOTAL_DEBIT')} orientation="horizontal" />
            <Input label={t('L_TOTAL_CREDIT')} orientation="horizontal" />
            <Input label={t('L_STUD_BALANCE')} orientation="horizontal" />
          </div>
          {/* <ReportFooter
            left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
            right={<ReportCells label={t('L_PRINTED_BY')} value={'abcdfg'} />}
          /> */}
        </>
      }
    >
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')}:`}</legend>
        <div className={classes.flexBetween}>
          <div className={classes.flex}>
            <Select label={t('L_CLASS_FROM')} value={t('')} options={[]} orientation="horizontal" />
            <Input size="sm" value={t('')} />
          </div>
          <div className={classes.flex}>
            <Select label={t('L_TO')} value={t('')} options={[]} orientation="horizontal" />
            <Input size="sm" value={t('')} />
          </div>
          <Input
            size="sm"
            type="checkbox"
            label={t('L_NOTE_ONLY')}
            value={t('')}
            orientation="horizontal"
          />
          <div className={classes.flex}>
            <Button>{t('L_RETRIEVE_BTN')}</Button>
            <Button>{t('U_CLEAR')}</Button>
          </div>
        </div>
        <div className={classes.flexBetween}>
          <div className={classes.flex}>
            <Input label={t('L_PARENT')} value={t('')} orientation="horizontal" />
            <Input size="sm" disabled value={t('')} />
            <Input size="sm" disabled value={t('')} />
          </div>
          <Select label={t('L_S_STUDIES')} value={t('')} options={[]} orientation="horizontal" />
        </div>
        <div className={classes.flexBetween}>
          <div className={classes.flex}>
            <Input label={t('L_STUDENT')} value={t('')} orientation="horizontal" />
            <Input size="sm" disabled value={t('')} />
            <Input size="sm" disabled value={t('')} />
          </div>
          <Select label={t('L_Q_DEPARTURE')} value={t('')} options={[]} orientation="horizontal" />
        </div>
        <div className={classes.flexBetween}>
          <Select
            size="lg"
            label={t('L_SERVICE_TYPE')}
            value={t('')}
            options={[]}
            orientation="horizontal"
          />
          <Select
            size="lg"
            label={t('L_ACC_ACT_TYPE')}
            value={t('')}
            options={[]}
            orientation="horizontal"
          />
        </div>
      </fieldset>
      <br />
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_MONEY_STATUS')}</legend>
        <div className={classes.flexBetween}>
          <Input size="md" label={t('L_ID')} value={t('')} orientation="horizontal" />
          <div className={classes.flex}>
            <Input size="fullWidth" label={t('L_NAME')} value={t('')} orientation="horizontal" />
            <Input size="fullWidth" value={t('')} />
          </div>
          <div className={classes.flex}>
            <Input
              size="fullWidth"
              label={t('L_CLASS_CODE')}
              value={t('')}
              orientation="horizontal"
            />
            <Input size="fullWidth" value={t('')} />
          </div>
          <div className={classes.flex}>
            <Input
              size="fullWidth"
              label={t('L_PARENT_NAME')}
              value={t('')}
              orientation="horizontal"
            />
            <Input size="fullWidth" value={t('')} />
          </div>
        </div>
        <br />
        <div className={classes.flexBetween}>
          <div className={classes.flex}>
            <Input size="fullWidth" label={t('L_ADDRESS')} value={t('')} orientation="horizontal" />
            <Input size="fullWidth" value={t('')} />
            <Input size="fullWidth" value={t('')} />
          </div>
          <div className={classes.flex}>
            <Input size="fullWidth" label={t('L_PHONE')} value={t('')} orientation="horizontal" />
            <Input size="fullWidth" value={t('')} />
          </div>
        </div>
      </fieldset>
      <br />
      <Table
        height="40vh"
        data={data}
        customRowRender={customRowRender}
        columns={FinancialTransactionColumn()}
      />
    </ReportPrint>
  );
};

export default FinancialTransactionUI;
