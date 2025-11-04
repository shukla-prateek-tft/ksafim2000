import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { DebtBalanceLetterReportColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './DebtBalanceLetterReport.module.scss';
import { FaWordpressSimple } from "react-icons/fa";
import {
  BackToPageButton,
  Button,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';

interface DebtBalanceLetterReportProps {
  data: Array<Record<string, string>>;
}

const DebtBalanceLetterReport = ({ data }: DebtBalanceLetterReportProps) => {
  const { t } = useTranslation('common');
  const handlePrint = () => {
    window.print();
  };
  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.renderItemContainer}>
          <div className={classes.renderItem}>
            <BackToPageButton />
            <DetailButton />
            <PrintButton onClick={handlePrint} />
            <SearchButton />
            <PrintExcel />
            <Button>{t('L_MAIL')}</Button>
          </div>
          <FaWordpressSimple color='skyblue' size={"24px"} />
          <div></div>
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_PAGE')} value={'10'} />
              <ReportCells label={'HEB NAME'} value='heb name' />
            </>
          }
          center={
            <div>0610  - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
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
      <div className={classes.topContainer}>
        <div className={classes.rowContainer}>
          <span>{t('L_TO_WHOM')}</span>
          <div className={classes.columnContainer}>
            <div className={classes.rowContainer}>
              <Input pattern={REGEX.allCharacter} maxLength={40} size='md' value={"Payer Name"} orientation='horizontal' />
              <Input pattern={REGEX.allCharacter} maxLength={40} size='sm' value={"Family Name"} orientation='horizontal' />
              <Input pattern={REGEX.allCharacter} maxLength={20} size='sm' value={"Private Name"} orientation='horizontal' />
            </div>
            <div className={classes.rowContainer}>
              <Input type='text' maxLength={20} size='sm' value={"City Name"} orientation='horizontal' />
              <Input type='text' maxLength={17} size='sm' value={"Street"} orientation='horizontal' />
              <Input  type='text' maxLength={5} width={"5px"} value={"Build"} orientation='horizontal' />
            </div>
          </div>
        </div>
        <Input pattern={REGEX.allCharacter} maxLength={60} size='md' label={t('L_MAIL')} value={"Email"} orientation='horizontal' />
      </div>
      <div className={classes.secondInputContainer}>
        <div className={classes.rowContainer}>
          <Input type='text' maxLength={80} size='md' value={"Line 1"} orientation='horizontal' />
          <Input  type='amount' maxLength={11} onBlur={() => { }} onChange={() => { }} size='sm' value={"Tot 4"} orientation='horizontal' />
        </div>
        <Input type='text' maxLength={80} size='lg' value={"Line2"} orientation='horizontal' />
      </div>
      <Table height='15vh' data={data} columns={DebtBalanceLetterReportColumns()} />
      <Input type='text' maxLength={80} size='fullWidth' value={"Line3"} orientation='horizontal' />
      <Input type='text' maxLength={80} size='fullWidth' value={"Line4"} orientation='horizontal' />
    </ReportPrint>
  );
};

export default DebtBalanceLetterReport;
