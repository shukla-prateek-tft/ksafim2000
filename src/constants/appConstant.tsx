export const STORAGE_KEY = import.meta.env.VITE_SECURE_LOCAL_STORAGE_KEY;
export const AppRoutes = {
  // Admin Routes
  LOGIN: '/login',
ANALYSIS_UNDERLYING_TABLES: '/analysis-underlying-tables',
DEPARTMENT_OF_EDUCATION: '/department-of-education',
LIST_OF_SUPPLIERS: '/list-of-suppliers',
USER_MANAGEMENT_AND_PERMISSIONS: '/system-management/user-management-and-permissions',
PAYMENT_METHODS: '/system-management/payment-methods',
SMALL_CAP_EXPENSES: '/petty-cash/small-cap-expenses',
PUTTING_CHIC_INTO_SMALL_CASH_REGISTER: '/petty-cash/putting-chic-into-small-cash-register',
SMALL_BOX_OFFICE_MOVEMENTS_REPORT: '/petty-cash/small-box-office-movements-report',
ACCEPTING_MONEY_FROM_SMALL_FUND: '/petty-cash/accepting-money-from-small-fund',
SUMMARY_SMALL_BOX_OFFICE: '/summary-small-box-office',
SMALL_BOX_OFFICE_CLOSURE: '/small-box-office-closure',
PAYMENT_VOUCHER: '/payment-voucher',
PAYMENT_VOUCHER_PRINT: '/payment-voucher-print',
SPENDING_VOUCHER_WITH_ITEMS: '/spending-voucher-with-items',
SPENDING_VOUCHER: '/spending-voucher',
PAYMENT_INFORMATION_QUERY: '/payment-information-query',
CUT_OFF_VOUCHER_PAYMENT: '/cut-off-voucher-payment'
  
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
