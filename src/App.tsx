import React, { useEffect } from 'react';
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
import { useApi } from './hooks/useAPi';
import { buildQueryParams } from './utils/commonHelper';

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

  const getUserList = (params?: any) => ({
    url: `/suppliers`,
    method: 'GET',
    params
  });
  const createInvoice = (params?: any) => ({
    url: `/invoices`,
    method: 'POST',
    data: params
  });

  const { loading, callService, data, isError, error } = useApi(createInvoice, {
    onSuccess: () => console.log('User created!'),onError:(error)=>{console.log(error,'Eroor hai bhai');
    }
  });
  useEffect(() => {
    callService({
      data: {
        type: 'invoices',
        id: '10000001',
        attributes: {
          actionNumber: '',
          year: 2025,
          tot_inv: 100,
          acc_act_type: 5,
          student: 12323,
          t703Dto: {
            user_Name: 'irena.b        ',
            pay_Date: '2025-11-06T00:00:00.000+02:00',
            supp: null,
            desc_Aut: null,
            oposit_Card: 9004683462,
            stamp_Idate: '2025-11-06T00:00:00.000+02:00',
            date_Aut: '2025-01-08T00:00:00.000+02:00',
            inv_Desc_Aut: '23123, test',
            type_No: null
          },
          invoiceLinesDto: [
            {
              lineNumber: 1,
              catalogNo: 999999999,
              description: 'test',
              amount: 1,
              price: 100,
              inv_acc_card: 3110,
              inv_service_type: 2010,
              inv_service_subject: 2,
              vat_type: 1,
              vat_sum: 15.25,
              discount: 0,
              price_with_vat: 100,
              sug_taktziv: null
            }
          ]
        },
        relationships: {
          institution: {
            data: {
              type: 'institutions',
              id: '244111'
            }
          },
          supplier: {
            data: {
              type: 'suppliers',
              id: ''
            }
          },
          t703: {
            data: {
              type: 't703s',
              id: '114348-2024-100123'
            }
          },
          lines: {
            data: [
              {
                type: 'invoice-lines',
                id: 'line-1'
              }
            ]
          }
        }
      }
    });
  }, []);
  console.log(data, isError, error);

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
        <Pages />
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;
