import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ConfirmChangeType, MainLayout } from '@/components';
import { AppRoutes } from '@/Languages';
import { Login } from './login';

import {
  PaymentSuppliersList,
} from './suppliers';
import { PageLayout } from '@/ui/Layout';


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
    path: AppRoutes.PAYMENT_SUPPILER_LIST,
    element: <PaymentSuppliersList />
  },
];
const UnauthenticatedRoutes = [
  {
    path: '/login',
    element: <Login type="adminInterface" />,
    index: true
  }
];
const previousYearAllowed = [
  '*'
]
const MuniDataBases = ['*'];

const isMuniUser = user => user?.database?.includes('_MUNI_');

const getAllowedRoutes = user =>
  isMuniUser(user)
    ? AuthenticatedRoutes?.filter(route => MuniDataBases?.includes(route.path))
    : Number(user.accountYear) !== Number(user?.instiYear) || new Date(user.accountYearTo) < new Date()
      ? AuthenticatedRoutes?.filter(route => previousYearAllowed?.includes(route.path))
      : AuthenticatedRoutes;


export const routes = (token, user) => {
  const AllowedRoutes = getAllowedRoutes(user);
  return (
    <Routes>
      {token ? (
        <Route path="/" element={<PageLayout/>}>
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
