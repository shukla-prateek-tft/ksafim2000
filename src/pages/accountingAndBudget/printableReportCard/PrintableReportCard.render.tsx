import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { PrintableReportCardColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './PrintableReportCard.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
const PrintableReportCardUI = ({ data }: any) => {
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
          <SearchButton/>
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
          left={<ReportCells label={t('סטים 2000')} value={''} />}
          right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />}
        />
      }
    >
      <div className={classes.inputWrapper}>
        <div className={classes.inputBox}>
          <Input size="sm" label={t('L_ACC_NO')} orientation="horizontal" />
          <Input size="sm" orientation="horizontal" type='text' maxLength={40} pattern={REGEX.allCharacter} />
        </div>
        <div className={classes.inputBox}>
          <Input size="sm" label={t('L_SORT_CODE')} orientation="horizontal" type='number' maxLength={3}/>
          <Input size="sm" orientation="horizontal"type='text' maxLength={30} pattern={REGEX.allCharacter}  />
        </div>
        <Input size="sm" label={t('L_BUDGET')} orientation="horizontal" type='number' maxLength={10} />
      </div>
      <Table height="40vh" data={data} columns={PrintableReportCardColumn()} />
      <div className={classes.totalContainer}>
        <div className={classes.itemContainers}>
          <ReportCells label={t('L_TOTAL_DEBIT')} value={''} />
          <ReportCells label={t('L_TOTAL_CREDIT')} value={''} />
          <ReportCells label={t('L_TOTAL_REST')} value={''} />
        </div>
        <div className={classes.itemContainers}>
          <ReportCells label={t('L_PERIOD')} value={''} />
          <ReportCells value={''} />
          <ReportCells value={''} />
        </div>
        <div className={classes.itemContainers}>
          <ReportCells label={t('L_INCLUDE_BEFOR')} value={''} />
          <ReportCells value={''} />
          <ReportCells value={''} />
        </div>
      </div>
    </ReportPrint>
  );
};

export default PrintableReportCardUI;
