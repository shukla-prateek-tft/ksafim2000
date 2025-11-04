import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ScholarshipReportPrintColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './ScholarshipReportPrint.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';

interface ScholarshipReportPrintProps {
  data: Array<Record<string, string>>;
}

const ScholarshipReportPrint = ({ data }: ScholarshipReportPrintProps) => {
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
              <div>1282 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
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
      <div className={classes.commonInputContainer}>
        <Input type='text' maxLength={16} label={t('L_CLASS_CODE')} value={'Class code'} orientation='horizontal' />
        <Input type='number' maxLength={2} value={"Class num"} orientation='horizontal' />
      </div>
      <Table height='25vh' data={data} columns={ScholarshipReportPrintColumns()} customRowRenderer={(key, row) => {
        switch (key) {
          case 'code2':
            return <div className={classes.rowContainer}>
              <span>{row.code2}</span>
              <span>{row.code2}</span>
            </div>
          case 'code3':
            return <div className={classes.rowContainer}>
              <span>{row.code3}</span>
              <span>{row.code3}</span>
            </div>
          default:
            return (row as Record<string, string>)[key];
        }
      }}

      />
      <div className={classes.middleContainer}>
        <Input type='number' maxLength={7} label={t('L_TOT_STUDENT')} value={"Tot1"} orientation='horizontal' />
        <div className={classes.tableTotalContainer}>
          <span style={{ width: "8%" }}>{t('L_TOTAL')}</span>
          <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} width={"8%"} value={"Grand debt"} orientation='horizontal' />
          <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} width={"8%"} value={"Grand credit"} orientation='horizontal' />
          <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} width={"8%"} value={"Grand total"} orientation='horizontal' />
          <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} width={"8%"} value={"Grand Milga"} orientation='horizontal' />
          <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} width={"8%"} value={"Grand Pay"} orientation='horizontal' />
        </div>
      </div>
      <div className={classes.commonInputContainer}>
        <Input type='number' maxLength={10} label={t('L_STUD_PAY_FULL')} value={"Grand Pay"} orientation='horizontal' />
        <Input type='number' maxLength={10} label={t('L_PARTLY_PAYED')} orientation='horizontal' />
        <Input type='number' maxLength={10} label={t('L_NOT_PAYED')} orientation='horizontal' />
      </div>
      <div className={classes.commonInputContainer}>
        <Input type='number' maxLength={3} label={t('L_STUD_PAY_PER')} orientation='horizontal' />
        <Input type='number' maxLength={3} label={t('L_PARTLY_PAY_PER')} orientation='horizontal' />
        <Input type='number' maxLength={3} label={t('L_NOT_PAY_PER')} orientation='horizontal' />
      </div>
    </ReportPrint>
  );
};

export default ScholarshipReportPrint;
