import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { FinancialTransactionsColumns } from './components/Columns';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './FinancialTransactions.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton,
  Button
} from '@/components/commonButtons';


interface FinancialTransactionsProps {
  data: Array<Record<string, string>>;
}

const FinancialTransactionsUI = ({ data }: FinancialTransactionsProps) => {
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
          <Button title={t('L_TRANS_DETAILS')} />
          <Button title={t('L_CREDITS_STUD')} />
           <Button title={t('L_MOVE_PARAG')} />
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={'HEB NAME'} value='heb name' />
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          center={
             <>
              <div>{t('REPORT_DATE')}</div>
              <div>{t('QUERY_PARAMS')}</div>
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
      <div className={classes.top}>
        <ReportCells label={t('L_ID')} value={t('L_ID')}   />
        <ReportCells label={t('L_NAME')} value={t('L_FAMILY_NAME')}   />
        <ReportCells label={t('L_CLASS_CODE')} value={t('class')}   />
      </div>
      <Table height='25vh' data={data} columns={FinancialTransactionsColumns()} customRowRenderer={(key, row) => {
        switch (key) {
          case 'code1':
            return <div className={classes.rowContainer}>
              <span>{row.code2}</span>
              <span>{row.code2}</span>
            </div>
          default:
            return (row as Record<string, string>)[key];
        }
      }}

      />
    
      <div className={classes.bottom}>
        <ReportCells label={t('L_MCSR0137_BOTTOM_LABEL1')} value={t('ROT')}  />
        <ReportCells label={t('L_MCSR0137_BOTTOM_LABEL2')} value={t('DISCOUNT')}  />
        <ReportCells label={t('L_MCSR0137_BOTTOM_LABEL3')} value={t('MILGOT')} />
      </div>
      <div className={classes.bottom}>
        <ReportCells label={t('L_TOTAL_DEBIT')} value={t('TOT5')}/>
        <ReportCells label={t('L_TOTAL_CREDIT')} value={t('TOT6')}/>
        <ReportCells label={t('L_STUD_BALANCE')} value={t('TOT7')}/>
      </div>
    </ReportPrint>
  );
};

export default FinancialTransactionsUI;
