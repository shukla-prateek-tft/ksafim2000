import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { BalanceDistributionReportBySectionColumn } from './components';
import { useTranslation } from 'react-i18next';

interface BalanceDistributionReportBySectionProps {
  data: any[];
}

const BalanceDistributionReportBySection: React.FC<BalanceDistributionReportBySectionProps> = ({
  data
}) => {
  const { t } = useTranslation('common');

  return (
    <ReportPrint
      header={
        <ReportHeader
          left={
            <>
              <ReportCells value={t('Monic_name')} />
            </>
          }
          right={
            <>
              <ReportCells value={t('System_name')} />
              <ReportCells value={t('Report_date')} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
              <ReportCells value={t('T_MCFR1334')} />
            </>
          }
          center={
            <>
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
      <Table data={data} columns={BalanceDistributionReportBySectionColumn()} />
    </ReportPrint>
  );
};

export default BalanceDistributionReportBySection;
