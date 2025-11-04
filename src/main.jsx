import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthContextWrapper from './store/contexts/AuthContext';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './Languages/i18n/i18';
import App from './App';
import store from './store';
import { ThemeProvider as OldThemeProvider } from 'styled-components';
import theme from './utils/theme';
import { ThemeProvider } from './store/contexts/ThemeContext';
import GlobalComponentsContextWrapper from './store/contexts/GlobalComponentsContext';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient} >
        <BrowserRouter>
          <ThemeProvider>
            <OldThemeProvider theme={theme}>
              <GlobalComponentsContextWrapper>
                <AuthContextWrapper>
                    <App />
                </AuthContextWrapper>
                </GlobalComponentsContextWrapper>
            </OldThemeProvider>
          </ThemeProvider>
        </BrowserRouter></QueryClientProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
