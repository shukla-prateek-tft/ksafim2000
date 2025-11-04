import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { CollectionStatusForLayerColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './CollectionStatusForLayerReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';

interface CollectionStatusForLayerReportProps {
  data: Array<Record<string, string>>
}

const CollectionStatusForLayerReport = ({ data }: CollectionStatusForLayerReportProps) => {
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
              <ReportCells label={'HEB NAME'} value='heb name' />
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
            left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'}/>}
            right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />}
          />
      }
    >
      <div className={classes.ageColumn}><ReportCells label={t('L_CLASS_AGE')} value={'21'} /></div>
      <Table height='45vh' data={data} columns={CollectionStatusForLayerColumns()} />
    </ReportPrint>
  );
};

export default CollectionStatusForLayerReport;
