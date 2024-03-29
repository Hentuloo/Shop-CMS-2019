import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import validator from 'validator';

import AuthLayout from 'layouts/AuthLayout';
import { BasicPattern } from 'components/Patterns';
import LoadingView from 'components/LoadingView';

import { signIn as signInAction } from 'store/actions/authActions';
import { connect } from 'react-redux';

import Constants from 'config/Constants';

const FormWrapper = styled.form`
  position: fixed;
  width: 87%;
  max-width: 400px;
  min-height: 60vh;
  left: 50%;
  top: 50%;
  border-radius: 30px;
  padding: 7px 25px;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(23, 30, 38, 1);
  box-shadow: 0px 0px 42px -12px rgba(0, 0, 0, 0.75);
  z-index: 20;
  @media ${({ theme }) => theme.mq.md} {
    min-height: 40vh;
    top: 40%;
  }
  .blockWrapper__text {
    display: block;
    line-height: 18px;
    padding-bottom: 12px;
  }
  .blockWrapper__text-mutted {
    font-size: 17px;
  }
  .blockWrapper__input {
    outline: none !important;
    border: 1px solid rgba(0, 0, 0, 0.75);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.75);
  }
`;
const Frames = styled(FormWrapper)`
  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 30px;
    border: 3px white solid;
    left: -5%;
    top: -10%;
    z-index: -2;
    opacity: 0.7;
    @media ${({ theme }) => theme.mq.md} {
      left: -10%;
      top: -8%;
    }
  }
  &::after {
    left: 4%;
    top: 21%;
    @media ${({ theme }) => theme.mq.md} {
      left: 4%;
      top: 27%;
    }
  }
`;

class AuthPage extends Component {
  state = {
    login: '',
    password: '',
    isEmail: true,
    isPassword: true,
  };

  handleChangeInput = e => {
    const { value, name } = e.target;
    const { [name]: stateValue } = this.state;

    if (value !== stateValue)
      this.setState({
        [name]: value,
        isEmail: true,
        isPassword: true,
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signIn } = this.props;
    const { login, password } = this.state;

    // check email
    if (!validator.isEmail(login))
      return this.setState({ isEmail: false });

    // check password
    if (
      !validator.isAlphanumeric(password) &&
      !validator.isLength(password, { min: 3, max: 15 })
    ) {
      return this.setState({ isPassword: false });
    }

    return signIn({ login, password });
  };

  render() {
    // In future add register page
    // const { register, login } = Constants.en.PATHS;
    // const { pathname } = window.location;

    // let pageType = 'login'; //default
    // if (pathname === `${register.path}`) pageType = 'register';
    // if (pathname === `${login.path}`) pageType = 'login';

    const { password, login, isEmail, isPassword } = this.state;
    const { authErrorMessage, authLoad } = this.props;

    return (
      <AuthLayout>
        <BasicPattern />
        <Frames aria-hidden="true" as="div" />
        <FormWrapper
          className="text-white"
          onSubmit={this.handleSubmit}
        >
          <small className="blockWrapper__text text-uppercase">
            {Constants.en.TEXT.demoInformation}
          </small>
          <p className="blockWrapper__text-mutted text-muted border border-dark rounded p-1 mt-2">
            <span className="d-block">
              {Constants.en.TEXT.demoLogin}
            </span>
            <span className="d-block">
              {Constants.en.TEXT.demoPassword}
            </span>
          </p>
          <div className="form-group mt-4">
            <input
              name="login"
              type="email"
              className="form-control blockWrapper__input text-light bg-transparent w-75 mx-auto border border-dark"
              aria-describedby="emailHelp"
              placeholder={Constants.en.TEXT.enterLogin}
              onChange={this.handleChangeInput}
              value={login}
            />
            {!isEmail && (
              <small className="text-muted d-block text-left w-75 mx-auto my-1 pl-2">
                Check your email!
              </small>
            )}
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              className="form-control blockWrapper__input text-light bg-transparent w-75 mx-auto border border-dark"
              placeholder={Constants.en.TEXT.enterPassword}
              onChange={this.handleChangeInput}
              value={password}
            />
            {!isPassword && (
              <small className="text-muted d-block text-left w-75 mx-auto my-1 pl-2">
                Check your password! min: 3/chars, max: 15/chars
              </small>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-outline-dark text-uppercase px-4 py-2 text-white mt-3"
          >
            {Constants.en.TEXT.submitButton}
          </button>
          {authErrorMessage && (
            <p className="text-muted mt-2 mb-0">{authErrorMessage}</p>
          )}
        </FormWrapper>
        {authLoad && <LoadingView />}
      </AuthLayout>
    );
  }
}

const mapStateToProps = ({ Auth: { authError, authLoad } }) => ({
  authErrorMessage: authError,
  authLoad,
});
const mapDispatchToProps = {
  signIn: signInAction,
};

AuthPage.propTypes = {
  signIn: PropTypes.func.isRequired,
  authErrorMessage: PropTypes.oneOfType([PropTypes.string]),
  authLoad: PropTypes.bool.isRequired,
};
AuthPage.defaultProps = {
  authErrorMessage: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPage);
