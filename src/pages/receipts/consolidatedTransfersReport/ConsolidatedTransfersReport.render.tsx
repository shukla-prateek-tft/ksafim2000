import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ConsolidatedTransfersReportColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './ConsolidatedTransfersReport.module.scss';
import { Checkbox } from '@/components';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';

interface ConsolidatedTransfersReportProps {
  data: Array<Record<string, string>>;
}

const ConsolidatedTransfersReportUI = ({ data }: ConsolidatedTransfersReportProps) => {
  const customRowRender = (key: string, row: any) => {
    switch (key) {
      case 'code8':
        return <Checkbox checked={row?.code12} />;
    }
  };

  const { t } = useTranslation('common');
  return (
    <ReportPrint
      header={
        <ReportHeader
          left={
            <>
              <ReportCells value={t('SYSTEM_NAME')} />
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          right={<ReportCells value={t('MONIC_NAME')} />}
          center={
            <>
              <div>REPORT NAME</div>
              {/* <ReportCells value={t('QUERY_PARAMS1')} />
              <ReportCells value={t('QUERY_PARAMS')} /> */}
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
      renderActionItem={
        <div className={classes.actionsItems}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton />
          <SearchButton />
          <PrintExcel />
        </div>
      }
    >
      <Table
        height="30vh"
        data={data}
        columns={ConsolidatedTransfersReportColumns()}
        customRowRenderer={customRowRender}
      />
      <ReportCells label={t('L_RECORD_TOTAL')} value={'TOT_REC'} />
    </ReportPrint>
  );
};

export default ConsolidatedTransfersReportUI;
