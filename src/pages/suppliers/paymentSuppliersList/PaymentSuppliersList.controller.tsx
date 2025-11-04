// MCFW-1370
import {
  BackToPageButton,
  Button,
  DetailButton,
  PrintButton,
  SaveButton
} from '@/components/commonButtons';
import { useAuth } from '@/hooks';
import { useApiQuery } from '@/hooks/useApiService';
import { ServiceFn, SortDirection } from '@/pages/type';
import { UseApiQueryOptionsType } from '@/services/types';
import type {
  MCFW1370Filters,
  PaymentSupplierState,
  SupplierType
} from '@/store/slices/PaymentSupplier/types';
import { Select } from '@/ui/Select';
import type { Option as SelectOption } from '@/ui/Select/Select';
import { dowloadHelpDocument, isFutureDate } from '@/utils/commonHelper';
import { buildJsonApiUrl } from '@/utils/jsonApiUrlBuilder';
import Jsona from 'jsona';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { PiHandbagBold } from 'react-icons/pi';
import { RiArrowUpDownFill, RiLogoutBoxLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import classes from './PaymentSupplierList.module.scss';
import PaymentSuppliersUI from './PaymentSupplierList.render';
import { SupplierPaymentListTypes } from './type';
import { GlobalLoader } from '@/components/loader';
export const defaultPaymentSupplierListFilterValues: MCFW1370Filters = {
  Supp_Num: '',
  Size: 6,
  Supp_Name: '',
  Supp_Vat_Num: '',
  Supp_Num_Dealer: '',
  If_Hsb_Open: false,
  Inv_Confirm: false,
  SortColumn: '',
  SortType: SortDirection.Asc,
  SystemYear: '',
  Institution: '',
  Page: 1
};

const PaymentSuppliersList = ({ headerTitle }: SupplierPaymentListTypes) => {
  const [selectedSupplier, setSelectedSupplier] = useState<SupplierType | null>(null);
  const { t } = useTranslation('paymentSuppliersList');
  const { t: t2 } = useTranslation('common');
  const { user, toggleFlags } = useAuth();
  const { mcfw1370Filters: filters } = useSelector(
    (state: { paymentSupplier: PaymentSupplierState }) => state.paymentSupplier
  );
  const [supplierState, setSupplierState] = useState({
    data: [],
    metaInfo: {}
  });

  const [supplierFilter, setSupplierFilter] = useState({
    Supp_Name: filters?.Supp_Name ?? '',
    Supp_Num: filters?.Supp_Num ?? ''
  });

  const getPaymentSuppilerList2: UseApiQueryOptionsType = ({
    SystemYear = '2025',
    Size = 10,
    Page = 1,
    SortColumn = '',
    Supp_Name = '',
    Supp_Num = ''
  }) => {
    // here we are making the url of api with filters and include
    const url = buildJsonApiUrl({
      include: ['accountingCard.balance', 'bank', 'city'],
      filters: {
        'accountingCard.balance.year': SystemYear,
        name: Supp_Name,
        id: Supp_Num
      },
      sort: SortColumn,
      pageSize: Size,
      pageNumber: Page
    });

    return {
      url: url,
      method: 'GET'
    };
  };

  // Here we are calling the api getPaymentSupplier List

  const {
    loading: getPaymentSupplierLoading2,
    data: paymentSupplierResponse2,
    callService: getPaymentSupplierListService2
  }: any = useApiQuery<any, Partial<MCFW1370Filters> | null>(getPaymentSuppilerList2 as ServiceFn, {
    queryKey: 'getPaymentSupplierList',
    initialParams: null,
    enabled: false,
    // Here we can catch the api data after successfull fetch , no Need for extra useEffect
    onSuccess: data => {
      const { meta } = data;
      setSupplierState({
        data: transformSuppliers(data),
        metaInfo: meta
      });
    }
  });

  // here we are bringing the data into a format familar to our component and deserilizing the json:api response
  function transformSuppliers(jsonApiResponse: any) {
    const formatter = new Jsona();

    // Deserialize JSON:API response
    const suppliers = formatter.deserialize(jsonApiResponse);
    console.log('supplierData = ', suppliers);

    return suppliers?.map((supp: any) => {
      const bank = supp.bank || {};
      const accCard = supp.accountingCard || {};
      const accBalance = accCard.balance || {};

      return {
        supp_Num: supp.id,
        supp_Name: supp.name || supp.attributes?.name || null,
        bank: bank.id || null,
        bank_Name: bank.name || bank.attributes?.name || null,
        bank_Account: supp.bankAccount || supp.attributes?.bankAccount || null,
        phone_Num1: supp.phone1Number || supp.attributes?.phone1Number || null,
        phone_Prefix1: supp.phone1Prefix || supp.attributes?.phone1Prefix || null,
        email_1: supp.email1 || supp.attributes?.email1 || null,
        tax_Deduct: 0.0,
        tax_Date: new Date().toISOString(),
        acc_Card: accCard.id || null,
        hsb_Open: accBalance.credit || 0,
        total: accBalance.total || 0
      };
    });
  }

  const handlePagination = (page: number) => {
    getPaymentSupplierListService2({
      ...filters,
      Page: page,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
  };

  const handleSelectSupplier = (item: SupplierType) => {};
  const handleApiSorting = (columnId: string, direction: SortDirection) => {
    if (columnId == 'supp_Num') {
      columnId = 'id';
    }
    if (columnId == 'supp_Name') {
      columnId = 'name';
    }
    if (columnId == 'bank_Name') {
      columnId = 'bank.name';
    }
    if (columnId == 'bank_Account') {
      columnId = 'bank.branchCode';
    }
    if (columnId == 'phone_Num1') {
      columnId = 'phone1Number';
    }
    if (columnId == 'email_1') {
      columnId = 'email1';
    }
    const sortSymbol = direction === 'Asc' ? '' : '-';
    const updatedFilters = {
      ...filters,
      SortColumn: `${sortSymbol}${columnId}`
    };
    getPaymentSupplierListService2({
      ...updatedFilters,
      Page: filters?.Page,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
  };
  const handleGoToPaymentSupplier = (supplierData: SupplierType, validationCheck = false) => {};
  const handleChangeFilters = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked, type } = event.target;

    const newFilterValue = type === 'checkbox' ? checked : value;

    const baseFilters = filters;
    const updatedFilters = {
      ...baseFilters,
      Page: 1,
      [id]: newFilterValue,
      ...(id === 'Supp_Name' ? { Supp_Num: '' } : {})
    };

    if (id === 'Supp_Name' || id === 'Supp_Num') {
      setSupplierFilter(prev => ({ ...prev, [id]: newFilterValue }));
    }
  };
  const handleClearFilter = () => {};

  const handleClickOnNewExpenseVouchers = () => {};
  const handleClick = () => {};
  const handleClinkEnterInvoices = () => {
    if (handleGoToPaymentSupplier(selectedSupplier, true)) {
    }
  };
  const expenseVoucherActionsItems = [
    { label: t('privateChangeQExpenditure'), action: handleClickOnNewExpenseVouchers },
    { label: t('cancellationHOpenness'), disabled: true },
    {
      label: t('privateChangeQExpenditure2'),
      action: () => {}
    }
  ];
  const paymentvouchersActionItems = [
    {
      label: t('privateChangeQPayment'),
      disabled: !selectedSupplier?.supp_Num,
      action: () => {
        toggleFlags('SuppNum', selectedSupplier?.supp_Num);
      }
    },
    { label: t('cancellationOrderPayment'), disabled: true },
    { label: t('extentionOfInvoiceReporting'), disabled: true },
    {
      label: t2('L_INVOICE_ENTERG'),
      action: handleClinkEnterInvoices,
      disabled: !selectedSupplier?.supp_Num
    }
  ];
  const handleSelectPaymentVoucherAction = (
    _event: React.ChangeEvent<HTMLSelectElement>,
    option: SelectOption
  ) => {
    if (option?.action) {
      option?.action();
    }
  };
  const handleGoToSupplier = (actNo: string) => {};
  const renderMainButtons = () => {
    return (
      <div className={classes.actionButtonContainers}>
        <Select
          size="sm"
          placeholder={t('ExpenseVoucherActions')}
          options={expenseVoucherActionsItems}
          onChange={handleSelectPaymentVoucherAction}
        />
        <Select
          size="sm"
          placeholder={t('PaymentVoucherActions')}
          options={paymentvouchersActionItems}
          onChange={handleSelectPaymentVoucherAction}
        />
        <Button
          size="md"
          variant="outline"
          title={t('requestOpenProvider')}
          renderIcon={<PiHandbagBold />}
        />
        <Button
          variant="outline"
          renderIcon={<RiArrowUpDownFill />}
          size="md"
          title={t('privateChangeQExpenditure2')}
          onClick={() => {}}
        />
        <Button
          variant="outline"
          size="md"
          title={t('cancellationQExpenditure')}
          renderIcon={<IoMdCheckboxOutline />}
        />
        <Button
          variant="outline"
          size="md"
          title={t('extentionOfInvoiceReporting2')}
          renderIcon={<RiLogoutBoxLine />}
          onClick={() => {}}
        />
      </div>
    );
  };
  const renderActionItems = () => {
    return (
      <div className={classes.actionButtonContainers}>
        <PrintButton onClick={() => {}} />
        <SaveButton onClick={handleClick} />
        <DetailButton onClick={dowloadHelpDocument} />
        <BackToPageButton
          onClick={() => {
            if (triggerPopup()) {
              handleClearFilter();
            }
          }}
        />
      </div>
    );
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={getPaymentSupplierLoading2} />
      <PaymentSuppliersUI
        data={supplierState.data}
        handlePagination={handlePagination}
        pagination={{
          pageNumber: filters?.Page,
          pageSize: 10,
          totalPages: 10,
          totalCount: 140,
          hasPreviousPage: true,
          hasNextPage: true
        }}
        handleShow={() =>
          getPaymentSupplierListService2({
            ...filters,
            Page: filters?.Page,
            SystemYear: user?.instiYear,
            Institution: user?.instiCode,
            Supp_Num: supplierFilter.Supp_Num ? supplierFilter.Supp_Num: filters.Supp_Num,
            Supp_Name: supplierFilter.Supp_Name ? supplierFilter.Supp_Name: filters.Supp_Name
          })
        }
        selectedSuppliers={selectedSupplier}
        handleSelectSupplier={handleSelectSupplier}
        renderActionItems={renderActionItems}
        filters={filters}
        supplierFilter={supplierFilter}
        handleClearFilters={handleClearFilter}
        handleChangeFilters={handleChangeFilters}
        headerTitle={headerTitle}
        handleClick={handleClick}
        handleApiSortingSupplier={handleApiSorting}
        handleClickOnNewExpenseVouchers={handleClickOnNewExpenseVouchers}
        handleGoToPaymentSupplier={handleGoToPaymentSupplier}
        renderMainButtons={renderMainButtons}
        handleGoToSupplier={handleGoToSupplier}
      />
    </>
  );
};

export default PaymentSuppliersList;
