// MCFW-1370
import { GlobalLoader } from '@/components';
import { adminServices } from '@/services';
import { useApiQuery, useAuth } from '@/hooks';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PaymentSuppliersUI from './PaymentSupplierList.render';
import { ExtendSupplierValidity } from './components';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/Languages';
import { paymentSupplierAction } from '@/store/slices';
import { useDispatch, useSelector } from 'react-redux';
import { dowloadHelpDocument, isFutureDate } from '@/utils/commonHelper';
import { SelectCancelVoucher } from '@/pages/invoice/listOfInvoices';
import classes from './PaymentSupplierList.module.scss';
import {
  BackToPageButton,
  Button,
  SaveButton,
  DetailButton,
  OtherDetailButton,
  PrintButton
} from '@/components/commonButtons';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { Select } from '@/ui/Select';
import { RiArrowUpDownFill, RiLogoutBoxLine } from 'react-icons/ri';
import { PiHandbagBold } from 'react-icons/pi';
import { ServiceFn, SortDirection } from '@/pages/type';
import type {
  MCFW1370Filters,
  PaymentSupplierState,
  SupplierType,
  AddedInvoiceDataType
} from '@/store/slices/PaymentSupplier/types';
import type { Option as SelectOption } from '@/ui/Select/Select';
import {
  GetParamsDetailsByNameAPIResponseInterface,
  SupplierPaymentListTypes,
  GetPaymentSupplierListAPIResponseInterface,
  GetPaymentListAPIResponseInterface,
  GetInvoiceForPrintVoucherServiceInterface,
  ValidateExpenseVoucherResponse
} from './type';
import { usePreventReload } from '@/hooks/usePreventReload';
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

