import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './layouts';
import 'simplebar/src/simplebar.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();
