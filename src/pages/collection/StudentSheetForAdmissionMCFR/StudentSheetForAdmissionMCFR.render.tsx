import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { StudentSheetForAdmissionMCFRColumns } from './Components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './StudentSheetForAdmissionMCFR.module.scss';

interface StudentSheetForAdmissionMCFRProps {
  data: Array<Record<string, string>>;
}

const StudentSheetForAdmissionMCFR = ({ data }: StudentSheetForAdmissionMCFRProps) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      header={
        <ReportHeader
          left={
            <>
              <ReportCells value={t('SYSTEM_NAME')} />
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <div className={classes.flex}>
                <ReportCells value={t('HEB_NAME')} />
                <ReportCells value={t('HEB_DATE')} />
              </div>
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          right={<ReportCells value={t('MONIC_NAME')} />}
          center={<ReportCells value={t('REPORT_NAME')} />}
        />
      }
      footer={
        <ReportFooter
          left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
          right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />}
        />
      }
    >
      <div className={classes.centerHeader}>
        <ReportCells label={t('L_ACT_NO1')} value={'ACT_NO'} />
      </div>

      <div className={classes.centerContainer}>
        <ReportCells label={t('L_SERVICE_TYPE')} value={'SERVICE_TYPE'} />
        <ReportCells label={t('L_ACC_CARD1')} value={'ACC_NO_NAME'} />
        <ReportCells label={t('L_ACC_ACT_TYPE')} value={'ACC_ACT_TYPE'} />
      </div>

      <Table height="30vh" data={data} columns={StudentSheetForAdmissionMCFRColumns()} />
      <fieldset className={classes.fieldContainer}>
        <legend>{t('L_TOTAL')}</legend>
        <ReportCells label={t('L_TOTAL_TO_PAY')} value={'TOTAL2'} />
        <ReportCells label={t('L_MCFW1418_INPUT_LABEL3')} value={'TOTAL5'} />
        <ReportCells label={t('L_TOTAL_CASH')} value={'TOTAL3'} />
        <ReportCells label={t('L_TOTAL_CHEQUE')} value={'TOTAL4'} />
        <ReportCells label={t('L_TOTAL_PAYED')} value={'TOTAL'} />
        <ReportCells value={'TOTAL'} />
      </fieldset>
      <p>{t('L_NO_STUD_515')}</p>
    </ReportPrint>
  );
};

export default StudentSheetForAdmissionMCFR;
