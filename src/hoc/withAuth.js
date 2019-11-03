import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';

import Constants from 'config/Constants';

const withAuth = WrappedComponent => {
  const authFunc = props => {
    const {
      firebase: { auth },
    } = props;
    const { uid, isLoaded } = auth;
    if (isLoaded) {
      if (uid) {
        return <WrappedComponent {...props} />;
      }
      return <Redirect to={`${Constants.en.PATHS.login.path}`} />;
    }
    return null;
  };

  authFunc.propTypes = {
    firebase: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
      .isRequired,
  };

  return authFunc;
};

const mapStateToProps = ({ firebase }) => ({
  firebase,
});

const composedWithAuthWrapper = compose(
  connect(mapStateToProps),
  withAuth,
);

export default composedWithAuthWrapper;
