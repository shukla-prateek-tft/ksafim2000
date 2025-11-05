
// MCFL-0008
import { useApiQuery, useAuth } from '@/hooks';
import { DialogBox } from '@/ui/DialogBox';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SupplierSelectionUI from './SupplierSelection.render';
import { adminServices } from '@/services';
import { getPaymentSuppilerListParamsType } from '@/services/supplier/types';
import { GlobalLoader } from '@/components';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './SupplierSelection.module.scss';
import { ServiceFn } from '@/pages/type';
import { PaymentSupplierResponse, SupplierData, SupplierSelectionProps } from './type';



const defaultPaymentSupplierListFilterValues: getPaymentSuppilerListParamsType = {
  Supp_Num: '',
  Size: 15,
  Supp_Name: '',
  Supp_Vat_Num: '',
  Supp_Num_Dealer: '',
  If_Hsb_Open: false,
  Inv_Confirm: false,
  SortColumn: '',
  SortType: 'Asc',
  SystemYear: '',
  Institution: '',
  Page: 1
};

const SupplierSelection: React.FC<SupplierSelectionProps> = ({
  isOpen,
  onClose,
  onSelectSupplierForPayment,headerTitle
}) => {
  const { t } = useTranslation('paymentSuppliersList');
  const [selectedSupplier, setSelectedSupplier] = useState<SupplierData | null>(null);
  const [selectionFilters, setSelectionFilters] =
    useState<getPaymentSuppilerListParamsType>(defaultPaymentSupplierListFilterValues);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { user } = useAuth();

  const {
    state: { loading: getPaymentSupplierLoading, data: paymentSupplierResponse },
    callService: getPaymentSupplierListService
  }: {
    state: { loading: boolean; data: PaymentSupplierResponse | null };
    callService: (params: getPaymentSuppilerListParamsType) => void;
  } = useApiQuery(adminServices.suppliers.getPaymentSuppilerList as ServiceFn);

  useEffect(() => {
    if (paymentSupplierResponse?.data?.length) {
      setSelectedSupplier(paymentSupplierResponse.data[0]);
    }
  }, [paymentSupplierResponse]);

  const handleChangeFilters = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked, type } = event.target;
    const newFilterValue = type === 'checkbox' ? checked : value;
    const updatedFilters = {
      ...selectionFilters,
      Page: 1,
      [id]: newFilterValue,
      ...(id === 'Supp_Name' ? { Supp_Num: '' } : {})
    };
    setSelectionFilters(updatedFilters);
  };

  const handleApiSorting = (columnId: string) => {
    const isSameColumn = selectionFilters.SortColumn === columnId;
    const updatedFilters = {
      ...selectionFilters,
      SortColumn: columnId,
      SortType: isSameColumn && selectionFilters.SortType === 'Asc' ? 'Desc' : 'Asc'
    };
    getPaymentSupplierListService({
      ...updatedFilters,
      Page: currentPage,
      SystemYear: user?.instiYear ?? '',
      Institution: user?.instiCode ?? ''
    });
    setSelectionFilters(updatedFilters);
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    getPaymentSupplierListService({
      ...selectionFilters,
      Page: page,
      SystemYear: user?.instiYear ?? '',
      Institution: user?.instiCode ?? ''
    });
  };

  const handleShow = () => {
    getPaymentSupplierListService({
      ...selectionFilters,
      Page: currentPage,
      SystemYear: user?.instiYear ?? '',
      Institution: user?.instiCode ?? ''
    });
  };

  const handleSelectSupplier = (supplierData: SupplierData) => {
    setSelectedSupplier(supplierData);
  };

  const onSave = () => {
    onSelectSupplierForPayment(selectedSupplier);
  };

  const renderActionItems = () => (
    <div className={classes.actionItems}>
      <BackToPageButton onClick={onClose} />
      <SaveButton onClick={onSave} />
    </div>
  );

  return (
    <>
      <GlobalLoader loading={getPaymentSupplierLoading} />
      <DialogBox  important
        title={headerTitle||`0008 - ${t('supplierLocator')}* ${user?.instiCode} - ${user?.instiName}*${user?.hebrewYear} ${user?.instiYear}`}
        isOpen={isOpen}
        onClose={onClose}
      >
        <SupplierSelectionUI
          handlePagination={handlePagination}
          handleSorting={handleApiSorting}
          handleChangeFilters={handleChangeFilters}
          data={paymentSupplierResponse}
          handleShow={handleShow}
          selectedSupplier={selectedSupplier}
          filters={selectionFilters}
          handleSelectRow={handleSelectSupplier}
          renderActionItems={renderActionItems}
          onSave={onSave}
        />
      </DialogBox>
    </>
  );
};

export default SupplierSelection;