const PaymentSuppliersList = ({
  onSelectSupplierForPayment,
  headerTitle
}: SupplierPaymentListTypes) => {
  const [selectedSupplier, setSelectedSupplier] = useState<SupplierType | null>(null);
  const [isOpenExtendSupplierValidity, setIsOpenExtendSupplierValidity] = useState(false);
  const [isOpenExtendSupplierValidityCheck, setIsOpenExtendSupplierValidityCheck] = useState(false);
  const [isCancelationModalOpen, setIsCancelationModalOpen] = useState<boolean>(false);
  const { t } = useTranslation('paymentSuppliersList');
  const { t: t2 } = useTranslation('common');
  const { t: t3 } = useTranslation('addInvoice');
  const { user, toggleFlags } = useAuth();
  const { supplierData, mcfw1370Filters: filters } = useSelector(
    (state: { paymentSupplier: PaymentSupplierState }) => state.paymentSupplier
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [defaultFilters, setDefaultFilters] = useState(filters);
  const [forceLeave, setForceLeave] = useState(false);
  useEffect(() => {
    const newFilters = { ...filters, Supp_Name: '' };
    dispatch(paymentSupplierAction.setMCFW1370Filters(newFilters));
    setDefaultFilters(newFilters);
  }, []);

  const { hasPendingChanges, triggerPopup } = usePreventReload(
    forceLeave,
    [defaultFilters],
    [filters],
    undefined
  );

  const setFilters = (state: MCFW1370Filters) => {
    dispatch(paymentSupplierAction?.setMCFW1370Filters(state));
  };
  //get param by name
  const {
    state: { data: getParamDetailsByNameResponse, loading: getParamDetailsByNameLoading },
    callService: getParamDetailsByNameService
  }: GetParamsDetailsByNameAPIResponseInterface = useApiQuery(
    adminServices.suppliers.getParamsDetailsByName as ServiceFn
  );
  useEffect(() => {
    getParamDetailsByNameService({ paramName: 'work_with_licence_vat_supp' });
  }, []);

  //Get-Paymnent-Suppliers-List
  const {
    state: { loading: getPaymentSupplierLoading, data: paymentSupplierResponse },
    callService: getPaymentSupplierListService
  }: GetPaymentSupplierListAPIResponseInterface = useApiQuery(
    adminServices.suppliers.getPaymentSuppilerList as ServiceFn
  );

  // validate cancel expense voucher service
  const { callService: validateCancelExpenseVoucherService } =
    useApiQuery<ValidateExpenseVoucherResponse>(
      adminServices.vouchers.validateCancelExpenseVoucher as ServiceFn
    );

  useEffect(() => {
    if (paymentSupplierResponse?.data) {
      setForceLeave(true);
      const payloadData = paymentSupplierResponse?.data;
      setSelectedSupplier(payloadData[0]);
      handleSelectSupplier(payloadData[0]);
      dispatch(paymentSupplierAction.setPaymentSupplier(payloadData));
    }
    if (paymentSupplierResponse?.data?.length === 0) {
      toggleFlags({
        showValidationError: true,
        errorData: {
          message: t2('L_NO_SUPP'),
          dialogTitle: t3('errorTitle'),
          confirmText: t3('confirmText'),
          confirmCallback: () => {}
        }
      });
    }
  }, [paymentSupplierResponse]);

  // const clearData = () => {
  //   dispatch(paymentSupplierAction.setPaymentSupplier([]));
  //   dispatch(paymentSupplierAction.setCurrentPaymentList([]));
  // };
  useEffect(() => {
    if (location.state?.persistData) {
      getPaymentSupplierListService({
        ...filters,
        Page: location.state.new ? 1 : filters?.Page,
        SystemYear: user?.instiYear,
        Institution: user?.instiCode
      });
      location.state.new &&
      dispatch(paymentSupplierAction?.setMCFW1370Filters({ ...filters, Page: 1 }));
      // dispatch(paymentSupplierAction.setCurrentPaymentList([]));
    }
    // return () => {
    //    clearData();
    // };
  }, [location.state?.persistData]);

  //Get-Payment-List
  const {
    state: { loading: getPaymentListLoading, data: getPaymentListResponse },
    callService: getPaymentListService
  }: GetPaymentListAPIResponseInterface = useApiQuery(
    adminServices.suppliers.getPaymentList as ServiceFn
  );

  //Get-invoiceDetails-PrintScreen
  const {
    state: { data: getPrintInvoiceDetailsResponse, isSuccess: getPrintInvoiceDetailsSuccess },
    callService: getPrintInvoiceDetailsService
  }: GetInvoiceForPrintVoucherServiceInterface = useApiQuery(
    adminServices.invoice.getInvoiceForPrint as ServiceFn
  );

  useEffect(() => {
    if (getPaymentListResponse?.data) {
      dispatch(paymentSupplierAction.setCurrentPaymentList(getPaymentListResponse?.data));
    }
  }, [getPaymentListResponse]);

  useEffect(() => {
    if (getPrintInvoiceDetailsResponse?.data && getPrintInvoiceDetailsSuccess) {
      const actNo = getPrintInvoiceDetailsResponse?.data?.invoiceHeaderData?.act_No;
      if (actNo) {
        window.open(`/print-voucher/${actNo}`, '_blank');
      }
    }
  }, [getPrintInvoiceDetailsResponse?.data, getPrintInvoiceDetailsSuccess]);

  const handlePagination = (page: number) => {
    getPaymentSupplierListService({
      ...filters,
      Page: page,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
    dispatch(paymentSupplierAction?.setMCFW1370Filters({ ...filters, Page: page }));
  };

  const handleSelectSupplier = (item: SupplierType) => {
    setSelectedSupplier(item);
    getPaymentListService({
      Supp_Num: item?.supp_Num,
      Inv_Confirm: false, //hardcoded for now - 29/02/2025
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
    dispatch(paymentSupplierAction.setAddedInvoiceData({} as AddedInvoiceDataType));
    dispatch(paymentSupplierAction.clearRecentInvoicesAddedList());
  };
  const handleApiSorting = (columnId: string, direction: SortDirection) => {
    const updatedFilters = {
      ...filters,
      SortColumn: columnId,
      SortType: direction
    };
    getPaymentSupplierListService({
      ...updatedFilters,
      Page: filters?.Page,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
    setFilters(updatedFilters);
  };
  const handleGoToPaymentSupplier = (supplierData: SupplierType, validationCheck = false) => {
    if (!isFutureDate(supplierData?.tax_Date as string | Date)) {
      toggleFlags('showValidationError', true);
      toggleFlags('errorData', {
        message: t('PREVIOUS_DATE_ERROR_MESSAGE'),
        dialogTitle: t('PREVIOUS_DATE_ERROR_TITLE'),
        confirmText: t2('V_YES'),
        cancelText: t('PREVIOUS_DATE_ERROR_CANCEL_TITLE'),
        confirmCallback: () => {
          setIsOpenExtendSupplierValidityCheck(true);
          setIsOpenExtendSupplierValidity(true);
        }
      });
      return;
    }
    if (validationCheck) {
      return true;
    }
    handleSelectSupplier(supplierData);
    navigate(`/payment-supplier-outcome/${supplierData?.supp_Num}`);
  };
  const handleChangeFilters = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForceLeave(false);
    const { id, value, checked, type } = event.target;

    const newFilterValue = type === 'checkbox' ? checked : value;

    const baseFilters = filters;
    const updatedFilters = {
      ...baseFilters,
      Page: 1,
      [id]: newFilterValue,
      ...(id === 'Supp_Name' ? { Supp_Num: '' } : {})
    };

    dispatch(paymentSupplierAction.setMCFW1370Filters({ ...filters, Page: 1 }));
    setFilters(updatedFilters);
    dispatch(paymentSupplierAction.setCurrentPaymentList([]));
  };
  const handleClearFilter = () => {
    setForceLeave(false);
    setFilters(defaultPaymentSupplierListFilterValues);
    dispatch(paymentSupplierAction.setCurrentPaymentList([]));
  };

  useEffect(() => {
    const matchedElement = paymentSupplierResponse?.data?.find(
      (elem: SupplierType) => elem?.supp_Num === filters.Supp_Num?.toString().replace(/^0+/, '')
    );
    if (matchedElement) {
      setFilters({
        ...filters,
        Supp_Name: matchedElement.supp_Name.trim(),
        Supp_Num: matchedElement.supp_Num
      });
    }
  }, [supplierData]);

  const handleClickOnNewExpenseVouchers = () => {
    navigate(AppRoutes.LIST_OF_NEW_EXPENSE_VOUCHERS, {
      state: { supp_Num: selectedSupplier?.supp_Num }
    });
    toggleFlags('SuppNum', selectedSupplier?.supp_Num);
  };
  const handleClick = () => {
    selectedSupplier && onSelectSupplierForPayment && onSelectSupplierForPayment(selectedSupplier);
  };
  const handleClinkEnterInvoices = () => {
    if (selectedSupplier && handleGoToPaymentSupplier(selectedSupplier, true)) {
      navigate(`/add-invoices/${selectedSupplier?.supp_Num}`, {
        state: { showProceedToPaymentModal: true }
      });
    }
  };
  const expenseVoucherActionsItems = [
    { label: t('privateChangeQExpenditure'), action: handleClickOnNewExpenseVouchers },
    { label: t('cancellationHOpenness'), disabled: true },
    {
      label: t('privateChangeQExpenditure2'),
      action: () =>
        navigate(AppRoutes.LIST_OF_INVOICES, {
          state: {
            isTypePayment: true,
            filters: {
              SuppNum: selectedSupplier?.supp_Num
            },
            shouldCheckAccountYear: true
          }
        })
    },
    { label: t('cancellationQExpenditure'), action: () => setIsCancelationModalOpen(true) }
  ];
  const paymentvouchersActionItems = [
    {
      label: t('privateChangeQPayment'),
      disabled: !selectedSupplier?.supp_Num,
      action: () => {
        toggleFlags('SuppNum', selectedSupplier?.supp_Num);
        navigate(AppRoutes.LIST_OF_EXPENSE_VOUCHERS, {
          state: {
            shouldCheckAccountYear: true
          }
        });
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
  const handleGoToSupplier = (actNo: string) => {
    getPrintInvoiceDetailsService({
      ActNo: actNo,
      SystemYear: user?.instiYear,
      InstitutionCode: user?.instiCode
    });
  };
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
          onClick={() => setIsOpenExtendSupplierValidity(true)}
          renderIcon={<PiHandbagBold />}
        />
        <Button
          variant="outline"
          renderIcon={<RiArrowUpDownFill />}
          size="md"
          title={t('privateChangeQExpenditure2')}
          onClick={() =>
            navigate(AppRoutes.LIST_OF_INVOICES, {
              state: {
                isTypePayment: true,
                filters: {
                  SuppNum: selectedSupplier?.supp_Num
                }
              }
            })
          }
        />
        <Button
          variant="outline"
          size="md"
          title={t('cancellationQExpenditure')}
          onClick={() => setIsCancelationModalOpen(true)}
          renderIcon={<IoMdCheckboxOutline />}
        />
        <Button
          variant="outline"
          size="md"
          title={t('extentionOfInvoiceReporting2')}
          renderIcon={<RiLogoutBoxLine />}
          onClick={() => navigate(AppRoutes.OPEN_A_SUPPLIER)}
        />
      </div>
    );
  };
  const renderActionItems = () => {
    return (
      <div className={classes.actionButtonContainers}>
        <PrintButton
          onClick={() =>
            navigate(AppRoutes.PRINT_PREVIEW_SUPPLIER, {
              state: {
                filters,
                data: paymentSupplierResponse?.data || []
              }
            })
          }
        />
        <SaveButton
          disableEnter={isOpenExtendSupplierValidity || isCancelationModalOpen}
          onClick={handleClick}
        />
        <DetailButton onClick={dowloadHelpDocument} />
        <BackToPageButton
          onClick={() => {
            if (triggerPopup()) {
              setForceLeave(true);
              navigate(AppRoutes.REPORTING_INVOICES);
              handleClearFilter();
            }
          }}
        />
      </div>
    );
  };
  const handleCloseExtendSupplierValidity = (isUpdate?: boolean) => {
    setIsOpenExtendSupplierValidity(false);
    setIsOpenExtendSupplierValidityCheck(false);

    if (isUpdate) {
      getPaymentSupplierListService({
        ...filters,
        Page: filters?.Page,
        SystemYear: user?.instiYear,
        Institution: user?.instiCode
      });
    }
  };
  const onSelectInvoiceForCancel = async (values: { actNo: string | number }) => {
    const response = await validateCancelExpenseVoucherService({
      Acc_No: values.actNo,
      SystemYear: user?.instiYear,
      InstitutionCode: user?.instiCode
    });
    if (response?.data?.data?.canProceed && response?.data?.data?.error_Message === null) {
      navigate(`/cancel-expense-voucher/${values.actNo}`, {
        state: { invoices: values, isTypePayment: true }
      });
    } else if (response?.data?.data?.error_Message) {
      toggleFlags({
        showValidationError: true,
        errorData: {
          message: response?.data?.data?.error_Message,
          dialogTitle: t3('errorTitle'),
          confirmText: t3('confirmText'),
          confirmCallback: () => {}
        }
      });
      setIsCancelationModalOpen(false);
    }
  };

  // useEffect(() => {
  //   const handleBackButton = () => {
  //     handleClearFilter();
  //   };

  //   window.addEventListener('popstate', handleBackButton);

  //   return () => {
  //     window.removeEventListener('popstate', handleBackButton);
  //   };
  // }, [handleClearFilter]);

  return (
    <>
      <GlobalLoader
        showOnFullScreen
        loading={getPaymentSupplierLoading || getPaymentListLoading || getParamDetailsByNameLoading}
      />
      <ExtendSupplierValidity
        isOpen={isOpenExtendSupplierValidity}
        isOpenExtendSupplierValidityCheck={isOpenExtendSupplierValidityCheck}
        suppliersData={selectedSupplier}
        onClose={handleCloseExtendSupplierValidity}
      />
      <SelectCancelVoucher
        selectedInvoice={selectedSupplier}
        isOpen={isCancelationModalOpen}
        onSave={onSelectInvoiceForCancel}
        onClose={() => setIsCancelationModalOpen(false)}
      />
      <PaymentSuppliersUI
        data={supplierData}
        handlePagination={handlePagination}
        pagination={paymentSupplierResponse?.metaInfo}
        handleShow={() =>
          getPaymentSupplierListService({
            ...filters,
            Page: filters?.Page,
            SystemYear: user?.instiYear,
            Institution: user?.instiCode
          })
        }
        selectedSuppliers={selectedSupplier}
        handleSelectSupplier={handleSelectSupplier}
        renderActionItems={renderActionItems}
        filters={filters}
        handleClearFilters={handleClearFilter}
        handleChangeFilters={handleChangeFilters}
        headerTitle={headerTitle}
        paramTypeData={getParamDetailsByNameResponse?.data}
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
