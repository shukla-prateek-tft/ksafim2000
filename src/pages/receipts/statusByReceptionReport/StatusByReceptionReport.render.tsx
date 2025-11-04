import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { StatusByReceptionReportColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './StatusByReceptionReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';

interface StatusByReceptionReportUIProps {
  data: Array<Record<string, string>>;
  customRowRenderer: (key: string, row: any, index: number) => React.ReactNode;
}

const StatusByReceptionReport = ({ data, customRowRenderer }: StatusByReceptionReportUIProps) => {
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
              <ReportCells label={'HEB NAME'} value="heb name" />
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          center={
            <>
              <div>0637 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
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
      <div className={classes.flexContainer}>
        <div className={classes.item}>
          <span>{t('L_SERVICE_TYPE')}</span>
          <span>3242</span>
        </div>
        <div className={classes.item}>
          <span>{t('L_DESC')}</span>
          <span>3242</span>
        </div>
      </div>

      <Table
        height="45vh"
        data={data}
        columns={StatusByReceptionReportColumns()}
        customRowRenderer={customRowRenderer}
      />
      <div className={classes.flexContainer}>
        <div className={classes.item}>
          <span>{t('L_GRAND_TOTAL')}</span>
          <span>3242</span>
        </div>
        <div className={classes.item}>
          <span>{t('L_TOT_SUB')}</span>
          <span>3242</span>
        </div>
      </div>
    </ReportPrint>
  );
};

export default StatusByReceptionReport;
