import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Pages from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './hooks';
import ErrorBoundary from './components/errorBoundary';
import { MetroPolinateIcon } from './assets';
import { useAuthBroadcast } from './hooks/useAuthBroadCast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PaymentSuppliersList } from './pages/suppliers';
import { GlobalLoader } from './components/loader';

const ToastStyles = createGlobalStyle`
  .Toastify__toast {
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    font-family: "Poppins", sans-serif;
    color:black;
    font-size:14px;
  }

  .Toastify__progress-bar {
    height: 4px;
    border-radius: 2px;
  }
`;

const StyledToastContainer = styled(ToastContainer)`
  &&.Toastify__toast-container {
    z-index: 10000;
  }
`;

// function App() {
//   const { globalLoading } = useAuth();
//   if (globalLoading) return <GlobalLoader loading={true} showOnFullScreen />;
//   useAuthBroadcast();

//   return (
//     <ErrorBoundary>
//       <ToastStyles />
//       <StyledToastContainer
//         icon={
//           <img style={{ height: 25, width: 25, borderRadius: '50%' }} src={MetroPolinateIcon} />
//         }
//         position="top-right"
//         autoClose={1500}
//         hideProgressBar={false}
//         newestOnTop={false}
//         theme="light"
//         closeOnClick
//         draggable
//         limit={2}
//       />
//       <Pages />
//     </ErrorBoundary>
//   );
// }

const queryClient = new QueryClient();

function App() {
  const { globalLoading } = useAuth();
  if (globalLoading) return <GlobalLoader loading={true} showOnFullScreen />;
  useAuthBroadcast();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ToastStyles />
        <StyledToastContainer
          icon={
            <img style={{ height: 25, width: 25, borderRadius: '50%' }} src={MetroPolinateIcon} />
          }
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          theme="light"
          closeOnClick
          draggable
          limit={2}
        />
        {/* <Pages /> */}
        <PaymentSuppliersList/>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}
export default App;
