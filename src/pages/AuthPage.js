import React from 'react';
import styled from 'styled-components';

import AuthLayout from 'layouts/AuthLayout';

import Constants from 'config/Constants';

const BGImage = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0%;
    left: 0%;
    background-image: url('/images/patternImage.png');
    background-size: 300px;
    @media ${({ theme }) => theme.mq.md} {
    }
`;

const BlockWrapper = styled.div`
    position: fixed;
    width: 87%;
    max-width: 400px;
    min-height: 40vh;
    left: 50%;
    top: 35%;
    border-radius: 30px;
    padding: 7px 25px;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(23, 30, 38, 1);
    box-shadow: 0px 0px 42px -12px rgba(0, 0, 0, 0.75);
    z-index: 20;
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
const Frames = styled(BlockWrapper)`
    &::before,
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 30px;
        border: 3px white solid;
        left: -5%;
        top: -14%;
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

const AuthPage = () => {
    // In future add register page
    // const { register, login } = Constants.en.PATHS;
    // const { pathname } = window.location;

    // let pageType = 'login'; //default
    // if (pathname === `${register.path}`) pageType = 'register';
    // if (pathname === `${login.path}`) pageType = 'login';

    return (
        <AuthLayout>
            <BGImage />
            <Frames aria-hidden="true" />
            <BlockWrapper className="text-white">
                <small className="blockWrapper__text text-uppercase">
                    {Constants.en.TEXT.demoInformation}
                </small>
                <p className="blockWrapper__text-mutted text-muted border border-dark rounded p-1 mt-2">
                    <span className="d-block">Login: admin123</span>
                    <span className="d-block">Password: demo123</span>
                </p>
                <div className="form-group mt-4">
                    <input
                        type="email"
                        className="form-control blockWrapper__input bg-transparent w-75 mx-auto border border-dark"
                        aria-describedby="emailHelp"
                        placeholder={Constants.en.TEXT.enterLogin}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control blockWrapper__input bg-transparent w-75 mx-auto border border-dark"
                        aria-describedby="emailHelp"
                        placeholder={Constants.en.TEXT.enterPassword}
                    />
                </div>
                <button
                    type="button"
                    class="btn btn-outline-dark text-uppercase px-4 py-2 text-white mt-3"
                >
                    {Constants.en.TEXT.submitButton}
                </button>
            </BlockWrapper>
        </AuthLayout>
    );
};

export default AuthPage;
