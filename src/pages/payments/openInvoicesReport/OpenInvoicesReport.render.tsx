import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { OpenInvoicesReportColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './OpenInvoicesReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';


interface OpenInvoiceReportProps {
  data: Array<Record<string, string>>;
  customRowRenderer: (key: string, row: Record<string, string>) => JSX.Element;
}

const OpenInvoicesReport = ({ data, customRowRenderer }: OpenInvoiceReportProps) => {
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
            <div>1371 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
          }
        />
      }
      footer={
        <ReportFooter
          left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
          right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />}
        />
      }
    >
      <Table height='40vh'
        data={data}
        columns={OpenInvoicesReportColumns()}
        customRowRenderer={customRowRenderer} 
      />
      <div className={classes.bottomContainer}>
        <Input label={t('L_TOT')} value={"1234"} orientation='horizontal' />
      </div>
    </ReportPrint>
  );
};

export default OpenInvoicesReport;
