import { LoginState } from '@/store/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: LoginState = {
  isCheckAccountYear: false,
  isCheckFinancialYear: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsCheckAccountYear(state, action: PayloadAction<boolean>) {
      state.isCheckAccountYear = action.payload;
    },
    setIsCheckFinancialYear(state, action: PayloadAction<boolean>) {
      state.isCheckFinancialYear = action.payload;
    },
    resetLogin: () => initialState
  }
});

export const loginAction = loginSlice.actions;
export const loginReducer = loginSlice.reducer;