// MCFW-0697
import React, { useState, useEffect, useMemo } from 'react';
import InvoiceDisplayUI from './InvoiceDisplay.render';
import { adminServices } from '@/services';
import { useApiQuery, useAuth } from '@/hooks';
import { GlobalLoader } from '@/components';
import { invoiceDisplaycolumns } from './components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { paymentSupplierAction } from '@/store/slices';
import { useTranslation } from 'react-i18next';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './InvoiceDisplay.module.scss';
import { Input } from '@/ui/Input';
import { CustomRowRenderType, ServiceFn } from '@/pages/type';
import { InvoiceRow, SupplierType } from './types';
import { usePreventReload } from '@/hooks/usePreventReload';

const InvoiceDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { recentInvoicesAddedList } = useSelector((state: any) => state.paymentSupplier);
  const navigate = useNavigate();
  const { user, toggleFlags } = useAuth();
  const [forceLeave, setForceLeave] = useState(false);
  const location = useLocation();
  const state = location.state;
  const [supplierData, setSupplierData] = useState<SupplierType>({
    supplierNo: '',
    supplierName: ''
  });
  const [isOpenSupplierList, setIsOpenSupplierList] = useState<boolean>(false);
  const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);
  const [listData, setListData] = useState<any>([]);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const { t } = useTranslation('paymentSupplierOutcome');
  //get the invoices api
  const {
    state: { loading: invoiceDisplayLoading, data: invoiceDisplayResponse },
    callService: getInvoiceDisplayService
  }: any = useApiQuery(adminServices.invoice.getInvoiceDisplay as ServiceFn);

  //set supplier details and invoice type on first render
  useEffect(() => {
    if (state?.supplierNo && state?.supplierName) {
      setSupplierData({
        supplierNo: state?.supplierNo,
        supplierName: state?.supplierName
      });
    }
  }, [state]);

  //fetch-invoices-when-supplier-change
  useEffect(() => {
    const { instiYear, instiCode } = user;
    const { supplierNo } = supplierData;
    if (supplierNo && instiYear && instiCode) {
      getInvoiceDisplayService({
        Supp_Num: supplierNo,
        SystemYear: instiYear,
        Institution: instiCode
      });
    }
    setSelectedPrice(0);
    setSelectedInvoices([]);
  }, [supplierData, user]);

  //updated invoice list when invoices fetched
  useEffect(() => {
    if (invoiceDisplayResponse?.data?.length > 0) {
      setListData([...invoiceDisplayResponse.data]);
    } else {
      setListData([]);
    }
  }, [invoiceDisplayResponse]);

  const handleSelectSupplier = (supplier: { supp_Name: string; supp_Num: string }) => {
    const { supp_Name, supp_Num } = supplier;
    setSupplierData(prev => ({
      supplierName: supp_Name ? supp_Name : prev.supplierName,
      supplierNo: supp_Num ? supp_Num : prev.supplierNo
    }));
    setIsOpenSupplierList(false);
  };

  const handleSelectInvoice = (index: number, outcome_Sum: number) => {
    if (selectedInvoices.includes(index)) {
      setSelectedPrice(selectedPrice - outcome_Sum);
      setSelectedInvoices(prev => {
        return prev.filter(selected => selected != index);
      });
    } else {
      setSelectedPrice(selectedPrice + outcome_Sum);
      setSelectedInvoices(prev => {
        return [...prev, index];
      });
    }
  };

  const totalPrice = useMemo(() => {
    return listData.reduce((acc: number, item: any) => {
      if (item?.outcome_Sum) {
        return acc + Number(item.outcome_Sum);
      }
      return acc;
    }, 0);
  }, [listData]);

  const handleSelectAll = () => {
    if (selectedInvoices.length === listData.length) {
      setSelectedInvoices([]);
      setSelectedPrice(0);
    } else {
      setSelectedInvoices(Array.from({ length: listData.length }, (_, i) => i));
      setSelectedPrice(totalPrice);
    }
  };
  const handleSave = () => {
    for (const index of selectedInvoices) {
      const { is_Confirm_Text } = listData[index];
      if (is_Confirm_Text != null && is_Confirm_Text === t('noConfirmText')) {
        toggleFlags('showValidationError', true);
        toggleFlags('errorData', {
          message: t('dialog_message'),
          dialogTitle: `${t('Confirm_Title')} ${user?.hebrewYear}`,
          confirmText: t('dialog_btn_title')
        });
        return;
      }
    }
    if (recentInvoicesAddedList.length != 0) {
      toggleFlags({
        showValidationError: true,
        errorData: {
          message: `${t('previouslySelectedInvoiceRemoved')}?`,
          dialogTitle: `${t('Confirm_Title')} ${user.hebrewYear}`,
          confirmText: t('yesText'),
          cancelText: t('cancelText'),
          type: 'success',
          confirmCallback: () => {
            handleConfirmation();
          }
        }
      });
    } else {
      handleConfirmation();
    }
  };
  const handleConfirmation = () => {
    const selectedInvoiceData = selectedInvoices.map((index: number) => {
      const { act_No, student, service_type_id, service_subject_id, acc_card_id } = listData[index];

      return {
        actNo: act_No,
        student: student,
        serviceType: service_type_id,
        serviceSubject: service_subject_id,
        accCard: acc_card_id
      };
    });
    setForceLeave(true);
    dispatch(paymentSupplierAction.setRecentInvoicesAddedList(selectedInvoiceData));
    setTimeout(() => {
      navigate(-1);
    }, 0);
  };
  usePreventReload(forceLeave, [[]], [selectedInvoices]);
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <SaveButton
          onClick={handleSave}
          disabled={!(selectedInvoices.length > 0)}
          disableEnter={isOpenSupplierList}
        />
        <BackToPageButton />
      </div>
    );
  };

  const customRowRender: CustomRowRenderType<InvoiceRow & { id: string }> = (
    key,
    row,
    index = 0
  ) => {
    switch (key) {
      case 'id':
        return (
          <Input
            type="checkbox"
            checked={selectedInvoices?.includes(index)}
            onChange={() => handleSelectInvoice(index, parseFloat(row?.outcome_Sum || '0'))}
          />
        );
      default:
        return undefined;
    }
  };
  return (
    <>
      <GlobalLoader showOnFullScreen loading={invoiceDisplayLoading} />
      <InvoiceDisplayUI
        data={listData}
        column={invoiceDisplaycolumns({
          onSelectAll: handleSelectAll,
          isSelectedAll: selectedInvoices.length === listData.length && listData?.length !== 0
        })}
        totalAmount={totalPrice}
        selectedAmount={selectedPrice}
        supplierData={supplierData}
        onSelectSupplier={handleSelectSupplier}
        renderActionItems={renderActionItems}
        customRowRender={customRowRender}
      />
    </>
  );
};

export default InvoiceDisplay;
