//MCFW-0597
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
import { ServiceFn } from '../type';
import { AccCardValidationResponse, Supplier } from './types';
import { REGEX } from '@/constants/appConstant';
import { Select } from '@/ui/Select';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { toast } from 'react-toastify';

const ListOfSuppliers = () => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const [suppliersData, setSuppliersData] = useState<Supplier[]>([]);
  const [query, setQuery] = useState({
    Page: 1,
    Size: 10,
    SortColumn: '',
    SortType: ''
  });

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
  };
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
              maxLength={100}
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
            options={[]}
          />
        );
      case 'tax_Deduct':
        return (
          <Input
            size="fullWidth"
            type="amount"
            min={0}
            max={3}
            value={currentRowData.tax_Deduct}
            onChange={e => updateRowData(index, { tax_Deduct: Number(e.target.value) || 0 })}
            onBlur={() => {}}
          />
        );
      case 'deduct_Type':
        return (
          <Select
            size="fullWidth"
            value={currentRowData.supp_Type ?? null}
            onChange={(_event, option) =>
              updateRowData(index, { deduct_Type: Number(option.value) })
            }
            options={[]}
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

  useEffect(() => {
    if (listOfSuppliersResponse?.data) {
      setSuppliersData(listOfSuppliersResponse.data);
    }
  }, [listOfSuppliersResponse]);

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
