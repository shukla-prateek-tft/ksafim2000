//MCFW-0597

const supp_special = 1;

function gp_check_id1(p_id: number) {
  let v_sum = 0;
  const idStr = String(p_id);
  const v_length = idStr.length;
  const v_cn = Number(idStr[v_length - 1]);
  const v_num = idStr.slice(0, v_length - 1);
  let i = v_num.length - 1;
  while (i >= 0) {
    let x = Number(v_num[i]) * 2;
    if (x >= 10) {
      const xStr = String(x);
      x = Number(xStr[0]) + Number(xStr[1]);
    }
    v_sum += x;
    i--;
    if (i >= 0) {
      v_sum += Number(v_num[i]);
      i--;
    }
  }
  v_sum = v_sum % 10;
  v_sum = 10 - v_sum;
  if (v_sum === 10) v_sum = 0;
  return v_cn === v_sum ? 0 : -1;
}

function validateSupplier(supp_Num: number, supp_special: number) {
  const status = gp_check_id1(supp_Num);

  if (supp_special === 1) {
    if (status < 0) {
      console.info('Not a registered supplier.'); // message/info
      return 0;
    }
  } else {
    if (status < 0) {
      console.error('Not a registered supplier.'); // message/error
      // if (status === 1) {
      return -1;
      // }
    }
  }

  return status;
}

const dummyData = [
  {
    code1: 'C001',
    supp_Num: 'SUP1001',
    supp_Name: 'ABC Traders Pvt Ltd',
    supp_Type: 'Local',
    tax_Deduct: 'Yes',
    deduct_Type: 'TDS',
    tax_Date: '2025-01-15',
    books_Aproved: 'Yes',
    acc_Card: 'AC-998877',
    sort_Code: 'S01',
    supp_Dif: 'No',
    supp_To_File: 'Yes',
    supp_To_Order: 'No',
    supp_Num_Dealer: 'D-44',
    main_To_Mas: 'Yes',
    supp_Vat_Num: 'VAT-556677',
    code17: ''
  },
  {
    code1: 'C002',
    supp_Num: 'SUP1002',
    supp_Name: 'Global Supplies Ltd',
    supp_Type: 'Foreign',
    tax_Deduct: 'No',
    deduct_Type: '-',
    tax_Date: '2025-02-01',
    books_Aproved: 'No',
    acc_Card: 'AC-113344',
    sort_Code: 'S02',
    supp_Dif: 'Yes',
    supp_To_File: 'No',
    supp_To_Order: 'Yes',
    supp_Num_Dealer: 'D-78',
    main_To_Mas: 'No',
    supp_Vat_Num: 'VAT-112233',
    code17: ''
  }
];

const supplierTypeOption = [
  { label: 'Local', value: 1 },
  { label: 'Foreign', value: 2 }
];

const deductTypeOption = [
  { label: 'TDS', value: 1 },
  { label: 'CDS', value: 0 }
];

