import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './ListOfScholarshipsForStudentsPrint.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { ListOfScholarshipsForStudentsPrintColumns } from './components/Columns';
import { Input } from '@/ui/Input';

interface TrialBalanceWithoutBudgetProps {
  data: Array<Record<string, string>>
}

const ListOfScholarshipsForStudentsPrintUI = ({ data }: TrialBalanceWithoutBudgetProps) => {
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
                    <ReportCells label={t('Name')} value={'name'} />
                    <ReportCells label={t('L_PAGE')} value={'1'} />
                  </>
                }
          center={
            <>
              <div>{t('L_DATE')}</div>
              <div>{t('L_DATE')}</div>
              <div>{t('L_ACT_NO1')} {t("L_ACT_NO1")} {t("L_DESC")} </div>
              <div>{t('ACT_STRING')}</div>

            </>
          }
        />
      }
      footer={
          <ReportFooter
            right={<ReportCells label={t('L_PRINTED_BY')} value={'MOHIT'} />}
          />
      }
    >
      <Table data={data} columns={ListOfScholarshipsForStudentsPrintColumns()} />
       <div className={classes.fieldContainer}>
        <legend>{t('L_TOTAL')}</legend>
          <div className={classes.rowContainer}>
              <Input
                orientation="horizontal"
                label={t('L_STUDENTS_COUNT')}
                id="text1"
                checked={false}
                onChange={() => {}}
                type="text"
                size="sm"
              />
              <Input
                orientation="horizontal"
                label={t('L_DISTRIB_ALL')} 
                id="text1"
                checked={false}
                onChange={() => {}}
                type="text"
                size="sm"
              />
              <Input
                orientation="horizontal"
                label={t('L_REST')}
                id="text1"
                checked={false}
                onChange={() => {}}
                type="text"
                size="sm"
              />
          </div>

          <div className={classes.bottomrowContainer}>
              <ReportCells label={t('L_REST')}  />
              <ReportCells label={t(`L_DISTRIB_ALL`)} />
              <ReportCells label={t('L_STUDENTS_COUNT')} />
              <Input size="sm" label={t('L_REPORT_ALL')}  orientation="horizontal" />
              <Input size="sm"  orientation="horizontal" />
          </div>
          
         <div>
              <ReportCells label={t('L_SORT_SCREEN_SCHOLARSHIPS')} />
         </div>
      </div>
    </ReportPrint>
  );
};

export default ListOfScholarshipsForStudentsPrintUI;
