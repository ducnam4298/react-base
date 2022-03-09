import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'layouts';
import { I18nextProvider } from 'react-i18next';
import Providers from 'providers';
import i18next from 'i18next';
import './i18next';

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root')
);
