import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ListOfReceiptsColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './ListOfReceipts.module.scss';
import {
  BackToPageButton,
  Button,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { ReactNode } from 'react';

interface ListOfReceiptsProps {
  data: Array<Record<string, string>>;
  customRowRenderer: (key: string, row: any) => ReactNode;
}

const ListOfReceiptsUI = ({ data, customRowRenderer }: ListOfReceiptsProps) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      header={
        <ReportHeader
          left={
            <>
              <ReportCells value={t('SYSTEM_NAME')} />
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <div className={classes.headerInputs}>
                <ReportCells value={'HEBRU_NAME'} />
                <ReportCells value={'HEBRU_DATE'} />
              </div>
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          right={<ReportCells value={t('MONIC_NAME')} />}
          center={
            <>
              <div>REPORT NAME</div>
              {/* <ReportCells value={t('QUERY_PARAMS1')} />
              <ReportCells value={t('QUERY_PARAMS')} /> */}
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
      renderActionItem={
        <div className={classes.actionsItems}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton />
          <SearchButton />
          <PrintExcel />
          <Button> {t('EMAIL')} </Button>
          <div>{t('L_NOT_MAIL')}</div>
          <div>{t('L_MCFR0687_FOOTER_TEXT')}</div>
          <Button> {t('INFO')} </Button>
        </div>
      }
    >
      <Table
        height="30vh"
        data={data}
        columns={ListOfReceiptsColumns()}
        customRowRenderer={customRowRenderer}
      />
      <div>{t('L_RECIET_DBLCLK')}</div>
    </ReportPrint>
  );
};

export default ListOfReceiptsUI;
