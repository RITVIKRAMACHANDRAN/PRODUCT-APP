import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
