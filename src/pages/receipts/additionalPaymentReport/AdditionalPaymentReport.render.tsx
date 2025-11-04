import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { AdditionalPaymentReportColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './AdditionalPaymentReport.module.scss';

interface AdditionalPaymentReportUIProps {
  data: any[];
  customRowRender?: () => JSX.Element;
}

const AdditionalPaymentReportUI: React.FC<AdditionalPaymentReportUIProps> = ({
  data,
  customRowRender
}) => {
  const { t } = useTranslation('common');

  return (
    <ReportPrint
      header={
        <ReportHeader
          left={<ReportCells label={t('')} value={'MONIC_NAME'} />}
          right={
            <>
              <ReportCells label={t('')} value={'SYSTEM_NAME'} />
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_PAGE')} value={t('10')} />
              <ReportCells label={t('HEB_NAME')} value={'HEB_DATE'} />
            </>
          }
          center={
            <>
              <ReportCells label={t('')} value={'REPORT_NAME'} />
              <ReportCells label={t('')} value={'QUERY_PARAMS'} />
            </>
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
      <Table
        height="40vh"
        data={data}
        customRowRenderer={customRowRender}
        columns={AdditionalPaymentReportColumn()}
      />
      <div className={classes.bottomContainer}>
        <ReportCells label={t('L_REPORT_ALL')} value={''} />
        <ReportCells label={t('L_TOT_ORD')} value={'TOT'} />
        <ReportCells label={t('L_TOTAL_AMOUNT')} value={'TOT_SUM'} />
      </div>
    </ReportPrint>
  );
};

export default AdditionalPaymentReportUI;
