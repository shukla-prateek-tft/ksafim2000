//MCFW-1356
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExtendedSupplierValidityColumns } from '../Column';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { toast } from 'react-toastify';
import { defaultPaymentSupplierListFilterValues } from '../../PaymentSuppliersList.controller';
import { convertTimeZone } from '@/utils/dateHelper';
import { getFormatedDate, getInputPattern, isFutureDateAllowYesterday } from '@/utils/commonHelper';
import classes from '../extendedSupplierValidity/ExtentedSupplierValidity.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { GlobalLoader } from '@/components';
import { Table } from '@/ui/Table';
import { CustomRowRenderType, ServiceFn, TableColumnType } from '@/pages/type';
import { Input } from '@/ui/Input';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { BottomToolBar } from '@/ui/BottomToolBar';
import {
  AddButton,
  BackToPageButton,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SaveButton
} from '@/components/commonButtons';
import { SupplierSelection } from '@/pages/suppliers/supplierSelection';
import {
  Supplier,
  SupplierResponse,
  SupplierSelectionState,
  UpdatePaymentSupplierValidityResponse
} from './type';
import { SupplierType } from '@/store/slices/PaymentSupplier/types';
import { usePreventReload } from '@/hooks/usePreventReload';

interface ExtendSupplierValidityProps {
  onClose: (update?: boolean) => void;
  isOpen: boolean;
  suppliersData: SupplierType | null;
  isOpenExtendSupplierValidityCheck?: boolean;
}

