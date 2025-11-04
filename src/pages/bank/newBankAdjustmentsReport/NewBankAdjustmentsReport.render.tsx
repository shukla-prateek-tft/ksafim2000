import { ReportCells, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { NewBankAdjustmentsReportBankColumn, NewBankAdjustmentsReportSchoolColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './NewBankAdjustmentsReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';

interface NewBankAdjustmentsReportProps {
  data: Array<Record<string, string>>
}
const NewBankAdjustmentsReport = ({ data }: NewBankAdjustmentsReportProps) => {
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
          <SearchButton />
          <PrintExcel />
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={'HEB NAME'} value='heb name' />
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          center={
            <>
             <div>1183 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
            </>
          }
        />
      }
    >
      <div className={classes.tableContainer}>
        <div className={classes.tableHeaderContainer}>
          <div className={classes.tableHeading}>{t('L_BANK_SCHOOL')}</div>
          <Table height='55vh' data={data} columns={NewBankAdjustmentsReportSchoolColumn()} />
        </div>
        <div className={classes.tableHeaderContainer}>
          <div className={classes.tableHeading}>{t('L_BANK_BANK_P')}</div>
          <Table height='55vh' data={data} columns={NewBankAdjustmentsReportBankColumn()} />
        </div>
      </div>
    </ReportPrint>
  );
};

export default NewBankAdjustmentsReport;
