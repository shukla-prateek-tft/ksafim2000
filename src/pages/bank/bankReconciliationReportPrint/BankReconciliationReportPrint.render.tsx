import React, { useState } from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { BankReconciliationReportColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './BankReconciliationReportPrint.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel,
  Button
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { Card } from '@/ui/Card';
import { Select } from '@/ui/Select';
import { RangeSelector } from '@/ui/DateRangePicker';
import { GroupRadio } from '@/ui/GroupRadio';

interface BankReconciliationReportPrintUIProps {
  data: any[];
}

interface DateRangeState {
  from: string;
  to: string;
}

const BankReconciliationReportPrintUI: React.FC<BankReconciliationReportPrintUIProps> = ({
  data
}) => {
  const { t } = useTranslation('common');
  const [dateRange, setDateRange] = useState<DateRangeState>({
    from: '',
    to: ''
  });

  const handlePrint = () => {
    window.print();
  };

  const handleDateRangeChange = (values: Record<string, string>) => {
    setDateRange({
      from: values.from || '',
      to: values.to || ''
    });
  };

  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.renderItem}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton onClick={handlePrint} />
          <SearchButton />
          <PrintExcel />
        </div>
      }
      header={
        <ReportHeader
          hiddenOnRender
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_ON')} value={'1'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          right={
            <>
              <ReportCells label={t('L_DATE')} value={'227017'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          center={
            <>
              <div>1370 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
            </>
          }
        />
      }
      footer={
        <>
          <ReportFooter
            left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
            right={<ReportCells label={t('L_PRINTED_BY')} value={'abcdfg'} />}
          />
        </>
      }
    >
      <Card title={t('T_MCFR0678')} hideOnPrint>
        <div className={classes.firstRowContainer}>
          <div className={classes.rowContainer}>
            <Select
            tabIndex={0} 
              label={t('L_BANK_ACC')}
              options={[]}
              orientation='horizontal'
            />
            <Select
            tabIndex={0} 
              options={[]}
              name='Code_Aut'
              orientation='horizontal'
            />
          </div>
          <div className={classes.filterButtons}>
            <Button title={t('L_RETRIEVE_BTN')} />
            <Button title={t('U_CLEAR')} />
          </div>
          <div></div>
        </div>
        <div className={classes.rowContainer}>
          <RangeSelector 
            type='date' 
            fromLabel={t('L_F_VALUE_DATE')} 
            toLabel={t('L_TO')} 
            labelOrientation='horizontal'
            fromValue={dateRange.from}
            toValue={dateRange.to}
            onChange={handleDateRangeChange}
          />
        </div>
        <GroupRadio
          title={t('L_TO_YEAR')}
          options={[
            { label: t('L_STUDY'), value: '1' },
            { label: t('L_KALENDAR_YEAR'), value: '2' },
          ]}
          name="group1"
          selectedValue=""
          onChange={() => { }}
          labelOrientation='horizontal'
          orientation='horizontal'
        />
      </Card>
      <Table data={data} columns={BankReconciliationReportColumn()} />
    </ReportPrint>
  );
};

export default BankReconciliationReportPrintUI;
