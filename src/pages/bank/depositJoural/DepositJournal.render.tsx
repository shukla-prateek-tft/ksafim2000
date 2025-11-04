import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { DepositJournalColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './DepositJournal.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel
} from '@/components/commonButtons';
const DepositJournalUI = ({ data }: any) => {
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
          right={<></>}
          center={
            <>
              <div>1230 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
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
      <Table height="50vh" data={data} columns={DepositJournalColumn()} />
  
        <div className={classes.bottomContainer}>
          <p>
            <span>*</span>
            {t('L_MCFR0685_BOTTOM_DESC')}
          </p>
          <p>
            <span>*</span>
            {t('L_DBLCLK_TO_COPY')}
          </p>
        </div>
    </ReportPrint>
  );
};

export default DepositJournalUI;
