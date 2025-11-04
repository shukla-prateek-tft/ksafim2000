/* eslint-disable react/prop-types */
import { Table } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './PettyCashTransactionReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel,
  Button
} from '@/components/commonButtons';
import { PettyCashTransactionReportColumn } from './components/Columns';
import { PettyCashTransactionReportProps, ReportBody607 } from './types';
import { CustomRowRenderType } from '../type';
import { Select } from '@/ui/Select';
import { Input } from '@/ui/Input';
import { GroupRadio } from '@/ui/GroupRadio';
import { Card } from '@/ui/Card';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
const PettyCashTransactionReportUI = ({
  data,
  handleApiSorting,
  handlePagination,
  pagination,
  filters,
  handleCleanFilters,
  handleChangeFilters,
  handleDateChange
}: PettyCashTransactionReportProps) => {
  const { t } = useTranslation('common');

  const dummyRows: ReportBody607[] = [
    {
      date_Aut: '2025-08-01',
      desc_Aut: 'Office supplies purchase',
      name: 'John Doe',
      supp_Number: 1001,
      invoice_Number: 'INV-0001',
      card_Acc: 'ACC-2001',
      type_Service: 'Supplies',
      subject_Service: 'Stationery',
      credit: 0,
      debit: 150.5,
      balance: 150.5,
      user_Name: 'admin',
      update_Date: '2025-08-02',
      is_Temp: false
    },
    {
      date_Aut: '2025-08-03',
      desc_Aut: 'Cafeteria expenses',
      name: 'Jane Smith',
      supp_Number: 1002,
      invoice_Number: 'INV-0002',
      card_Acc: 'ACC-2002',
      type_Service: 'Hospitality',
      subject_Service: 'Snacks',
      credit: 0,
      debit: 89.99,
      balance: 240.49,
      user_Name: 'operator',
      update_Date: '2025-08-03',
      is_Temp: true
    },
    {
      date_Aut: '2025-08-05',
      desc_Aut: 'Refund petty cash',
      name: 'System',
      supp_Number: 0,
      invoice_Number: 'RCPT-0003',
      card_Acc: 'ACC-2001',
      type_Service: 'Adjustment',
      subject_Service: 'Reimbursement',
      credit: 240.49,
      debit: 0,
      balance: 0,
      user_Name: 'system',
      update_Date: '2025-08-05',
      is_Temp: false
    }
  ];

  const customRowRenderer: CustomRowRenderType<ReportBody607> = (key, row) => {
    switch (key) {
      case 'date_Aut':
        return <div>{getFormatedDate(row?.date_Aut) || ''}</div>;
      default:
        return <div>{row?.[key as keyof ReportBody607] || ''}</div>;
    }
  };

  const renderActionItems = () => {
    return (
      <div className={classes.renderItem}>
        <BackToPageButton />
        <DetailButton />
        <PrintButton onClick={() => window.print()} />
        <PrintExcel />
        <SearchButton />
      </div>
    );
  };
  const BottomBar = () => {
    return (
      <div className={classes.bottomContainer}>
        <div className={classes.flex}>
          <Input
            label={t('L_TOTAL')}
            disabled
            orientation="horizontal"
            size="fullWidth"
            value={data?.total_Temp_Sum}
            type="number"
            maxLength={6}
          />
          <Input
            label={t('L_BOTTOM_TEXTMCFR0607')}
            // disabled
            orientation="horizontal"
            size="fullWidth"
            value={data?.total_Temp}
            type="amount"
            maxLength={10}
          />
        </div>
        <div className={classes.flex}>
          <Input
            label={t('L_TOTAL')}
            disabled
            orientation="horizontal"
            size="fullWidth"
            value={data?.total_Sum}
            type="number"
            maxLength={6}
          />
          <Input
            label={t('L_BOTTOM_TEXTMCFR06072')}
            disabled
            orientation="horizontal"
            size="fullWidth"
            value={data?.total}
            type="amount"
            maxLength={10}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <Card hideOnPrint>
        <div className={classes.mainContainer}>
          <div className={classes.innerContainerLeft}>
            <Select
              options={[{ label: '', value: '' }]}
              label={t('L_BANK_ACC')}
              orientation="horizontal"
              size="fullWidth"
            />
            <div className={classes.flex}>
              <DatePickerComponent
                selectedDate={filters?.F_Date ?? null}
                onChange={date => handleDateChange(date, 'F_Date')}
                label={t('L_F_DATE')}
                id="F_Date"
                size="fullWidth"
                orientation="horizontal"
              />

              <DatePickerComponent
                selectedDate={filters?.T_Date ?? null}
                onChange={date => handleDateChange(date, 'T_Date')}
                label={t('L_TO')}
                id="T_Date"
                size="fullWidth"
                orientation="horizontal"
              />
            </div>
            <GroupRadio
              disabled
              options={[
                { label: t('L_ALL'), value: '1' },
                { label: t('L_INCOME'), value: '2' },
                { label: t('L_OUTCOME'), value: '3' }
              ]}
              name="group1"
              selectedValue=""
              onChange={() => {}}
              orientation="horizontal"
              labelOrientation="horizontal"
            />
          </div>
          <div className={classes.innerContainer}>
            <div className={classes.marginRight}>
              <Input
                type="checkbox"
                label={t('L_SET_REC')}
                id="Temp_0"
                orientation="horizontal"
                size="fullWidth"
                checked={filters?.Temp_0}
                onChange={e => handleChangeFilters(e)}
              />
            </div>

            <Input
              type="checkbox"
              label={t('L_NON_SET_REC')}
              orientation="horizontal"
              size="fullWidth"
              id="Temp_1"
              checked={filters?.Temp_1}
              onChange={e => handleChangeFilters(e)}
            />
          </div>
          <div className={`${classes.innerContainer} ${classes.flex}`}>
            <Button size="md" variant="outline" onClick={() => {}} title={t('L_SEARCH')} />
            <Button size="md" variant="outline" onClick={handleCleanFilters} title={t('U_CLEAR')} />
          </div>
        </div>
      </Card>
      <ReportPrint
        renderActionItem={renderActionItems()}
        footer={
          <ReportFooter
            left={<ReportCells label={t('L_PRINTED_BY')} value={'printedBy'} />}
            right={<ReportCells label={''} value={'PRINT_TRAILER'} />}
          />
        }
        header={
          <ReportHeader
            hiddenOnRender
            left={
              <>
                <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
                <ReportCells label={t('L_ON')} value={'1'} />
                <ReportCells label={t('L_PAGE')} value={'1'} />
              </>
            }
            right={
              <>
                <ReportCells label={t('L_DATE')} value={'227017'} />
                <ReportCells label={t('L_PAGE')} value={'1'} />
              </>
            }
            center={<>{<div>1370 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>}</>}
          />
        }
      >
        <Card>
          <Table
            data={data?.report607QueryDto?.length ? data.report607QueryDto : dummyRows}
            columns={PettyCashTransactionReportColumn()}
            onSort={handleApiSorting}
            customRowRenderer={customRowRenderer}
          />
        </Card>
        <BottomBar />
      </ReportPrint>
    </>
  );
};

export default PettyCashTransactionReportUI;
