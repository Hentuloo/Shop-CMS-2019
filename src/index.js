import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';

// redux + firebase
import { Provider } from 'react-redux';
import store from 'store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import fbConfig from 'config/fbConfig';

import Root from './Root';

//Enable popovers
$(function() {
    $('[data-toggle="popover"]').popover({
        container: 'body',
    });
});

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

const rrfProps = {
    firebase: fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Root />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'),
);
