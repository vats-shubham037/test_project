// import external modules
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/storeConfig/store';

import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from './components/spinner/spinner';
import { history } from './app/AppRouter';

const LazyApp = lazy(() => import('./app/AppRouter'));
const jsx = (
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <LazyApp />
    </Suspense>
  </Provider>
);

// renedr app
let hasRendered = false;
const renderApp = async () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
    history.push("/sku")
  }
};

ReactDOM.render(<Spinner />, document.getElementById('root'));




renderApp()
