//MCFR-0597
import { useApiQuery, useAuth } from '@/hooks';
import IncomeTaxSuppliersReportUI from './IncomeTaxSuppliersReport.render';
import { adminServices } from '@/services';
import { ApiState, CustomRowRenderType, ServiceFn, SortDirection } from '../type';
import { useEffect } from 'react';
import { BackToPageButton, DetailButton, PrintButton, PrintExcel, SearchButton } from '@/components/commonButtons';
import classes from "./IncomeTaxSuppliersReport.module.scss";
import { Input } from '@/ui/Input';
import { GlobalLoader } from '@/components';
import { showToastErrors } from '@/utils/commonHelper';
import { useNavigate } from 'react-router-dom';
import { GetSupplierReport0597ReturnType, SupplierDetailsDataType, SupplierReportInfoType } from './type';

const IncomeTaxSuppliersReport = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    state,
    callService: getSupplierReportService,
  }: GetSupplierReport0597ReturnType = useApiQuery(adminServices.suppliers.getSupplierReport0597 as ServiceFn);

  const {
    loading: supplierReportLoading,
    isError: isSupplierReportError,
    error: supplierReportError,
    data: supplierReportData,
  } = state as ApiState<{ data: SupplierReportInfoType }>;

  useEffect(() => {
    getSupplierReportService({})
  }, [])

  useEffect(() => {
    if (isSupplierReportError && supplierReportError) {
      navigate(-1);
      showToastErrors(supplierReportError);
    }
  }, [isSupplierReportError, supplierReportError])

  const renderActionItem = () => <div className={classes.renderItem}>
    <BackToPageButton />
    <DetailButton />
    <PrintButton onClick={() => window.print()} />
    <SearchButton />
    <PrintExcel />
  </div>

  const customRowRenderer: CustomRowRenderType<SupplierDetailsDataType> = (key, row) => {
    switch (key) {
      case "Main_To_Mas":
        return <Input type="checkbox" checked={row?.[key]} size='sm' orientation='horizontal' />;
    }
  };

  const onColumnSort = (column: string, sortType: SortDirection) => {
    getSupplierReportService({
      SortColumn: column,
      SortType: sortType,
    })
  }

  return <>
    <GlobalLoader showOnFullScreen loading={supplierReportLoading} />
    <IncomeTaxSuppliersReportUI
      supplierReportData={supplierReportData?.data || {}}
      renderActionItem={renderActionItem}
      customRowRenderer={customRowRenderer}
      onColumnSort={onColumnSort}
      printedBy={user.userName}
    />;
  </>
};

export default IncomeTaxSuppliersReport;
