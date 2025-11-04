//MCFW-1211
import SupplierApprovalUI from './SupplierApproval.render';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classes from './SupplierApproval.module.scss';
import {
  BackToPageButton,
  DetailButton,
  SaveButton,
  PrintExcel,
  Button,
  CancelButton
} from '@/components/commonButtons';
import { GlobalLoader } from '@/components';
import { useApiQuery } from '@/hooks';
import { adminServices } from '@/services';
import React, { useEffect } from 'react';
import { ServiceFn, SortConfig } from '../type';
import { GetCaseDataResponseInterface, GetSupplierApprovalDataResponseInterface } from './types';
import { Select } from '@/ui/Select';

const SupplierApproval = () => {
  const navigate = useNavigate();
  const [supplierType, setSupplierType] = React.useState<number>(1);

  const handleSave = () => {
    // Your save logic...
  };
  const {
    state: { data: getSuppTypeDropdownListResponse, loading: getSuppTypeDropdownListLoading },
    callService: getSuppTypeDropdownListService
  }: GetCaseDataResponseInterface = useApiQuery(adminServices.mapping.GetSuppTypeDropdownList);
  const {
    state: { data: getSupplierApprovalDataResponse, loading: getSupplierApprovalDataLoading },
    callService: getSupplierApprovalDataService
  }: GetSupplierApprovalDataResponseInterface = useApiQuery(
    adminServices.suppliers.getSupplierApprovalData as ServiceFn
  );

  useEffect(() => {
    getSuppTypeDropdownListService();
    getSupplierApprovalDataService({
      Supp_Status: '',
      Page: 1
    });
  }, []);
  const renderActionItems = () => {
    const { t } = useTranslation('common');
    return (
      <div className={classes.actionContainer}>
        <BackToPageButton onClick={() => navigate(-1)} />
        <DetailButton />
        <SaveButton onClick={handleSave} />
        <CancelButton />
        <PrintExcel />
        <Button title={t('L_MCFW_0597_BUTTON_TITLE_1')} />
      </div>
    );
  };
  const mappedSuppTypeOptions = getSuppTypeDropdownListResponse
    ? getSuppTypeDropdownListResponse.data.map(item => ({
        label: item.caseValue,
        value: item.caseId
      }))
    : [];
  const customRowRender = (key: string, row: any, ) => {
    switch (key) {
      case 'Insti':
      case 'Insti_Fullname':
      case 'Supp_Num':
      case 'Supp_Name':
      case 'Status':
      case 'Tax_Deduct':
      case 'Tax_Date':
        return (
          <div className={classes.tableCell}>
            <Input value={row[key]} />
          </div>
        );
      case 'Books_aproved':
      case 'Status_Yes':
      case 'Status_No':
      case 'Status_Done':
        return (
          <div className={classes.tableCell}>
            <Input type="checkbox" checked={row[key]} value={row[key]} />
          </div>
        );
      case 'SUPP_TYPE':
        return (
          <div className={classes.tableCell}>
            <Select options={mappedSuppTypeOptions} />
          </div>
        );
      default:
        return (
          <div className={classes.tableCell}>
            <Input size="fullWidth" value={row[key]} />
          </div>
        );
    }
  };
  const handleChangeSupplierType = (value: string) => {
    setSupplierType(Number(value));
  };
  const handleSearch = () => {
    getSupplierApprovalDataService({
      Supp_Status: supplierType,
      Page: 1,
      Size: 10
    });
  };
  const handlePagination = (page: number) => {
    getSupplierApprovalDataService({
      Supp_Status: supplierType,
      Page: page,
      Size: 10
    });
  };
  const handleSorting = (column: string, sortType: SortConfig) => {
    getSupplierApprovalDataService({
      Supp_Status: supplierType,
      Page: 1,
      Size: 10,
      SortColumn: column,
      SortType: sortType
    });
  };

  return (
    <>
      <GlobalLoader
        showOnFullScreen
        loading={getSuppTypeDropdownListLoading || getSupplierApprovalDataLoading}
      />
      <SupplierApprovalUI
        renderActionItems={renderActionItems}
        customRowRender={customRowRender}
        selectedSupplierType={supplierType}
        handleChangeSupplierType={handleChangeSupplierType}
        handleSearch={handleSearch}
        handlePagination={handlePagination}
        pagination={getSupplierApprovalDataResponse?.metaInfo}
        handleSorting={handleSorting}
      />
    </>
  );
};

export default SupplierApproval;
