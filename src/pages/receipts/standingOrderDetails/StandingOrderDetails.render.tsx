import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { StandingOrderDetailsColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './StandingOrderDetails.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel
} from '@/components/commonButtons';

interface StandingOrderDetailsProps {
  data: any[];
}

const StandingOrderDetails: React.FC<StandingOrderDetailsProps> = ({ data }) => {
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
                <div>{t('L_MCFR0716_BOTTOM_TEXT')}</div>
                <ReportCells label={t('L_PRINTED_BY')} value={t('1')} />
              </>
            }
            right={<ReportCells value={'PRINT_TRAILER'} />}
          />
        </>
      }
    >
      <Table
        data={data}
        columns={StandingOrderDetailsColumn()}
        customRowRenderer={(key, row, index) => {
          switch (key) {
            case 'code1':
              return <div>{`${t('ID')} ${t('Family')} ${t('Private')}`}</div>;

            case 'code2':
              return <div>{`${t('Stu_ID')} ${t('Student')} ${t('CL')} ${t('CL')}`}</div>;

            case 'code5':
              return <div>{`${t('CITY')} ${t('STREET')} ${t('BULL')}`}</div>;

            case 'code6':
              return <div>{`${t('PHONE')} ${t('PHONE')}`}</div>;

            default:
              return (row as Record<string, any>)[key];
          }
        }}
      />
    </ReportPrint>
  );
};

export default StandingOrderDetails;
