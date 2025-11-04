import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ReportTransferBetweenSectionsColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './ReportTransferBetweenSections.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';

interface ReportTransferBetweenSectionsProps {
  data: Array<Record<string, string>>
}

const ReportTransferBetweenSections = ({ data }: ReportTransferBetweenSectionsProps) => {
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
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          center={
            <>
              <div>1376 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
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
      <div className={classes.topInputContainer}>
        <div className={classes.rowContainer}>
          <Input type='number' maxLength={10} size='sm' label={t('L_PAYER')} value={'ID'} orientation='horizontal' />
          <Input pattern={REGEX.allCharacter} maxLength={24} size='sm' value={"family name"} orientation='horizontal' />
          <Input pattern={REGEX.allCharacter} maxLength={20} size='sm' value={"private name"} orientation='horizontal' />
        </div>
        <Input type='amount' maxLength={11} onChange={() => {}} onBlur={() => {}} size='sm' label={t('L_TOTAL')} value={'Tot 4'} orientation='horizontal' />
      </div>
      <Table height='35vh'
        data={data}
        columns={ReportTransferBetweenSectionsColumns()}
        customRowRenderer={(key, row) => {
          switch (key) {
            case 'code1':
              return <div className={classes.rowContainer}>
                <Input value={row.code1} orientation='horizontal' />
                <Input value={row.code1} orientation='horizontal' />
                <Input value={row.code1} orientation='horizontal' />
              </div>
            case 'code2':
              return <div className={classes.rowContainer}>
                <Input value={row.code2} orientation='horizontal' />
                <Input value={row.code2} orientation='horizontal' />
              </div>
            default:
              return <div className={classes.rowContainer}>
                <Input size='sm' value={row[key]} orientation='horizontal' />
              </div>
          }
        }}

      />
      <div className={classes.bottomInputContainer}>
        <Input type='number' maxLength={6} size='sm' label={`${t('L_TOTAL_PAID')} :`} value={'Total Paid'} orientation='horizontal' />
        <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} size='sm' label={`${t('L_TOTAL_AMOUNT_2')} :`} value={'Total Amt'} orientation='horizontal' />
      </div>
    </ReportPrint>
  );
};

export default ReportTransferBetweenSections;
