import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { PermanentMovementsColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './PermanentMovements.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';

interface PermanentMovementsProps {
  data: any[];
}

const PermanentMovements: React.FC<PermanentMovementsProps> = ({ data }) => {
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
              <ReportCells value={'MONIC_NAME'} />
            </>
          }
          right={
            <>
              <ReportCells value={'SYSTEM_NAME'} />
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          center={
            <>
              <div>{t('REPORT_NAME')}</div>
              <div>{t('QUERY_PARAMS')}</div>
            </>
          }
        />
      }
      footer={
        <>
          <ReportFooter
            left={
              <>
                <div className={classes.bottomInputs}>
                  <Input label={t('L_MCFR0668_INPUTE_TEXT1')} orientation="horizontal" />
                  <Input label={t('L_TOTAL_AMOUNT')} orientation="horizontal" />
                </div>
                <ReportCells label={t('L_PRINTED_BY')} value={t('1')} />
              </>
            }
            right={
              <>
                <div className={classes.emptyContainer}></div>
                <ReportCells value={'PRINT_TRAILER'} />
              </>
            }
          />
        </>
      }
    >
      <Table
        data={data}
        columns={PermanentMovementsColumn()}
        customRowRenderer={(key, row, index) => {
          switch (key) {
            case 'code1':
              return <div>{`${t('ID')} ${t('Family')} ${t('Private')}`}</div>;

            case 'code8':
              return (
                <div>
                  <Input type="checkbox" />
                </div>
              );

            case 'code9':
              return (
                <div>
                  <Input type="checkbox" />
                </div>
              );

            default:
              return (row as Record<string, any>)[key];
          }
        }}
      />
    </ReportPrint>
  );
};

export default PermanentMovements;
