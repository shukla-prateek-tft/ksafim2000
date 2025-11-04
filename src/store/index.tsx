import { configureStore } from '@reduxjs/toolkit';
import {
  loginReducer,
  paymentSupplierReducer
} from './slices';
import { globalReducer } from './slices/global';

const store = configureStore({
  reducer: {
    paymentSupplier: paymentSupplierReducer,
    global: globalReducer,
    login: loginReducer,
  }
});

export default store;
