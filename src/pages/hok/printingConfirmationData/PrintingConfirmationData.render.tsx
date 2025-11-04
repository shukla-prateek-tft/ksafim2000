import { ReportCells, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { PrintingConfirmationDataColumn } from './Components';
import { useTranslation } from 'react-i18next';

interface Props {
  data: unknown[];
  renderActionItems?: () => JSX.Element;
  customRowRender?: () => JSX.Element;
}

const PrintingConfirmationDataUI = ({ data, customRowRender }: Props) => {
  const { t } = useTranslation('common');

  return (
    <ReportPrint
      header={<ReportHeader center={<ReportCells label={t('')} value={'REPORT_HEADER'} />} />}
    >
      <Table
        height="70vh"
        customRowRenderer={customRowRender}
        data={data}
        columns={PrintingConfirmationDataColumn()}
      />
    </ReportPrint>
  );
};

export default PrintingConfirmationDataUI;
