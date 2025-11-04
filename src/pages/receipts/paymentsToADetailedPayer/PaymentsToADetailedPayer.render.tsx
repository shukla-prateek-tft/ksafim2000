import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { PaymentsToADetailedPayerColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './PaymentsToADetailedPayer.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel
} from '@/components/commonButtons';

interface PaymentsToADetailedPayerProps {
  data: any[];
}

const PaymentsToADetailedPayer: React.FC<PaymentsToADetailedPayerProps> = ({ data }) => {
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
              <ReportCells label={t('Monic_name')} />
            </>
          }
          right={
            <>
              <ReportCells label={t('System_name')} />
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} /> {/* Report Date*/}
              <ReportCells label={t('HEB_NAME')} value={t('HEB_DATE')} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
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
        <>
          <ReportFooter
            left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
            right={<ReportCells label={t('L_PRINTED_BY')} value={'abcdfg'} />}
          />
        </>
      }
    >
      <Table data={data} columns={PaymentsToADetailedPayerColumn()} />
    </ReportPrint>
  );
};

export default PaymentsToADetailedPayer;
