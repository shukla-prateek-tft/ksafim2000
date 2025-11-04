import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { CollectionStatusForLayerColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './CondensedPayerBalanceSheet.module.scss';
import {
  BackToPageButton,
  Button,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';

interface CondensedPayerBalanceSheetProps {
  data: Array<Record<string, string>>;
  customRowRenderer: (key: string, row: any, index: number) => React.ReactNode;
}

const CondensedPayerBalanceSheet = ({
  data,
  customRowRenderer
}: CondensedPayerBalanceSheetProps) => {
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
          <Button title={t('PB_1')} variant="outline" onClick={() => {}} />
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
          center={
            <>
              <div>0637 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
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
      <div className={classes.flexContainer}>
        <div className={classes.item}>
          <span>{t('L_PARENT_ID')}</span>
          <span>3242</span>
        </div>
        <div className={classes.item}>
          <span>{t('L_ADDRESS')}</span>
          <span>3242</span>
          <span>dummy Data</span>
          <span>a</span>
        </div>
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.item}>
          <span>{t('L_PARENT_NAME')}</span>
          <span>family name</span>
          <span>private name</span>
        </div>
        <div className={classes.item}>
          <span>{t('L_PHONE_NUM')}</span>
          <span>phone</span>
          <span>dummy Data</span>/<span></span>
        </div>
      </div>
      <Table
        height="45vh"
        data={data}
        columns={CollectionStatusForLayerColumns()}
        customRowRenderer={customRowRenderer}
      />
    </ReportPrint>
  );
};

export default CondensedPayerBalanceSheet;
