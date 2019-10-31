import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { signOut as signOutAction } from 'store/actions';
import { connect } from 'react-redux';

import Constants from 'config/Constants';

const Circle = styled.div`
    width: 45px;
    height: 45px;
    margin: 0px auto;
    padding: 4px 9px 5px 9px;
    border: 1px white solid;
    border-radius: 50%;
    line-height: 35px;
    text-align: center;
`;
class Navigation extends Component {
    state = {};
    handleDisabledLink = e => {
        e.preventDefault();
    };
    render() {
        const { className, signOut } = this.props;
        return (
            <nav
                className={`${className} navbar navbar-expand-md navbar-dark bg-dark px-2`}
            >
                <div className="text-light text-center w-md-100">
                    <Circle>
                        <span
                            className="fa fa-user-o h3 float-md-left pr-4 mt-1"
                            aria-hidden="true"
                        />
                    </Circle>
                    <small className="text-muted d-inline-block mx-md-auto w-100">
                        Admin@admin.pl
                    </small>
                </div>

                <button
                    className="navbar-toggler ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse mx-auto align-items-start"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav flex-column w-100">
                        <li className="nav-item h4 ">
                            <NavLink
                                exact
                                className="nav-link text-center px-md-0"
                                to={Constants.en.PATHS.root.path}
                            >
                                <span
                                    className="fa fa-home float-md-left pr-4 mt-1"
                                    aria-hidden="true"
                                />
                                <span>{Constants.en.PATHS.root.title}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item h4">
                            <NavLink
                                className="nav-link text-center px-md-0"
                                to={Constants.en.PATHS.orders.path}
                            >
                                <span
                                    className="fa fa-shopping-basket float-md-left pr-4 mt-1"
                                    aria-hidden="true"
                                />
                                <span>{Constants.en.PATHS.orders.title}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item h4">
                            <NavLink
                                className="nav-link text-center px-md-0"
                                to={Constants.en.PATHS.products.path}
                            >
                                <span
                                    className="fa fa-th-list float-md-left pr-4"
                                    aria-hidden="true"
                                />
                                <span>{Constants.en.PATHS.products.title}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item h5">
                            <NavLink
                                onClick={this.handleDisabledLink}
                                className="nav-link text-center px-md-0 text-muted"
                                to={Constants.en.PATHS.blog.path}
                                data-toggle="popover"
                                data-content="Coming soon!"
                            >
                                <span
                                    className="fa fa-book float-md-left pr-4 mt-1 mt-md-1"
                                    aria-hidden="true"
                                />
                                <span>{Constants.en.PATHS.blog.title}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item h5">
                            <NavLink
                                onClick={this.handleDisabledLink}
                                className="nav-link text-center px-md-0 text-muted"
                                to={Constants.en.PATHS.comments.path}
                                data-toggle="popover"
                                data-content="Coming soon!"
                            >
                                <span
                                    className="fa fa-comments-o float-md-left pr-3"
                                    aria-hidden="true"
                                />
                                <span>{Constants.en.PATHS.comments.title}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item h5">
                            <NavLink
                                onClick={this.handleDisabledLink}
                                className="nav-link text-center px-md-0 text-muted"
                                to={Constants.en.PATHS.cmsSettings.path}
                                data-toggle="popover"
                                data-content="Coming soon!"
                            >
                                <span
                                    className="fa fa-sliders float-md-left pr-3"
                                    aria-hidden="true"
                                />
                                <span>
                                    {Constants.en.PATHS.cmsSettings.title}
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item h4 ">
                            <NavLink
                                exact
                                className="nav-link text-center px-md-0"
                                to={Constants.en.PATHS.logout.path}
                                onClick={signOut}
                            >
                                <span
                                    className="fa fa-sign-out float-md-left pr-4  mt-1"
                                    aria-hidden="true"
                                />
                                <span>{Constants.en.PATHS.logout.title}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapDispatchToProps = {
    signOut: signOutAction,
};

export default connect(
    null,
    mapDispatchToProps,
)(Navigation);
