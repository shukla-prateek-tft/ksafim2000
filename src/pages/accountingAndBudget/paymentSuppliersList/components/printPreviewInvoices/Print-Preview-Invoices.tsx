// MCFR-0681
import React from 'react';
import { getFormatedDate, getFormatedNumber, showToastErrors } from '@/utils/commonHelper';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from '@/Languages';
import { exportData } from '@/hooks/api';
import { CustomRowRenderType, ServiceFn } from '@/pages/type';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import classes from './PrintPreviewInvoices.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel
} from '@/components/commonButtons';
import { GlobalLoader } from '@/components';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { PrintPreviewInvoicesColumns } from '../Column';
import { Table } from '@/ui/Table';
import { Input } from '@/ui/Input';
import {
  GetInvoiceDataAPIResponse,
  InvoiceData,
  InvoiceRecord,
  LocationState,
  SortConfig
} from './type';

const Print_Preview_Suppliers_Invoices: React.FC = () => {
  const { user } = useAuth();
  const { state } = useLocation() as { state: LocationState };

  const { t } = useTranslation('printPreviewSupplierInvoices');

  const { t: t2 } = useTranslation('common');
  //get-print-preview-supplier-invoices-service
  const {
    state: {
      loading: getSupplierInvoicesLoading,
      data: getSupplierInvoicesResponse,
      isError: isGetSupplierInvoicesError,
      error: getSupplierInvoicesError
    },
    callService: getSupplierInvoicesService,

    resetServiceState: resetgetSupplierInvoicesState
  } = useApiQuery<GetInvoiceDataAPIResponse>(
    adminServices.invoice.getSupplierInvoices as ServiceFn
  );

  useEffect(() => {
    if (isGetSupplierInvoicesError && getSupplierInvoicesError) {
      showToastErrors(getSupplierInvoicesError);
      resetgetSupplierInvoicesState();
    }
  }, [getSupplierInvoicesResponse, getSupplierInvoicesError, isGetSupplierInvoicesError]);

  const apiPayload = {
    Acc_Card: state?.data?.acc_Card,
    SystemYear: user?.instiYear,
    InstitutionCode: user?.instiCode
  };
  useEffect(() => {
    if (state) {
      getSupplierInvoicesService(apiPayload);
    }
  }, [state]);
  const navigate = useNavigate();
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton
          onClick={() =>
            state?.isNew
              ? navigate(-1)
              : navigate(AppRoutes.PAYMENT_SUPPILER_LIST, {
                  state: { persistData: true }
                })
          }
        />
        <DetailButton />
        <PrintButton onClick={handlePrint} />
        <PrintExcel onClick={handleExportListOfInvoices} />
        <SearchButton />
      </div>
    );
  };
  const handlePrint = () => {
    window.print();
  };
  const printData: InvoiceData = getSupplierInvoicesResponse?.data || {};
  const handleExportListOfInvoices = () => {
    exportData(
      'ExportData/export/excel/mcfr0681',
      user?.token,
      apiPayload,
      `MCFR0681_${user?.instiCode}.xlsx`
    );
  };

  const [sortConfig, setSortConfig] = useState<SortConfig>();

  const handleSort = (key: string) => {
    setSortConfig(prev => {
      if (!prev || prev.key !== key) {
        return { key, direction: 'asc' };
      }

      if (prev.direction === 'asc') {
        return { key, direction: 'desc' };
      }

      return null;
    });
  };

  const sortedRecords = useMemo(() => {
    const records = Array.isArray(printData?.records) ? printData.records : [];
    if (!sortConfig?.key) return records;

    return [...records].sort((a, b) => {
      const aVal = a[sortConfig?.key as keyof InvoiceRecord];
      const bVal = b[sortConfig?.key as keyof InvoiceRecord];

      if (aVal < bVal) return sortConfig?.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig?.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [printData?.records, sortConfig]);

  const customRowRenderer: CustomRowRenderType<InvoiceRecord> = (key, row) => {
    switch (key) {
      case 'date_Relevant':
        return getFormatedDate(row?.date_Relevant);
      case 'value_date':
        return getFormatedDate(row?.value_date);
      case 'debit':
        return <span dir="ltr">{getFormatedNumber(row?.debit)}</span>;
      case 'credit':
        return <span dir="ltr">{getFormatedNumber(row?.credit)}</span>;
      case 'total':
        return <span dir="ltr">{getFormatedNumber(row?.total)}</span>;
      case 'manual':
      case 'temp':
        return <Input type="checkbox" size="fullWidth" />;
      default:
        return undefined;
    }
  };

  return (
    <>
      <GlobalLoader loading={getSupplierInvoicesLoading} />
      <ReportPrint
        renderActionItem={
          <div>
            <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
          </div>
        }
        header={
          <ReportHeader
            left={
              <>
                <ReportCells label={`${user.instiCode}`} value={`${user.instiName}`} />
                <ReportCells label={t('mainTitle')} />
                <ReportCells
                  label={t('reportDate')}
                  value={getFormatedDate(new Date(), 'HH:mm DD.MM.YYYY')}
                />
                <ReportCells label={t2('L_PAGE')} />
              </>
            }
            center={
              <>
                <div>{`${t('reportName_Pre')} ${user?.hebrewYear} ${t(
                  'reportName_Post'
                )} ${user?.instiYear}`}</div>
                {printData?.header && <div>{printData?.header}</div>}
              </>
            }
          />
        }
        footer={
          <>
            <div className={classes.summary}>
              <div>
                <p>
                  {t('L_ACUMULATOR')}
                  <div>
                    <span dir="ltr">{getFormatedNumber(printData.grandDebit)}</span>
                    <span dir="ltr">{getFormatedNumber(printData.grandCredit)}</span>
                    <span dir="ltr">{getFormatedNumber(printData.grandTotal)}</span>
                  </div>
                </p>
                <p>
                  {t('L_INCLUDE_BEFOR')}
                  <div>
                    <span dir="ltr">{getFormatedNumber(printData.includeDebit)}</span>
                    <span dir="ltr">{getFormatedNumber(printData.includeCredit)}</span>
                    <span dir="ltr">{getFormatedNumber(printData.includeTotal)}</span>
                  </div>
                </p>
                <p>
                  {t('L_PERIOD')}
                  <div>
                    <span dir="ltr">{getFormatedNumber(printData.totalDebit)}</span>
                    <span dir="ltr">{getFormatedNumber(printData.totalCredit)}</span>
                    <span dir="ltr">{getFormatedNumber(printData.totalTotal)}</span>
                  </div>
                </p>
                <p>
                  {t('L_BEFOR_PERIOD')}
                  <div>
                    <span dir="ltr">{getFormatedNumber(printData.beforeDebit)}</span>
                    <span dir="ltr">{getFormatedNumber(printData.beforeCredit)}</span>
                    <span dir="ltr">{getFormatedNumber(printData.beforeTotal)}</span>
                  </div>
                </p>
                <p>
                  <div>
                    <div>{t('L_TOTAL_DEBIT')}</div>
                    <div>{t('L_TOTAL_CREDIT')}</div>
                    <div>{t('L_TOTAL_REST')}</div>
                  </div>
                </p>
              </div>
            </div>
            <ReportFooter
              left={<ReportCells label={t2('L_SIGN')} value={''} />}
              right={<ReportCells label={t2('L_USER_NAME')} value={user.userName} />}
            />
          </>
        }
      >
        <div className={classes.summary}>
          <div>
            <p>
              {t('L_BUDGET')}
              <span>{printData.budget}</span>
            </p>

            <div>
              <p>
                <span>{printData.sort_Name}</span>
              </p>

              <p>
                {t('L_SORT_CODE')}
                <span>{printData.sort_Code}</span>
              </p>
            </div>

            <div>
              <p>
                <span>{printData?.descAut}</span>
              </p>

              <p>
                {t('L_ACC_NO')}
                <span>{printData?.accCard}</span>
              </p>
            </div>
          </div>
        </div>
        <Table
          height="27vh"
          data={sortedRecords}
          columns={PrintPreviewInvoicesColumns()}
          customRowRenderer={customRowRenderer}
          onSort={handleSort}
        />
      </ReportPrint>
    </>
  );
};

export default Print_Preview_Suppliers_Invoices;
