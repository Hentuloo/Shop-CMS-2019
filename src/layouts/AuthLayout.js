import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import { PropTypes } from 'prop-types';

import Alert from 'components/Alert';

import theme from 'themes/mainTheme';

const AuthLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Alert />
      <div className="container mx-0 mw-100">
        <main className="d-block">{children}</main>
      </div>
    </ThemeProvider>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