export const ExtendSupplierValidity: React.FC<ExtendSupplierValidityProps> = ({
  onClose,
  isOpen,
  suppliersData = {},
  isOpenExtendSupplierValidityCheck = false
}) => {
  const { t } = useTranslation('paymentSuppliersList');
  const { t: t2 } = useTranslation('common');
  const { t: t3 } = useTranslation('addInvoice');
  const [suppliersList, setSuppliersList] = useState<Supplier[]>([]);
  const { user, toggleFlags } = useAuth();
  const [forceLeave, setForceLeave] = useState(false);
  const [defaultData, setDefaultData] = useState<Supplier[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const updatedListData = [{ ...suppliersData } as Supplier];
    setSuppliersList(updatedListData);
    setDefaultData(updatedListData);
  }, [suppliersData]);

  // for getting supplier name when user input supplier number
  const { callService: getPaymentSupplierListService } = useApiQuery<SupplierResponse>(
    adminServices.suppliers.getPaymentSuppilerList as ServiceFn
  );
  //update-Paymnent-Suppliers-validity
  const {
    state: {
      loading: updatePaymentSupplierValidityLoading,
      data: updatePaymentSupplierValidityResponse,
      isSuccess: isUpdatePaymentSupplierValiditySuccess,
      isError: isUpdatePaymentSupplierValidityError,
      error: updatePaymentSupplierValidityError
    },
    callService: updatePaymentSupplierValidityService,
    resetServiceState: resetUpdatePaymentSupplierValidityState
  } = useApiQuery<UpdatePaymentSupplierValidityResponse>(
    adminServices.suppliers.updatePaymentSupplierValidity
  );

  useEffect(() => {
    if (updatePaymentSupplierValidityResponse && isUpdatePaymentSupplierValiditySuccess) {
      toast.success(updatePaymentSupplierValidityResponse?.message);
      setShowSupplierSelection({ flag: false, index: null });
      setForceLeave(true);
      setTimeout(() => {
        if (isOpenExtendSupplierValidityCheck) {
          handleGoToPaymentSupplier();
        } else {
          onClose(true);
        }
      }, 0);
    }
    if (updatePaymentSupplierValidityError && isUpdatePaymentSupplierValidityError) {
      toast.error(updatePaymentSupplierValidityError?.message, {
        autoClose: 1500
      });
      resetUpdatePaymentSupplierValidityState();
    }
  }, [
    updatePaymentSupplierValidityResponse,
    updatePaymentSupplierValidityError,
    isUpdatePaymentSupplierValidityError,
    isUpdatePaymentSupplierValiditySuccess
  ]);

  const [showSupplierSelection, setShowSupplierSelection] = useState<SupplierSelectionState>({
    flag: false,
    index: null
  });
  const addNewSupplier = () => {
    setSuppliersList(prevList => [
      ...prevList,
      {
        acc_Card: '',
        bank: '',
        bank_Account: '',
        bank_Name: '',
        email_1: '',
        hsb_Open: 0,
        phone_Num1: '',
        phone_Prefix1: '',
        supp_Name: '',
        supp_Num: '',
        tax_Date: '',
        tax_Date_New: '',
        tax_Deduct: 0,
        total: 0
      }
    ]);
  };

  const removeLastSupplier = () => {
    setSuppliersList(prevList => prevList.slice(0, -1));
  };

  const handleShowSelectSupplier = (row: { index: number }) => {
    setShowSupplierSelection({ flag: true, index: row.index });
  };

  const handleSelectSupplierForPayment = (data: Supplier) => {
    if (showSupplierSelection.index !== null) {
      setSuppliersList(prevList =>
        prevList?.map((supplier, idx) => (idx === showSupplierSelection.index ? data : supplier))
      );
    }
    setShowSupplierSelection({ flag: false, index: null });
  };

  const handleChangeTaxDate = (index: number, date: string) => {
    setSuppliersList(prevSuppliersList =>
      prevSuppliersList?.map((supplier, i) =>
        i === index ? { ...supplier, tax_Date_New: date } : supplier
      )
    );
  };

  const handleChangeSupplier = async (index: number, supplier: string) => {
    let supplierName = '';
    let tax_Date = '';
    if (supplier?.length >= 4) {
      const response = await getPaymentSupplierListService({
        ...defaultPaymentSupplierListFilterValues,
        Supp_Num: supplier,
        SystemYear: user?.instiYear,
        Institution: user?.instiCode
      });
      if (response?.data?.data?.length === 0) {
        toggleFlags({
          showValidationError: true,
          errorData: {
            message: t2('L_NO_SUPP'),
            dialogTitle: t3('errorTitle'),
            confirmText: t3('confirmText'),
            confirmCallback: () => {}
          }
        });
        return;
      }
      supplierName = response?.data?.data?.[0]?.supp_Name || '';
      tax_Date = response?.data?.data?.[0]?.tax_Date || '';
    }

    setSuppliersList(prevSuppliersList =>
      prevSuppliersList?.map((oldSupplier, i) =>
        i === index
          ? {
              ...oldSupplier,
              supp_Num: supplier,
              supp_Name: supplierName,
              tax_Date
            }
          : oldSupplier
      )
    );
  };

  const handleGoToPaymentSupplier = () => {
    const supplier = { ...suppliersList[0] };
    const updatedDateSupplier = String(
      convertTimeZone(
        updatePaymentSupplierValidityResponse?.data?.listOfSupplier?.[0]?.tax_date ?? '',
        true
      ) || ''
    );
    if (!isFutureDateAllowYesterday(updatedDateSupplier)) {
      toggleFlags('showValidationError', true);
      toggleFlags('errorData', {
        message: t('PREVIOUS_DATE_ERROR_WITHOUT_YES_NO'),
        dialogTitle: t('PREVIOUS_DATE_ERROR_TITLE'),
        confirmText: t('PREVIOUS_DATE_ERROR_CANCEL_TITLE')
      });
      return;
    }

    navigate(`/payment-supplier-outcome/${supplier?.supp_Num}`);
  };
  const handleSaveSupplierValidity = () => {
    const hasMissingFields = suppliersList?.some(
      ({ supp_Num, tax_Date_New }) => !supp_Num || !tax_Date_New
    );
    const form_number = suppliersList?.length === 0 ? 'MC1250' : 'MC1356';
    const datim = getFormatedDate(new Date(), 'hh:mm:ss DD.mm.YY');

    if (hasMissingFields || suppliersList?.length === 0) {
      toggleFlags({
        showValidationError: true,
        errorData: {
          dialogTitle: t('PREVIOUS_DATE_ERROR_TITLE'),
          message: t2('E_018', { form_number, datim }),
          confirmText: t2('V_ACCEPT')
        }
      });
      return;
    }

    const updatedDateSupplier = String(
      convertTimeZone(suppliersList[0].tax_Date_New ?? '', true) || ''
    );
    if (!isFutureDateAllowYesterday(updatedDateSupplier)) {
      toggleFlags('showValidationError', true);
      toggleFlags('errorData', {
        message: t('PREVIOUS_DATE_ERROR_WITHOUT_YES_NO'),
        dialogTitle: t('PREVIOUS_DATE_ERROR_TITLE'),
        confirmText: t('PREVIOUS_DATE_ERROR_CANCEL_TITLE')
      });
      return;
    }

    const suppliers = [...suppliersList];
    const payload = suppliers.map((elem: Supplier) => {
      const date = convertTimeZone(elem?.tax_Date_New || '', true);

      return {
        supp_num: elem?.supp_Num,
        tax_date: date
      };
    });
    updatePaymentSupplierValidityService(payload);
  };

  const customRowRenderer: CustomRowRenderType<Supplier> = (key, row, index) => {
    switch (key) {
      case 'supp_Num': {
        const { supp_Num } = row || {};
        const formattedSuppNum = supp_Num ? supp_Num.toString().padStart(9, '0') : null;
        return (
          <div onDoubleClick={() => handleShowSelectSupplier({ index: index || 0 })}>
            <Input
              id="supp_Num"
              value={row?.['supp_Num'] ? row['supp_Num'].trim() : formattedSuppNum?.trim()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeSupplier(index || 0, e.target.value)
              }
              type="number"
              pattern={getInputPattern(10)}
              size="fullWidth"
            />
          </div>
        );
      }

      case 'supp_Name':
        return (
          <Input
            id="supp_Name"
            type="text"
            value={row?.['supp_Name'] || ''}
            disabled
            variant="borderless"
            size="fullWidth"
          />
        );
      case 'tax_Date':
        return (
          <Input
            id="tax_Date"
            value={row?.tax_Date ? getFormatedDate(row?.tax_Date) : ''}
            disabled
            size="fullWidth"
            variant="borderless"
          />
        );
      case 'tax_Date_New':
        return (
          <DatePickerComponent
            selectedDate={suppliersList[index || 0]?.tax_Date_New || ''}
            onChange={date => handleChangeTaxDate(index || 0, date)}
            size="fullWidth"
            placeholder={t(' ')}
          />
        );
    }
  };
  const handleClose = () => {
    hasPendingChanges ? triggerPopup() : onClose(false);
  };
  const { hasPendingChanges, triggerPopup } = usePreventReload(
    forceLeave,
    [defaultData],
    [suppliersList],
    undefined,
    () => onClose(false)
  );

  return (
    <>
      <SupplierSelection
        isOpen={showSupplierSelection.flag}
        onClose={() => setShowSupplierSelection({ flag: false, index: null })}
        onSelectSupplierForPayment={handleSelectSupplierForPayment}
      />
      <GlobalLoader loading={updatePaymentSupplierValidityLoading} />
      <DialogBox isOpen={isOpen} onClose={handleClose} title={'MCFW1356'}>
        <div className={classes.mainContainer}>
          <fieldset className={classes.container}>
            <legend>{t('extendSupplierTitle')}</legend>
            <Table
              data={suppliersList || []}
              columns={ExtendedSupplierValidityColumns() as TableColumnType<Supplier>[]}
              customRowRenderer={customRowRenderer}
              height="45vh"
            />
          </fieldset>
          <BottomToolBar
            showPagination={false}
            renderActionItems={() => (
              <div className={classes.actionItems}>
                <BackToPageButton onClick={handleClose} />
                <DetailButton />
                <OtherDetailButton />
                <SaveButton
                  onClick={() => {
                    handleSaveSupplierValidity();
                  }}
                  disableEnter={showSupplierSelection.flag}
                />
                {isOpenExtendSupplierValidityCheck || (
                  <>
                    <AddButton onClick={addNewSupplier} />
                    <CancelButton onClick={removeLastSupplier} />
                  </>
                )}
              </div>
            )}
          />
        </div>
      </DialogBox>
    </>
  );
};
