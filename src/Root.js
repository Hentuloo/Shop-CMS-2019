import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DashBoard from 'pages/DashBoard';
import Orders from 'pages/Orders';
import Products from 'pages/Products';

import Constants from 'config/Constants';

function Root() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={Constants.PATHS.root.path}
                    component={DashBoard}
                />
                <Route
                    path={`${Constants.PATHS.orders.path}`}
                    component={Orders}
                />
                <Route
                    path={`${Constants.PATHS.products.path}/:id`}
                    component={Products}
                />
                <Route
                    path={Constants.PATHS.products.path}
                    component={Products}
                />
            </Switch>
        </Router>
    );
}

export default Root;
