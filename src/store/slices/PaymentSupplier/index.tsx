// import {
//   defaultSelectedInvoice,
//   SelectedInvoice
// } from '@/pages/invoice/listOfInvoices/ListOfInvoices.controller';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AddedInvoiceDataType,
  MCFW1250Filters,
  MCFW1370Filters,
  PaymentListType,
  PaymentSupplierState,
  SupplierType
} from './types';

export const defaultMCFW1370Filters: MCFW1370Filters = {
  Supp_Num: '',
  Size: 6,
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
const initialState: PaymentSupplierState = {
  supplierData: [],
  paymentList: [],
  addedInvoiceData: {} as AddedInvoiceDataType,
  recentInvoicesAddedList: [],
  updatedInvoiceData: {} as AddedInvoiceDataType,
  mcfw1370Filters: defaultMCFW1370Filters,
  mcfw1250Filters: {
    Page: 1,
    SortColumn: '',
    SortType: 'Asc'
  },
  // mcfw1250CurrentElementIndex: defaultSelectedInvoice
};

const paymentSupplierSlice = createSlice({
  name: 'paymentSupplier',
  initialState,
  reducers: {
    setPaymentSupplier(state, action: PayloadAction<SupplierType[]>) {
      state.supplierData = action.payload;
    },
    setCurrentPaymentList(state, action: PayloadAction<PaymentListType[]>) {
      state.paymentList = action.payload;
    },
    setAddedInvoiceData(state, action: PayloadAction<AddedInvoiceDataType>) {
      state.addedInvoiceData = action.payload;
    },
    setUpdatedInvoiceData(state, action: PayloadAction<AddedInvoiceDataType>) {
      state.updatedInvoiceData = action.payload;
    },
    setMCFW1370Filters(state, action: PayloadAction<MCFW1370Filters>) {
      state.mcfw1370Filters = action.payload;
    },
    // setMCFW1250Filters(state, action: PayloadAction<MCFW1250Filters>) {
    //   state.mcfw1250Filters = action.payload;
    // },
    // setMCFW1250CurrentElementIndex(state, action: PayloadAction<SelectedInvoice>) {
    //   state.mcfw1250CurrentElementIndex = action.payload;
    // },
    setRecentInvoicesAddedList(state, action: PayloadAction<AddedInvoiceDataType[]>) {
      state.recentInvoicesAddedList = action.payload;
    },
    clearRecentInvoicesAddedList(state) {
      state.recentInvoicesAddedList = [];
    },
    resetPaymentSupplier: () => initialState
  }
});

export const paymentSupplierAction = paymentSupplierSlice.actions;
export const paymentSupplierReducer = paymentSupplierSlice.reducer;
