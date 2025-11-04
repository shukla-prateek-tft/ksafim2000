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
import NoAutoCompleteWrapper from './components/ui/nonAutoCompleteWrapper/nonAutoCompleteWrapper';
import GlobalComponentsContextWrapper from './store/contexts/GlobalComponentsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <OldThemeProvider theme={theme}>
              <GlobalComponentsContextWrapper>
                <AuthContextWrapper>
                  <NoAutoCompleteWrapper>
                    <App />
                  </NoAutoCompleteWrapper>
                </AuthContextWrapper>
                </GlobalComponentsContextWrapper>
            </OldThemeProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
