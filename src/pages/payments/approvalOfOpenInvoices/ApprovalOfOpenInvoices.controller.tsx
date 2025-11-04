// MCFW-1372
import { adminServices } from '@/services';
import ApprovalOfOpenInvoicesUI from './ApprovalOfOpenInvoices.render';
import { useApiQuery, useAuth } from '@/hooks';
import { ServiceFn, SortDirection } from '../type';
import { useEffect, useMemo, useState } from 'react';
import { GetListofOpenInvoicesResponse as ApiResponse, OpenInvoiceItem } from './type';

const ApprovalOfOpenInvoices = () => {
  const auth = useAuth();
  const user = auth?.user;
  const {
    state: { isError: isGetListofOpenInvoicesError, data: GetListofOpenInvoicesResponse },
    callService: GetListofOpenInvoicesService,
    resetServiceState: resetGetListofOpenInvoices
  } = useApiQuery(adminServices.invoice.GetListofOpenInvoices as ServiceFn);

  const typedResponse = GetListofOpenInvoicesResponse as ApiResponse | undefined;

  const [query, setQuery] = useState({
    Page: 1,
    Size: 10,
    SortColumn: '',
    SortType: ''
  });

  useEffect(() => {
    if (!user?.instiYear || !user?.instiCode) return;
    GetListofOpenInvoicesService({
      ...query,
      SystemYear: Number(user?.instiYear),
      Institution: Number(user?.instiCode)
    });
  }, [user, query]);

  useEffect(() => {
    if (isGetListofOpenInvoicesError) {
      resetGetListofOpenInvoices();
    }
  }, [isGetListofOpenInvoicesError]);

  const rows = useMemo(() => {
    const list = Array.isArray(typedResponse?.data) ? typedResponse.data : [];

    return list.map((item: OpenInvoiceItem) => ({
      actNo: item.actNo,
      studentNo: item.studentNo,
      dateAut: item.dateAut,
      orderNum: item.orderNum,
      serviceTypeName: (item.serviceTypeName || '').trim?.() || item.serviceTypeName,
      accCardName: (item.accCardName || '').trim?.() || item.accCardName,
      outcomeSum: item.outcomeSum,
      suppNum: item.suppNum,
      suppName: (item.suppName || '').trim?.() || item.suppName,
      payActNo: item.payActNo,
      descAut: (item.descAut || '').trim?.() || item.descAut
    }));
  }, [typedResponse?.data]);
  const pagination = typedResponse?.metaInfo;

  const handlePaginationChange = (page: number) => {
    setQuery(prev => ({ ...prev, Page: page }));
  };

  const handleSort = (key: string, direction: SortDirection) => {
    setQuery(prev => ({ ...prev, SortColumn: key, SortType: direction, Page: 1 }));
  };

  return (
    <ApprovalOfOpenInvoicesUI
      data={rows}
      pagination={pagination}
      handlePaginationChange={handlePaginationChange}
      handleSort={handleSort}
    />
  );
};

export default ApprovalOfOpenInvoices;
