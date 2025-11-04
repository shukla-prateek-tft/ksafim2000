import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import {
  MonumentReceptionReportColumn,
  MonumentReceptionCandidatesReportColumn
} from './components';
import { useTranslation } from 'react-i18next';
import { attachMultipleClasses, getFormatedDate } from '@/utils/commonHelper';
import classes from './MonumentReceptionReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel
} from '@/components/commonButtons';

interface MonumentReceptionReportUIProps {
  data: any[];
}

const MonumentReceptionReportUI: React.FC<MonumentReceptionReportUIProps> = ({ data }) => {
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
              <ReportCells label={t('L_ON')} value={'1'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
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
              <div>1370 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
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
      <div className={classes.mainTableContainer}>
        <div className={attachMultipleClasses(classes.tableContainer, classes.table1)}>
          <div className={classes.headingText}>{t('L_MCFR1337_DESC1')}</div>
          <Table height="25vh" data={data} columns={MonumentReceptionReportColumn()} />
        </div>
        <div className={attachMultipleClasses(classes.tableContainer, classes.table2)}>
          <div className={classes.headingText}>{t('L_MCFR1337_DESC2')}</div>
          <Table height="25vh" data={data} columns={MonumentReceptionCandidatesReportColumn()} />
        </div>
      </div>
    </ReportPrint>
  );
};

export default MonumentReceptionReportUI;
