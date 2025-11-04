export const STORAGE_KEY = import.meta.env.VITE_SECURE_LOCAL_STORAGE_KEY;
export const AppRoutes = {
  // Admin Routes
  LOGIN: '/login',
  PAYMENT_SUPPILER_LIST: '/payment-supplier-list',
};

export const API_ROUTES = {
  GET_PAYMENT_VOUCHER_DETAILS: 'Payment/GetPaymentVoucherDetails'
};

export const REGEX = {
  alphaNumeric: /^[a-zA-Z0-9._%+\u0590-\u05FF@-\s]+$/,
  text: /^[a-zA-Z0-9.,%\s\u0590-\u05FF@#!$&*\-+/:_]+$/,
  amount: /^-?\d*\.?\d{0,2}$/,
  indianNumberString: /^\d*\.?\d*$/,
  integer: /\B(?=(\d{2})+(?!\d))/g,
  '8digitDate': /^\d{8}$/,
  '6digitDate': /^\d{6}$/,
  dottedDate: /^(\d{2})\.(\d{2})\.(\d{2}|\d{4})$/,
  dateFormat: /^\d{2}\.\d{2}\.\d{2}$/,
  number: /^\d+$/,
  email: /^[a-zA-Z0-9.@\u0590-\u05FF@-]{1,60}$/,
  allCharacter: /^.{1,100}$/,
  discount: /^\d{0,3}(\.\d{0,2})?$/
};

export enum InputType {
  AMOUNT = 'amount',
  ALPHA_NUMERIC = 'alphaNumeric',
  NUMBER = 'number',
  TEXT = 'text'
}

export const DATEPICKER_MODAL_HIDE_CLASSNAME = 'date_picker_hide_for_enter_press';

export const PLAN_NUM = [91, 43, 105, 106, 107, 69, 70, 71, 68, 108];
