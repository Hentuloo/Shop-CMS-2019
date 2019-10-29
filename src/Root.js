import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DashBoard from 'pages/DashBoard';
import Orders from 'pages/Orders';
import Products from 'pages/Products';
import AuthPage from 'pages/AuthPage';

import Constants from 'config/Constants';

function Root() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={Constants.en.PATHS.root.path}
                    component={DashBoard}
                />
                <Route
                    path={`${Constants.en.PATHS.dashboard.path}`}
                    component={DashBoard}
                />
                <Route
                    path={`${Constants.en.PATHS.login.path}`}
                    component={AuthPage}
                />
                <Route
                    path={`${Constants.en.PATHS.register.path}`}
                    component={AuthPage}
                />
                <Route
                    path={`${Constants.en.PATHS.orders.path}`}
                    component={Orders}
                />
                <Route
                    path={`${Constants.en.PATHS.products.path}/:id`}
                    component={Products}
                />
                <Route
                    path={Constants.en.PATHS.products.path}
                    component={Products}
                />
            </Switch>
        </Router>
    );
}

export default Root;
