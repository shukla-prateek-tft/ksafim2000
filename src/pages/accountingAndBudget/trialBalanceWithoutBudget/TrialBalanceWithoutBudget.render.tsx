import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './TrialBalanceWithoutBudget.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { TrialBalanceWithoutBudgetColumns } from './components/Columns';

interface TrialBalanceWithoutBudgetProps {
  data: Array<Record<string, string>>
}

const TrialBalanceWithoutBudgetUI = ({ data }: TrialBalanceWithoutBudgetProps) => {
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
              <div className={classes.rowContainer}>
                <ReportCells label={'NAME'} />
                <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              </div>
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          center={
            <>
              <div>{t('L_DATE')}</div>
              <div>{t('L_DATE')}</div>
            </>
          }
        />
      }
      footer={
        <div>
          {t('L_SIGNATURE')}
          <ReportFooter
            left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
            right={<ReportCells label={t('L_PRINTED_BY')} value={'MOHIT'} />}
          />
        </div>
      }
    >
      <Table height='50vh' data={data} columns={TrialBalanceWithoutBudgetColumns()} />
    </ReportPrint>
  );
};

export default TrialBalanceWithoutBudgetUI;
