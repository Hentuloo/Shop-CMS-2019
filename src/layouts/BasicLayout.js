import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import theme from 'themes/mainTheme';

const BasicLayout = ({ children, className }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="container mx-0 mw-100">
                <main className={`${className}`}>{children}</main>
            </div>
        </ThemeProvider>
    );
};

export default BasicLayout;
