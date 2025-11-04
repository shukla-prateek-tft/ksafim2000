import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { SmsSendingReportColumns } from './Components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './SmsSendingReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel
} from '@/components/commonButtons';

interface SmsSendingReportRow {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
  code7: string;
  code8: string;
  code9: string;
  code10: string;
};

interface SmsSendingReportProps {
  data: Array<SmsSendingReportRow>
}

const SmsSendingReport = ({ data }: SmsSendingReportProps) => {

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
          right={
            <>
            </>
          }
          center={
            <>
              <div>1395 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
            </>
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
      <Table height='45vh' data={data} columns={SmsSendingReportColumns()} />
    </ReportPrint>
  );
};

export default SmsSendingReport;
