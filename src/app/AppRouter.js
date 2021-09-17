// import external modules
import React, { lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
const createBrowserHistory = require('history').createBrowserHistory;
const LazySkuData = lazy(() => import('../views/sku/skuData'));
const LazySkuDetails = lazy(()=> import('../views/sku/skuDetails'))
export const history = createBrowserHistory({ basename: '/' });
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
          <Route path="/sku/:id"  component={LazySkuDetails} />
          <Route path="/sku">
            <LazySkuData />
          </Route>
          </Switch>
      </Router>
    );
  }
}

export default AppRouter;
