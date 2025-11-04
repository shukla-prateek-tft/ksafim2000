import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ParentDetailsReportColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './PrintParentDetailsReport.module.scss';
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
import { PrintParentDetailsReportUIProps } from './type';
import { Card } from '@/ui/Card';

const PrintParentDetailsReportUI: React.FC<PrintParentDetailsReportUIProps> = ({
  data,
  customRowRender,
  filters,
  setFilters,
  handleSearch,
  handleSort
}) => {
  const { t } = useTranslation('common');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    setFilters(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

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
          <SearchButton />
          <PrintExcel />
        </div>
      }
      header={
        <ReportHeader
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
          hiddenOnRender
        />
      }
      footer={
        <>
          <div className={classes.flex}>
            <Input
              type="number"
              maxLength={4}
              label={t('L_TOTAL_POSTED')}
              orientation="horizontal"
              value={data?.tot_Stud}
            />
            <Input
              type="number"
              maxLength={4}
              label={t('L_TOTAL_STDU')}
              orientation="horizontal"
              value={data?.total_Stud}
            />
          </div>
          <ReportFooter
            left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
            right={<ReportCells label={t('L_PRINTED_BY')} value={'abcdfg'} />}
          />
        </>
      }
    >
      <div className={classes.mainContainer}>
        <Card hideOnPrint>
          <div className={classes.flexBetween}>
            <div className={classes.flex}>
              <Select
                label={t('L_CLASS_FROM')}
                value={filters?.F_Class_Code}
                options={[]}
                orientation="horizontal"
                id="F_Class_Code"
                onChange={handleFilterChange}
                tabIndex={0}
              />
              <Input
                size="sm"
                id="F_Class_Num"
                type="number"
                maxLength={2}
                value={filters?.F_Class_Num}
                onChange={handleFilterChange}
              />
            </div>
            <div className={classes.flex}>
              <Select
                label={t('L_TO')}
                value={filters?.T_Class_Code}
                options={[]}
                tabIndex={0}
                orientation="horizontal"
                id="T_Class_Code"
                onChange={handleFilterChange}
              />
              <Input
                size="sm"
                type="number"
                maxLength={2}
                value={filters?.T_Class_Num}
                id="T_Class_Num"
                onChange={handleFilterChange}
              />
            </div>
            <div className={classes.flex}>
              <Button onClick={handleSearch}>{t('L_RETRIEVE_BTN')}</Button>
              <Button>{t('U_CLEAR')}</Button>
            </div>
          </div>
          <Input
            size="sm"
            type="checkbox"
            label={t('L_MCFR1409_STUDENT_WITHOUT_ID')}
            orientation="horizontal"
            checked={filters?.No_Id_Par}
            id="No_Id_Par"
            onChange={handleFilterChange}
          />
          <Input
            size="sm"
            type="checkbox"
            label={t('L_MCFR1409_STUDENT_BOTH_PARENT_AS_PAYEE')}
            orientation="horizontal"
            checked={filters?.Double_Pay ?? false}
            id="Double_Pay"
            onChange={handleFilterChange}
          />
          <Input
            size="sm"
            type="checkbox"
            label={t('L_MCFR1409_STUDENT_WITHOUT_PAYEE_PARENT')}
            orientation="horizontal"
            checked={filters?.No_Pay ?? false}
            id="No_Pay"
            onChange={handleFilterChange}
          />
        </Card>
        <Table
          onSort={handleSort}
          data={data?.paymentDetails}
          customRowRenderer={customRowRender}
          columns={ParentDetailsReportColumn()}
        />
      </div>
    </ReportPrint>
  );
};

export default PrintParentDetailsReportUI;
