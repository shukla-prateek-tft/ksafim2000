import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ListScholarshipForStudentsReportColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './ListScholarshipForStudentsReport.module.scss';

interface ListScholarshipForStudentsReportProps {
  data: Array<Record<string, string>>;
}

const ListScholarshipForStudentsReport = ({ data }: ListScholarshipForStudentsReportProps) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={'HEB NAME'} value='heb name' />
              <ReportCells label={t('L_PAGE')} value={'10'} />
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
      <div className={classes.centerContainer}>
        <ReportCells label={t('L_ACT_NO1')} value={'act no'} />
        <ReportCells label={t('L_DESC')} value={'desk auth'} />
      </div>
      <Table height='40vh' data={data} columns={ListScholarshipForStudentsReportColumns()} />
      <fieldset className={classes.fieldContainer}>
        <legend>{t('L_TOTAL')}</legend>
        <ReportCells label={t('L_STUDENTS_COUNT')} value={'50'} />
        <ReportCells label={t(`L_MCFW1388_SMS_TEXT`)} value={'Sms total'} />
        <ReportCells label={t('T_TEXT2_MCFW1388')} value={'dfsdfbsd'} />
      </fieldset>
    </ReportPrint>
  );
};

export default ListScholarshipForStudentsReport;
