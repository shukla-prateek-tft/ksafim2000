import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { SummaryPettyCashColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './SummaryPettyCash.module.scss';

const SummaryPettyCashUI = ({ data, renderActionItems, handleApiSorting }: any) => {
  const { t } = useTranslation('common');

  return (
    <ReportPrint
      renderActionItem={renderActionItems()}
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('')} value={''} />
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
              <div>{data?.queryHeader}</div>
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
      <Table
        data={data || []}
        columns={SummaryPettyCashColumn()}
        height="50vh"
        onSort={handleApiSorting}
      />
    </ReportPrint>
  );
};

export default SummaryPettyCashUI;
