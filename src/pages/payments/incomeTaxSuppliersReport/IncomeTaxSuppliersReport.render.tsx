import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { IncomeTaxSuppliersReportColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import { IncomeTaxSupplierReportProps } from './type';

const IncomeTaxSuppliersReportUI = ({
  supplierReportData,
  renderActionItem,
  customRowRenderer,
  onColumnSort,
  printedBy,
}: IncomeTaxSupplierReportProps) => {

  const { report597QueryDto: supplierList } = supplierReportData;

  const { t } = useTranslation('common');

  return (
    <ReportPrint
      renderActionItem={renderActionItem()}
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate(new Date())} />
              <ReportCells label={t('L_ON')} value={'1'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          right={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate(new Date())} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          center={
            <div>
              <div>0597 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
              <div>{supplierReportData?.queryHeader}</div>
            </div>
          }
        />
      }
      footer={
        <ReportFooter
          left={<ReportCells label={t('סטים 2000')} value={''} />}
          right={<ReportCells label={t('L_PRINTED_BY')} value={printedBy} />}
        />
      }
    >
      <Table
        data={supplierList}
        columns={IncomeTaxSuppliersReportColumn({ t })}
        customRowRenderer={customRowRenderer}
        onSort={onColumnSort}
      />
    </ReportPrint>
  );
};

export default IncomeTaxSuppliersReportUI;