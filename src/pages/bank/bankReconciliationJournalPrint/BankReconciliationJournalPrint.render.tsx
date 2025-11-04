import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { BankReconciliationJournalColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './BankReconciliationJournalPrint.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel,
} from '@/components/commonButtons';

interface BankReconciliationJournalPrintUIProps {
  data: any[];
}

const BankReconciliationJournalPrintUI: React.FC<BankReconciliationJournalPrintUIProps> = ({
  data
}) => {
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
          right={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_ON')} value={'1'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          left={
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
      <Table data={data} columns={BankReconciliationJournalColumn()} />
    </ReportPrint>
  );
};

export default BankReconciliationJournalPrintUI;
