import { ReportCells, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ListScholarshipForStudentsReportColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './ScholarshipsForStudents.module.scss';
import { Input } from '@/ui/Input';

interface ListScholarshipForStudentsReportProps {
  data: Array<Record<string, string>>;
}

const ScholarshipsForStudents = ({ data }: ListScholarshipForStudentsReportProps) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={'HEB NAME'} value="heb name" />
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
        />
      }
      footer={
         <div className={classes.footer}>
        <Input orientation="horizontal" label={t('L_STUDENTS_COUNT')} size="lg" />
        <Input orientation="horizontal" label={t('L_DISTRIB_ALL')} size="lg" />
        <Input orientation="horizontal" label={t('L_REST')} size="lg" />
         </div>
      }
    >
      <div className={classes.centerContainer}>
        <Input orientation="horizontal" label={t('L_ACC_NO')} size="lg" />
        <div className={classes.innerContainer}>
          <div>
            <Input orientation="horizontal" label={t('L_SERVICE_TYPE')} size="lg" />
            <Input orientation="horizontal" label={t('L_ACC_ACT_TYPE')} size="lg" />
          </div>

          <div>
            <Input orientation="horizontal" label={t('L_PROTOCOL')} size="lg" />
            <Input orientation="horizontal" label={t('L_ACC_CARD1')} size="lg" />
          </div>
        </div>
      </div>
      <Table height="40vh" data={data} columns={ListScholarshipForStudentsReportColumns()} />

    </ReportPrint>
  );
};

export default ScholarshipsForStudents;
