import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { ExpenseRevenueColumn } from './components';
import { Table } from '@/ui/Table';
import classes from './expenseRevenue.module.scss';
import { useTranslation } from 'react-i18next';
import {
  BackToPageButton,
  SearchButton,
  PrintButton,
  PrintExcel,
  DetailButton,
  Button
} from '@/components/commonButtons';
import { getFormatedDate } from '@/utils/commonHelper';
import { Checkbox } from '@/components';

const data = [
  {
    code1: 'REC001',
    code2: 'SET_NUMBER',
    code3: 'DEBIT_NAME',
    code4: 'CREDIT_NAME',
    code5: 'CHECK_NUMBER',
    code6: 'DATE_RELEVANT',
    code7: 'VALUE',
    code8: 'DEBIT',
    code9: 'CREDIT',
    code10: 'DETAILS',
    code11: 'RUN_NUMBER',
    code12: false
  }
];

interface expenseRevenueRowProps {
  code1?: string;
  code2?: string;
  code3?: string;
  code4?: string;
  code5?: string;
  code6?: string;
  code7?: string;
  code8?: string;
  code9?: string;
  code10?: string;
  code11?: string;
  code12?: boolean;
}

const ExpenseRevenueUI = () => {
  const { t } = useTranslation('common');

  const customRowRender = (key: string, row: expenseRevenueRowProps) => {
    switch (key) {
      case 'code12':
        return <Checkbox checked={row?.code12} />;
    }
  };

  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.actionsItems}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton />
          <SearchButton />
          <PrintExcel />
          <Button>{t('PB_1')}</Button>
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('HEB NAME')} value="heb name" />
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          right={<> </>}
          center={<div>{t('REPORT_NAME')} MCFR0605</div>}
        />
      }
      footer={
        <ReportFooter
          left={<ReportCells label={t('jgjf')} value={'mohit'} />}
          right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />}
        />
      }
    >
      <Table
        customRowRenderer={customRowRender}
        height="45vh"
        data={data}
        columns={ExpenseRevenueColumn()}
      />
    </ReportPrint>
  );
};

export default ExpenseRevenueUI;
