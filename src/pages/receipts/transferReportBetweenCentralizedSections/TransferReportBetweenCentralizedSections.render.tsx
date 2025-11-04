import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { TransferReportBetweenCentralizedSectionsColumn } from './components';
import { useTranslation } from 'react-i18next';

interface TransferReportBetweenCentralizedSectionsProps {
  data: any[];
}

const TransferReportBetweenCentralizedSections: React.FC<
  TransferReportBetweenCentralizedSectionsProps
> = ({ data }) => {
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
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          center={
            <>
              <div>{t('L_DATE')}</div> {/* Report Name */}
              <div>{t('L_DATE')}</div> {/* Title*/}
            </>
          }
        />
      }
      footer={
        <>
          <ReportFooter
            left={
              <>
                <ReportCells label={t('L_MCFR1382_TOT_REC')} value={'dfsdfbsd'} />
                <ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />
              </>
            }
            right={<ReportCells label={t('L_PRINTED_BY')} value={'abcdfg'} />}
          />
        </>
      }
    >
      <Table data={data} columns={TransferReportBetweenCentralizedSectionsColumn()} />
    </ReportPrint>
  );
};

export default TransferReportBetweenCentralizedSections;
