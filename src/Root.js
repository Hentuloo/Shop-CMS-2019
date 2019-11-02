import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import DashBoard from 'pages/DashBoard';
import Orders from 'pages/Orders';
import Products from 'pages/Products';
import AuthPage from 'pages/AuthPage';

import withData from 'hoc/withData';
import withAuth from 'hoc/withAuth';
import withoutAuth from 'hoc/withoutAuth';

import Constants from 'config/Constants';

function Root() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={Constants.en.PATHS.root.path}
          component={withAuth(withData(DashBoard))}
        />
        <Route
          path={`${Constants.en.PATHS.dashboard.path}`}
          component={withAuth(withData(DashBoard))}
        />
        <Route
          path={`${Constants.en.PATHS.login.path}`}
          component={withoutAuth(AuthPage)}
        />
        <Route
          path={`${Constants.en.PATHS.register.path}`}
          component={withoutAuth(AuthPage)}
        />
        <Route
          path={`${Constants.en.PATHS.orders.path}`}
          component={withAuth(withData(Orders))}
        />
        <Route
          path={`${Constants.en.PATHS.products.path}/:id`}
          component={withAuth(withData(Products))}
        />
        <Route
          path={Constants.en.PATHS.products.path}
          component={withAuth(withData(Products))}
        />
      </Switch>
    </Router>
  );
}

export default Root;
