// MCFW-1396
import { useApiQuery, useAuth } from '@/hooks';
import InvoiceDivisionByLayersUI from './InvoiceDivisionByLayers.render';
import { GlobalLoader } from '@/components';
import { ApiState, ServiceFn } from '../type';
import { useEffect, useMemo, useState } from 'react';
import { adminServices } from '@/services';
import {
  AccActTypeOption,
  BuildDetailItem,
  BuildResult,
  CheckInvoiceParams,
  ClassListOption,
  GetAccCardsParams,
  InvoiceAccCardOption,
  InvoiceRow,
  InvoiceScreenState,
  MappingResponse,
  ServiceTypeOption,
  SupplierTypeOption
} from './type';

const InvoiceDivisionByLayers = () => {
  const { user, flags, toggleFlags } = useAuth();

  const [screen, setScreen] = useState<InvoiceScreenState>({
    supplierType: undefined,
    accActType: undefined,
    invoiceType: undefined,
    invoiceNum: '',
    invoiceDate: '',
    description: '',
    invoiceSum: undefined,
    rows: [
      {
        id: 'row-1',
        serviceType: undefined,
        accCard: undefined,
        classFrom: undefined,
        classTo: undefined,
        fromNum: undefined,
        toNum: undefined,
        studentCount: undefined,
        sum: undefined
      }
    ]
  });

  const { state: supplierTypeState, callService: getSupplierTypes } = useApiQuery(
    adminServices.mapping.getSupplierTypeList as ServiceFn
  );

  const { state: accActTypeState, callService: getAccActTypes } = useApiQuery(
    adminServices.mapping.getAccActTypes as ServiceFn
  );

  const { state: serviceTypeState, callService: getServiceTypes } = useApiQuery(
    adminServices.mapping.getServiceTypeList as ServiceFn
  );

  const { state: accCardsState, callService: getAccCards } = useApiQuery(
    adminServices.mapping.getAccCardsOfSupplier as ServiceFn
  );

  const { state: classListState, callService: getClassList } = useApiQuery(
    adminServices.mapping.getClassList as ServiceFn
  );

  const { state: checkInvoiceState, callService: checkInvoiceNumber } = useApiQuery(
    adminServices.invoice.checkInvoiceNumberFor1396 as ServiceFn
  );

  const { state: studentCountState, callService: getStudentCount } = useApiQuery(
    adminServices.invoice.getStudentCountFor1396 as ServiceFn
  );

  // -------- Derived data --------
  const supplierTypes =
    (supplierTypeState as ApiState<MappingResponse<SupplierTypeOption[]>>).data?.data ?? [];
  const accActTypes =
    (accActTypeState as ApiState<MappingResponse<AccActTypeOption[]>>).data?.data ?? [];
  const serviceTypes =
    (serviceTypeState as ApiState<MappingResponse<ServiceTypeOption[]>>).data?.data ?? [];
  const classOptions =
    (classListState as ApiState<MappingResponse<ClassListOption[]>>).data?.data ?? [];
  const accCards =
    (accCardsState as ApiState<MappingResponse<InvoiceAccCardOption[]>>).data?.data ?? [];

  const isLoading = [
    (supplierTypeState as ApiState<unknown>).loading,
    (accActTypeState as ApiState<unknown>).loading,
    (serviceTypeState as ApiState<unknown>).loading,
    (classListState as ApiState<unknown>).loading,
    (accCardsState as ApiState<unknown>).loading,
    (checkInvoiceState as ApiState<unknown>).loading,
    (studentCountState as ApiState<unknown>).loading
  ].some(Boolean);

  // -------- Effects: initial dropdowns --------
  useEffect(() => {
    getSupplierTypes({ isAllType: false });
    getAccActTypes();
    getServiceTypes();
    getClassList();
  }, []);

  // -------- Handlers --------
  const onChangeHeader = <K extends keyof InvoiceScreenState>(
    key: K,
    value: InvoiceScreenState[K]
  ) => {
    setScreen(prev => ({ ...prev, [key]: value }));
  };

  const onChangeRow = (id: string, patch: Partial<InvoiceRow>) => {
    setScreen(prev => ({
      ...prev,
      rows: prev.rows.map(r => (r.id === id ? { ...r, ...patch } : r))
    }));
  };

  const onServiceTypeChange = (id: string, serviceType?: number) => {
    onChangeRow(id, { serviceType, accCard: undefined });
    console.log('ServiceType', serviceType);
    if (serviceType) {
      const params: GetAccCardsParams = {
        serviceType,
        page: 1,
        size: 10
      };
      getAccCards(params);
    }
  };

  const onValidateInvoice = () => {
    const params: CheckInvoiceParams = {
      InvoiceNumber: screen.invoiceNum,
      SuppNumber: flags?.SuppNum ?? '',
      KalendarYear: undefined,
      SystemYear: user.instiYear,
      InstitutionCode: Number(user.instiCode)
    };
    checkInvoiceNumber(params);
  };

  const distributeInvoice = (invoiceSum?: number, studentNumbers?: number[]) => {
    if (invoiceSum == null || !studentNumbers || studentNumbers.length === 0) {
      return { code: -1 as const, distributed: [] as number[] };
    }
    const total = studentNumbers.reduce((a, b) => a + (Number.isFinite(b) ? b : 0), 0);
    if (total <= 0) return { code: -1 as const, distributed: [] as number[] };

    const raw: number[] = [];
    let accumulated = 0;
    for (let i = 0; i < studentNumbers.length; i += 1) {
      const part = Math.round((studentNumbers[i] / total) * invoiceSum * 100) / 100;
      raw.push(part);
      accumulated += part;
    }
    // last group gets the remainder
    const remainder = Math.round((invoiceSum - accumulated) * 100) / 100;
    if (raw.length > 0)
      raw[raw.length - 1] = Math.round((raw[raw.length - 1] + remainder) * 100) / 100;

    return { code: 0 as const, distributed: raw };
  };

  const onCalculateAmounts = async () => {
    // If you want to use API-based student count per row, call getStudentCount here per row
    // Otherwise, use entered studentCount values directly
    const numbers: number[] = screen.rows.map(r => Number(r.studentCount ?? 0));
    const { code, distributed } = distributeInvoice(screen.invoiceSum, numbers);

    if (code === -1) {
      toggleFlags('showValidationError', true);
      toggleFlags('errorData', {
        message: 'Validation failed: missing invoice sum or student counts',
        dialogTitle: 'Validation',
        confirmText: 'OK'
      });
      return;
    }

    setScreen(prev => ({
      ...prev,
      rows: prev.rows.map((r, idx) => ({ ...r, sum: distributed[idx] }))
    }));
  };

  const buildInvoiceData = (
    status: number,
    invoiceNum: string,
    invoiceDate: Date | undefined,
    description: string,
    accActType: string,
    invoiceSum: number | undefined,
    invoiceType: string,
    details: BuildDetailItem[]
  ): BuildResult => {
    if (
      status < 0 ||
      !invoiceNum ||
      !invoiceDate ||
      !accActType ||
      !invoiceSum ||
      !invoiceType ||
      details.length === 0
    ) {
      return { code: -1, selectItems: {}, selectDetails: [] };
    }

    const selectItems = {
      invoice_num: invoiceNum,
      invoice_date: invoiceDate.toISOString(),
      invoice_desc: description,
      acc_act_type: accActType,
      invoice_sum: invoiceSum,
      invoice_type: invoiceType
    } as const;

    const selectDetails = details.map(d => ({
      service_type: d.serviceType,
      acc_card: d.accCard,
      sum: d.sum
    }));

    return { code: 1, selectItems, selectDetails };
  };

  const onTransferData = () => {
    const build = buildInvoiceData(
      0,
      screen.invoiceNum,
      screen.invoiceDate ? new Date(screen.invoiceDate) : undefined,
      screen.description,
      screen.accActType?.code?.toString() ?? '',
      screen.invoiceSum,
      screen.invoiceType?.code?.toString() ?? '',
      screen.rows
        .filter(r => r.serviceType && r.accCard && (r.sum ?? 0) > 0)
        .map(r => ({
          serviceType: String(r.serviceType),
          accCard: String(r.accCard),
          sum: Number(r.sum ?? 0)
        }))
    );

    if (build.code !== 1) {
      toggleFlags('showValidationError', true);
      toggleFlags('errorData', {
        message: 'Build failed: check header and rows',
        dialogTitle: 'MCFW1396',
        confirmText: 'OK'
      });
      return;
    }

    // Here you would navigate/send to the next screen (MCFW0695)
    // For now we just stash it into flags so it can be consumed later
    toggleFlags('mcfw1396Build', { items: build.selectItems, details: build.selectDetails });
  };

  // Enable invoice type only if invoice_type param == 1 (here we assume 1)
  const invoiceTypeEnabled = true;

  // Dependent invoice types based on supplier type
  const invoiceTypeOptions = useMemo(() => {
    const s = screen.supplierType?.caseId;
    if (!s) return [] as { code: number; text: string }[];

    const push = (arr: number[]) => arr.map(n => ({ code: n, text: String(n) }));

    if (s === 3) return push([4, 5]);
    if (s === 5 || s === 7)
      return [
        { code: 3, text: '3' },
        { code: 4, text: '4' },
        { code: 5, text: 'חשבון' }
      ];
    if (s === 1) return push([1, 2, 3]);
    if (s === 4) return push([3]);
    return [];
  }, [screen.supplierType]);

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <InvoiceDivisionByLayersUI
        state={screen}
        supplierTypes={supplierTypes}
        accActTypes={accActTypes}
        serviceTypes={serviceTypes}
        accCards={accCards}
        classOptions={classOptions}
        invoiceTypeEnabled={invoiceTypeEnabled}
        invoiceTypeOptions={invoiceTypeOptions}
        onChangeHeader={onChangeHeader}
        onChangeRow={onChangeRow}
        onServiceTypeChange={onServiceTypeChange}
        onValidateInvoice={onValidateInvoice}
        onCalculateAmounts={onCalculateAmounts}
        onTransferData={onTransferData}
        pagination={(accCardsState as ApiState<unknown>).data?.metaInfo}
      />
    </>
  );
};

export default InvoiceDivisionByLayers;
