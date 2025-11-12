import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoutes } from '@/Languages';
import { PaymentSuppliersList } from './suppliers';
import { PageLayout } from '@/ui/Layout';
import { Login } from './systemManagement/login';
import {
  ListOfSuppliersFilters,
  PaymentMethods,
  UserAndPermissionManagement
} from './systemManagement';
import {
  ClosePettyCash,
  ConfirmationOfReceiptOfMoneyFromPettyCash,
  PettyCashAccount,
  PettyCashExpenses,
  PettyCashTransactionReport,
  SummaryPettyCash
} from './pettyCash';
import {
  ExpenseVoucherWithItems,
  ListOfSuppliers,
  PaymentInformationQuery,
  PaymentVoucherPrint,
  PrintPreviewEnteredInvoice
} from './payments';

const ProtectedRoute = ({ token, component }) => {
  return token ? component : <Navigate to="/login" replace />;
};
const AuthenticatedRoutes = [
  // { path: AppRoutes.MAIN_MENU, element: <MainPage /> },
  {
    path: '*',
    element: <Navigate to={AppRoutes.HOME} replace />
  },
  {
    path: AppRoutes.USER_MANAGEMENT_AND_PERMISSIONS,
    element: <UserAndPermissionManagement />
  },
  {
    path: AppRoutes.SMALL_CAP_EXPENSES,
    element: <PettyCashExpenses />
  },
  {
    path: AppRoutes.PUTTING_CHIC_INTO_SMALL_CASH_REGISTER,
    element: <PettyCashAccount />
  },
  {
    path: AppRoutes.SMALL_BOX_OFFICE_MOVEMENTS_REPORT,
    element: <PettyCashTransactionReport />
  },
  {
    path: AppRoutes.ACCEPTING_MONEY_FROM_SMALL_FUND,
    element: <ConfirmationOfReceiptOfMoneyFromPettyCash />
  },
  {
    path: AppRoutes.SUMMARY_SMALL_BOX_OFFICE,
    element: <SummaryPettyCash />
  },
  {
    path: AppRoutes.PAYMENT_VOUCHER,
    element: <ClosePettyCash />
  },
  {
    path: AppRoutes.PAYMENT_VOUCHER_PRINT,
    element: <PaymentVoucherPrint />
  },
  {
    path: AppRoutes.SPENDING_VOUCHER_WITH_ITEMS,
    element: <ExpenseVoucherWithItems />
  },
  {
    path: AppRoutes.SPENDING_VOUCHER,
    element: <PrintPreviewEnteredInvoice />
  },
  {
    path: AppRoutes.PAYMENT_INFORMATION_QUERY,
    element: <PaymentInformationQuery />
  },
  {
    path: AppRoutes.LIST_OF_SUPPLIERS,
    element: <ListOfSuppliers />
  }
];
const UnauthenticatedRoutes = [
  {
    path: '/login',
    element: <Login type="adminInterface" />,
    index: true
  }
];
const previousYearAllowed = ['*'];
const MuniDataBases = ['*'];

const isMuniUser = user => user?.database?.includes('_MUNI_');

const getAllowedRoutes = user =>
  isMuniUser(user)
    ? AuthenticatedRoutes?.filter(route => MuniDataBases?.includes(route.path))
    : Number(user.accountYear) !== Number(user?.instiYear) ||
        new Date(user.accountYearTo) < new Date()
      ? AuthenticatedRoutes?.filter(route => previousYearAllowed?.includes(route.path))
      : AuthenticatedRoutes;

export const routes = (token, user) => {
  const AllowedRoutes = getAllowedRoutes(user);
  return (
    <Routes>
      {token ? (
        <Route path="/" element={<PageLayout />}>
          {AllowedRoutes.map(({ path, element, index }, idx) => (
            <Route key={idx} path={path} element={element} index={index} />
          ))}
        </Route>
      ) : (
        <Route path="/">
          {UnauthenticatedRoutes.map(({ path, element, index }, idx) => (
            <Route key={idx} path={path} element={element} index={index} />
          ))}
        </Route>
      )}
    </Routes>
  );
};
