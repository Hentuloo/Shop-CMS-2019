import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'store';

import Root from './Root';

//Enable popovers
$(function() {
    $('[data-toggle="popover"]').popover({
        container: 'body',
    });
});

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root'),
);