import { useTranslation } from 'react-i18next';
import classes from './ListOfSuppliers.module.scss';
import {
  BackToPageButton,
  CancelButton,
  PrintExcel,
  DetailButton,
  OtherDetailButton,
  SaveButton,
  SearchButton,
  AddButton,
  Button
} from '@/components/commonButtons';
import ListOfInvoicesUI from './ListOfSuppliers.render';
import { Input } from '@/ui/Input';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { showToastErrors } from '@/utils/commonHelper';
import { useEffect, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { AccCardValidationResponse, Supplier, supplierOptionsType } from './types';
import { REGEX } from '@/constants/appConstant';
import { Select } from '@/ui/Select';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { toast } from 'react-toastify';
import { ServiceFn } from '@/pages/type';

const ListOfSuppliers = () => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const [suppliersData, setSuppliersData] = useState<Supplier[]>(dummyData);
  const [supplierType, setSupplierType] = useState<number>(0);
  const [supplierTypeOptions, setSupplierTypeOptions] = useState<supplierOptionsType[]>([]);
  const [deductTypeOptions, setDeductTypeOptions] = useState<supplierOptionsType[]>([]);

  const [query, setQuery] = useState({
    Page: 1,
    Size: 10,
    SortColumn: '',
    SortType: ''
  });

  console.log(suppliersData, 'supplier data');
  // list of supplier API
  const {
    state: {
      loading: isListOfSuppliersLoading,
      data: listOfSuppliersResponse,
      isSuccess: isListofSuppliersSuccess,
      isError: isListofSuppliersError,
      error: listofsuppliersError
    },
    callService: getListOfSuppliersService
  }: any = useApiQuery(adminServices.suppliers.getListOfSuppliers0597 as ServiceFn);

  const { callService: SuppNumDealerValidationService } = useApiQuery<AccCardValidationResponse>(
    adminServices.suppliers.validationOnValueChangeSuppNumDealer as ServiceFn
  );

  const { callService: AccCardValidationService } = useApiQuery<AccCardValidationResponse>(
    adminServices.suppliers.validationOnValueChangeAccCard as ServiceFn
  );
  const updateRowData = (index: number, updatedData: Partial<Supplier>) => {
    setSuppliersData(prev => {
      const newData = [...prev];
      newData[index] = { ...newData[index], ...updatedData };
      return newData;
    });
    validateSupplier(suppliersData[index]?.supp_Num, supp_special);
  };

  const gp_man_field = () => {};

  const handleAccCardChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    rowData: any,
    index: number
  ) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value)) return;
    const numericValue = value === '' ? 0 : Number(value);
    updateRowData(index, { acc_Card: numericValue });
    if (value.length >= 5) {
      try {
        const response = await AccCardValidationService({
          Supp_Num: rowData.supp_Num_Dealer || rowData.supp_Num,
          Acc_Card: value,
          New_Row: false,
          Supp_Num_Dealer: rowData.supp_Num_Dealer
        });

        const payload = response?.data?.data;

        if (payload == null) {
          return;
        }

        if (typeof payload === 'string') {
          toast.error(payload);
        }
      } catch (error) {
        toast.error('Validation failed. Please try again.');
      }
    }
  };

  const handleSuppNumDealerChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    rowData: any,
    index: number
  ) => {
    const { value } = e.target;
    if (!/^-?\d*$/.test(value) || (value?.length > 1 && value === '-')) return;
    updateRowData(index, { supp_Num_Dealer: value });
    if (value?.length === 1 && value === '-') return; // do not call Validation API

    try {
      const response = await SuppNumDealerValidationService({
        Supp_Num: rowData.supp_Num,
        Acc_Card: rowData.acc_Card || 0,
        New_Row: false,
        Supp_Num_Dealer: value
      });

      const payload = response?.data?.data;

      if (payload == null) {
        return;
      }

      const { message, main_To_Mas } = payload;

      if (typeof main_To_Mas === 'boolean') {
        updateRowData(index, { main_To_Mas: main_To_Mas ? 1 : 0 });
      }

      if (message) {
        toast.error(message);
      }
    } catch (error) {
      toast.error('Validation failed. Please try again.');
    }
  };

  const renderOtherActionButtons = () => {
    return (
      <div className={classes.actionItems}>
        <Button title={t('L_MCFW_0597_BUTTON_TITLE_1')} />
        <Button title={t('L_MCFW_0597_BUTTON_TITLE_2')} />
        <Button title={'Update u_version'} />
      </div>
    );
  };
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton />
        <CancelButton />
        <SearchButton />
        <PrintExcel />
        <BackToPageButton />
      </div>
    );
  };
  const customRowRender = (key: string, row: any, index: number) => {
    const currentRowData = suppliersData[index] || row;
    switch (key) {
      case 'code1':
        return (
          <div className={classes['column-third']}>
            <Input
              size="fullWidth"
              type="checkbox"
              checked={row.supp_Special}
              onChange={() => {}}
              disabled
            />
            <Input
              size="fullWidth"
              type="checkbox"
              checked={row.supp_Off}
              onChange={() => {}}
              disabled
            />
          </div>
        );

      case 'supp_Num':
        return (
          <div className={classes['column-third']}>
            <Input
              size="fullWidth"
              maxLength={10}
              type="number"
              orientation="horizontal"
              value={currentRowData.supp_Num || ''}
              onChange={e => updateRowData(index, { supp_Num: Number(e.target.value) || 0 })}
            />
            <Button variant="link" renderIcon={<BiSend size={12} color="green" />} />
          </div>
        );
      case 'supp_Name':
        return (
          <div>
            <Input
              size="fullWidth"
              maxLength={30}
              orientation="horizontal"
              pattern={REGEX.allCharacter}
              value={currentRowData.supp_Name || ''}
              onChange={e => updateRowData(index, { supp_Name: e.target.value })}
            />
          </div>
        );
      case 'supp_Type':
        return (
          <Select
            size="fullWidth"
            value={currentRowData.supp_Type ?? null}
            onChange={(_event, option) => updateRowData(index, { supp_Type: Number(option.value) })}
            options={supplierTypeOptions}
          />
        );
      case 'tax_Deduct':
        return (
          <Input
            size="fullWidth"
            type="amount"
            min={0}
            max={7}
            value={currentRowData.tax_Deduct}
            onChange={e => updateRowData(index, { tax_Deduct: Number(e.target.value) || 0 })}
            onBlur={() => {}}
          />
        );
      case 'deduct_Type':
        return (
          <Select
            size="fullWidth"
            value={currentRowData.deduct_Type ?? null}
            onChange={(_event, option) =>
              updateRowData(index, { deduct_Type: Number(option.value) })
            }
            options={deductTypeOptions}
          />
        );
      case 'tax_Date':
        return (
          <DatePickerComponent
            selectedDate={row?.tax_Date ? new Date(row.tax_Date) : null}
            onChange={() => {}}
            id="F_Date"
            size="fullWidth"
            orientation="horizontal"
          />
        );

      case 'acc_Card':
        return (
          <div className={classes.acc}>
            <div>
              <Input
                size="fullWidth"
                maxLength={20}
                value={currentRowData.acc_Card === 0 ? '' : currentRowData.acc_Card.toString()}
                onChange={e => handleAccCardChange(e, currentRowData, index)}
              />
            </div>
            <Input
              size="fullWidth"
              value={row.acc_Card_Name || ''}
              onChange={() => {}}
              maxLength={30}
            />
          </div>
        );
      case 'sort_code':
        return (
          <Input
            size="fullWidth"
            type="number"
            value={row[key] || ''}
            onChange={() => {}}
            maxLength={3}
          />
        );
      case 'books_Aproved':
      case 'supp_Dif':
      case 'supp_To_File':
      case 'supp_To_Order':
        return <Input type="checkbox" checked={row[key]} />;
      case 'supp_Num_Dealer':
        return (
          <Input
            size="fullWidth"
            type="number"
            maxLength={10}
            value={currentRowData.supp_Num_Dealer || ''}
            onChange={e => handleSuppNumDealerChange(e, currentRowData, index)}
          />
        );
      case 'main_To_Mas':
        return (
          <div className={classes['column-third']}>
            <Button variant="link" renderIcon={<BiSend size={12} color="green" />} />
            <Input size="fullWidth" type="checkbox" checked={!!currentRowData.main_To_Mas} />
          </div>
        );

      case 'supp_Vat_Num':
        return (
          <div className={classes['column-third']}>
            <Input
              size="fullWidth"
              type="number"
              value={row[key] || ''}
              onChange={() => {}}
              maxLength={10}
            />
            <Button variant="link" renderIcon={<BiSend size={12} color="green" />} />
          </div>
        );
      case 'code17':
        return (
          <div className={classes['column-third']}>
            <Button variant="link" title="PDF" />
          </div>
        );

      default:
        return row[key];
    }
  };

  const handleSort = (key: string, direction: string) => {
    setQuery(prev => ({
      ...prev,
      SortColumn: key,
      SortType: direction,
      Page: 1
    }));
  };

  // on page load gp_trg
  useEffect(() => {
    getListOfSuppliersService({
      SystemYear: user?.instiYear || '',
      Institution: user?.instiCode || '',
      Page: 1,
      Size: 10,
      SortColumn: query?.SortColumn,
      SortType: query?.SortType
    });
  }, [query]);

  // supp_type dropdown options

  const getSupplierType = async () => {
    try {
      setSupplierTypeOptions(supplierTypeOption);
    } catch (error) {
      console.error(error, 'error');
    }
  };

  useEffect(() => {
    getSupplierType();
  }, [supplierType]);

  const getDeductType = async () => {
    try {
      setDeductTypeOptions(deductTypeOption);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  useEffect(() => {
    getDeductType();
  }, [deductTypeOptions]);

  // useEffect(() => {
  //   if (listOfSuppliersResponse?.data) {
  //     setSuppliersData(listOfSuppliersResponse.data);
  //   }
  // }, [listOfSuppliersResponse]);

  useEffect(() => {
    if (isListofSuppliersError && listofsuppliersError) {
      showToastErrors(listofsuppliersError);
    }
  }, [isListofSuppliersError, listofsuppliersError]);

  return (
    <ListOfInvoicesUI
      rowRender={customRowRender}
      renderActionItems={renderActionItems}
      renderOtherActionButtons={renderOtherActionButtons}
      data={suppliersData}
      pagination={listOfSuppliersResponse?.metaInfo}
      onPaginationChange={page =>
        getListOfSuppliersService({
          Page: page,
          Size: 10,
          SystemYear: user?.instiYear || '',
          Institution: user?.instiCode || ''
        })
      }
      handleSort={handleSort}
    />
  );
};

export default ListOfSuppliers;
