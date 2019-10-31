import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';

import Constants from 'config/Constants';

const withAuth = WrappedComponent => {
    return props => {
        const { uid, isLoaded } = props.firebase.auth;
        if (isLoaded) {
            if (uid) {
                return <WrappedComponent {...props} />;
            }
            return <Redirect to={`${Constants.en.PATHS.login.path}`} />;
        }
        return null;
    };
};

const mapStateToProps = ({ firebase }) => ({
    firebase,
});

const composedWithAuthWrapper = compose(
    connect(mapStateToProps),
    withAuth,
);

export default composedWithAuthWrapper;
