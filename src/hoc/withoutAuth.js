import React from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';

import Constants from 'config/Constants';

const withAuth = WrappedComponent => {
  const checkAuthFunc = props => {
    const {
      firebase: { auth },
    } = props;
    const { uid, isLoaded } = auth;

    if (isLoaded) {
      if (uid) {
        return (
          <Redirect to={`${Constants.en.PATHS.dashboard.path}`} />
        );
      }
      return <WrappedComponent {...props} />;
    }
    return null;
  };
  checkAuthFunc.propTypes = {
    firebase: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
      .isRequired,
  };
  return checkAuthFunc;
};

const mapStateToProps = ({ firebase }) => ({
  firebase,
});

const composedWithAuthWrapper = compose(
  connect(mapStateToProps),
  withAuth,
);

export default composedWithAuthWrapper;
