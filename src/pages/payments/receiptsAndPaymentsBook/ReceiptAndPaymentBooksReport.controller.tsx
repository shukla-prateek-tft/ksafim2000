//MCFR-0613
import React from 'react';
import { useApiQuery, useAuth } from '@/hooks';
import ReceiptAndPaymentBooksReportUI from './ReceiptAndPaymentBooksReport.render';
import { adminServices } from '@/services';
import { useEffect, useState } from 'react';
import { ServiceFn } from '../type';
import {
  GetReceiptAndPaymentBooksReportResponseInterface,
  ReceiptAndPaymentBooksReportFilters,
  ReceiptAndPaymentBooksReportPayload,
  ReceiptAndPaymentBooksReportRow,
  ResponseInterface,
  GetPaywayResponse,
  PaywayDataType
} from './type';
import { Input } from '@/ui/Input';

const ReceiptAndPaymentBooksReport = () => {
  //get-mcfr-0613-report
  const { user } = useAuth();
  const {
    state: { data: receiptBookCutOutReportResponse },
    callService: receiptBookCutOutReportService
  }: GetReceiptAndPaymentBooksReportResponseInterface = useApiQuery<
    ResponseInterface<ReceiptAndPaymentBooksReportPayload>
  >(adminServices.payments.getReceiptBookCutOutReport as ServiceFn);

  const {
    state: { data: paywayResponse },
    callService: getPaywayService
  } = useApiQuery<GetPaywayResponse>(adminServices.mapping.getPayway as ServiceFn);

  const [filters, setFilters] = useState<ReceiptAndPaymentBooksReportFilters>({
    Bank_Deposit: null,
    PayWay: 1234,
    BankNo: null,
    BankAccount: null,
    Return_Status: null,
    F_Date: '',
    T_Date: '',
    Check_Num: null,
    Act_No: ''
  });

  const apiQueries = {
    Bank_Deposit: filters.Bank_Deposit || null,
    PayWay: filters.PayWay || 1234,
    BankNo: filters.BankNo || null,
    BankAccount: filters.BankAccount || null,
    Return_Status: filters.Return_Status || null,
    F_Date: filters.F_Date || '',
    T_Date: filters.T_Date || '',
    Check_Num: filters.Check_Num || null,
    Act_No: filters.Act_No || '',
    Page: 1,
    Size: 50,
    SortColumn: '',
    SortType: 'Asc',
    SystemYear: Number(user?.instiYear),
    Institution: Number(user?.instiCode),
    'x-version': '1'
  };

  useEffect(() => {
    getPaywayService();
    receiptBookCutOutReportService(apiQueries);
  }, []);

  const handleRetrieve = () => {
    receiptBookCutOutReportService(apiQueries);
  };

  const handleChangeFilter = (patch: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...patch }));
  };

  const handleClear = () => {
    setFilters({
      Bank_Deposit: null,
      PayWay: 1234,
      BankNo: null,
      BankAccount: null,
      Return_Status: null,
      F_Date: '',
      T_Date: '',
      Check_Num: null,
      Act_No: ''
    });
  };

  const customRowRender = (
    key?: Extract<keyof ReceiptAndPaymentBooksReportRow, string | number> | string,
    row?: ReceiptAndPaymentBooksReportRow
  ) => {
    switch (key) {
      case 'return_Status':
        return <Input type="checkbox" checked={!!row?.return_Status} disabled />;

      default:
        return row?.[key as keyof ReceiptAndPaymentBooksReportRow];
    }
  };

  const paywayData = Array.isArray(paywayResponse?.data)
    ? paywayResponse.data.map((item: PaywayDataType) => ({
        value: Number(item.pay_Way),
        label: item.pay_Way_Desc
      }))
    : [];

  return (
    <ReceiptAndPaymentBooksReportUI
      data={receiptBookCutOutReportResponse?.data}
      filters={filters}
      onChangeFilter={handleChangeFilter}
      onRetrieve={handleRetrieve}
      onClear={handleClear}
      customRowRender={customRowRender}
      paywayData={paywayData}
    />
  );
};

export default ReceiptAndPaymentBooksReport;
