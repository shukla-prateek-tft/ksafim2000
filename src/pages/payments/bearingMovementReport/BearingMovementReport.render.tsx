import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { useTranslation } from 'react-i18next';
import classes from './BearingMovementReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton
} from '@/components/commonButtons';
import { getFormatedDate } from '@/utils/commonHelper';
import { Table } from '@/ui/Table';
import { BearingMovementReportColumn } from './components/Columns';
import { Input } from '@/ui/Input';
import { BearingMovementReportUIprops } from './types';

const BearingMovementReportUI = ({ bearingMovementReportData }: BearingMovementReportUIprops) => {
  const { t } = useTranslation('common');

  const handlePrint = () => {
    window.print();
  };

  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.actionItems}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton onClick={handlePrint} />
          <SearchButton />
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells value={'SYSTME_NAME'} />
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_ON')} value={'1'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          right={
            <>
              <ReportCells value={'MONIC_NAME'} />
              <ReportCells value={'FULL_NAME'} />
            </>
          }
          center={
            <div className={classes.reportCenter}>
              <div>REPORT_NAME</div>
              <div>QUERY_PARAMS</div>
              <div>QUERY_PARAMS1</div>
            </div>
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
      <Table data={[]} columns={BearingMovementReportColumn()} />
      <div className={classes.actionItems}>
        <Input size="md" label={t('L_TOT_SUPP2')} orientation="horizontal" value={'TOT_LINES'} />
        <Input size="md" label={t('L_SUM')} orientation="horizontal" value={'TOT_SUM'} />
      </div>
    </ReportPrint>
  );
};

export default BearingMovementReportUI;
