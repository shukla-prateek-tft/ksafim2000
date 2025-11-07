import ConfigChangeDailogBox from '@/components/configChangeDialog/ConfigChangeDailogBox';
import { ConfirmationDialogueBox } from '@/components/confirmModal';
import { useAuth } from '@/hooks';
import { AppRoutes } from '@/Languages';
import { GoToScreen } from '@/pages/systemManagement';
import {
  getListOfInvoicesParamsType,
  getListOfInvoicesReportsParamsType
} from '@/services/Invoices/types';
import {
  defaultExpenseVouchersFiltersValues,
  defaultListOfInvoicesFilterValues,
  defaultReportFilterValues
} from '@/store/contexts/AuthContext';
import { DialogBox } from '@/ui/DialogBox';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuestionCircle } from 'react-icons/fa';
import { TiWarning } from 'react-icons/ti';
import { useLocation, useNavigate } from 'react-router-dom';

export const RenderGlobalComponents: React.FC = React.memo(() => {
  const { t } = useTranslation('reportingInvoices');
  const { flags, toggleFlags, user } = useAuth();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<getListOfInvoicesParamsType>({
    ...defaultListOfInvoicesFilterValues,
    SystemYear: user?.instiYear || '',
    Institution: user?.instiCode || ''
  });
  const [reportListFilters, setReportListFilters] = useState<getListOfInvoicesReportsParamsType>({
    ...defaultReportFilterValues,
    SystemYear: user?.instiYear || '',
    Institution: user?.instiCode || ''
  });
  const [expenseVoucherFilters, setExpenseVouchersFilters] = useState<any>({
    ...defaultExpenseVouchersFiltersValues,
    SuppNum: flags?.SuppNum,
    SystemYear: user?.instiYear || '',
    Institution: user?.instiCode || ''
  });
  const closeErrorDialog = useCallback(
    (isConfirm: boolean) => {
      const { closeCallback, confirmCallback } = flags?.errorData || {};
      isConfirm ? confirmCallback?.() : closeCallback?.();
      toggleFlags({
        showValidationError: false,
        errorData: {
          message: '',
          dialogTitle: '',
          cancelText: '',
          confirmText: '',
          closeCallback: () => {},
          confirmCallback: () => {}
        }
      });
    },
    [flags, toggleFlags]
  );
  const location = useLocation();
  const canNavigate =
    location.pathname !== '/list-of-invoices' ||
    location.pathname !== '/print-preview-invoice-report';

  const handleUpdateFilters = (
    formState: Record<string, any>,
    budgetTypeOptions: any,
    invoiceStatusOptions: any
  ) => {
    if (!formState) return;

    const updatedFilters = {
      ...(flags?.showReportFilter
        ? flags?.showExpenseVoucherFilters
          ? expenseVoucherFilters
          : reportListFilters
        : filters),
      ...formState
    };
    if (flags?.showExpenseVoucherFilters && formState?.SuppNum === '') {
      toggleFlags('SuppNum', null);
    }
    toggleFlags(
      flags?.showReportFilter
        ? 'reportListFilters'
        : flags?.showExpenseVoucherFilters
          ? 'expenseVoucherFilters'
          : 'listOfInvoicesFilter',
      updatedFilters
    );

    if (flags?.showReportFilter) {
      setReportListFilters(updatedFilters);
      if (canNavigate) {
        navigate(AppRoutes.PRINT_PREVIEW_INVOICE_REPORT, {
          state: { filters: updatedFilters }
        });
      } else {
        navigate(AppRoutes.PRINT_PREVIEW_INVOICE_REPORT, {
          state: { refresh: Date.now(), filters: updatedFilters }
        });
      }
      handleCloseReportFilter();
      return;
    }
    if (flags?.showExpenseVoucherFilters) {
      toggleFlags('expenseVoucherFilters', updatedFilters);
      handleCloseExpenseVouchersFilter();
    } else {
      setFilters(updatedFilters);
      if (canNavigate) {
        navigate(AppRoutes.LIST_OF_INVOICES, {
          state: {
            filters: updatedFilters,
            budgetTypeOptions,
            invoiceStatusOptions
          }
        });
      } else {
        navigate(AppRoutes.LIST_OF_INVOICES, {
          state: {
            filters: updatedFilters,
            budgetTypeOptions,
            invoiceStatusOptions,
            refresh: Date.now()
          }
        });
      }

      handleCloseInvoiceFilter();
    }
  };
  const handleCloseInvoiceFilter = () => {
    setFilters(defaultListOfInvoicesFilterValues);
    toggleFlags('listOfInvoicesFilter', defaultListOfInvoicesFilterValues);
    toggleFlags('showListOfInvoiceFilter', false);
  };
  const handleCloseReportFilter = () => {
    setReportListFilters(defaultReportFilterValues);
    toggleFlags('reportListFilters', defaultReportFilterValues);
    toggleFlags('showReportFilter', false);
  };
  const handleCloseExpenseVouchersFilter = () => {
    setExpenseVouchersFilters(defaultExpenseVouchersFiltersValues);
    // toggleFlags('expenseVoucherFilters', defaultExpenseVouchersFiltersValues);
    toggleFlags('showExpenseVoucherFilters', false);
  };
  return (
    <>
      <ConfigChangeDailogBox
        isOpen={flags.configChangeHeader}
        isKalendarYear={flags?.isKalendarYear}
        onClose={() => toggleFlags('configChangeHeader', false)}
      />
      <DialogBox
        title={`${t('titleName')}*${user?.instiCode}-${user?.instiName}*${
          user?.hebrewYear
        } ${user?.instiYear}`}
        onClose={handleCloseInvoiceFilter}
        isOpen={flags?.showListOfInvoiceFilter}
      >
      
      </DialogBox>
      <DialogBox
        title={`${t('titleNameReport')}*${user?.instiCode}-${user?.instiName}*${
          user?.hebrewYear
        } ${user?.instiYear}`}
        onClose={handleCloseReportFilter}
        isOpen={flags?.showReportFilter}
      >
        
      </DialogBox>
      <GoToScreen isOpen={flags?.goToScreen} onClose={() => toggleFlags('goToScreen', false)} />
      <DialogBox
        title={`${t('titleName')}*${user?.instiCode}-${user?.instiName}*${
          user?.hebrewYear
        } ${user?.instiYear}`}
        onClose={handleCloseExpenseVouchersFilter}
        isOpen={flags?.showExpenseVoucherFilters}
      >
        
      </DialogBox>
        <ConfirmationDialogueBox
          dialogTitle={flags?.errorData?.dialogTitle}
          icon={
            typeof flags?.errorData?.icon === 'function' ? (
              flags.errorData.icon()
            ) : flags?.errorData?.type === 'error' ? (
              <TiWarning  size={15} />
            ) : (
              <FaQuestionCircle size={15} />
            )
          }
          show={flags?.showValidationError}
          title={flags?.errorData?.title}
          onCancel={() => closeErrorDialog(false)}
          message={flags?.errorData?.message}
          onConfirm={() => closeErrorDialog(true)}
          confirmText={flags?.errorData?.confirmText}
          cancelText={flags?.errorData?.cancelText}
          showCancelButton={flags?.errorData?.cancelText?.length > 0}
          type={flags?.errorData?.type || 'error'}
        />
    </>
  );
});
