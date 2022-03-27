// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { App } from 'layouts';
// import { I18nextProvider } from 'react-i18next';
// import Providers from 'providers';
// import i18next from 'i18next';
// import './i18next';

// ReactDOM.render(
//   <I18nextProvider i18n={i18next}>
//     <React.StrictMode>
//       <Providers>
//         <App />
//       </Providers>
//     </React.StrictMode>
//   </I18nextProvider>,
//   document.getElementById('root')
// );

import 'simplebar/src/simplebar.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './layouts';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();
