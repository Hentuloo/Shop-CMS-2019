import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';

import Navigation from 'components/Navigation';
import Alert from 'components/Alert';

import theme from 'themes/mainTheme';

const BreakDiv = styled.div`
    height: 100px;
    @media ${({ theme }) => theme.mq.md} {
        height: auto;
    }
`;
const StyledNavigation = styled(Navigation)`
    z-index: 10;
    @media ${({ theme }) => theme.mq.md} {
        height: 100vh;
    }
`;

const MainLayout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Alert />

            <div className="container mx-0 mw-100">
                <div className="row">
                    <BreakDiv className="col-12 col-md-3 col-lg-2 h-1" />
                    <StyledNavigation className="col-12 col-md-3 col-lg-2 d-flex flex-wrap position-fixed justify-content-center flex-md-column" />
                    <main className="d-block col-md-9 col-lg-10">
                        {children}
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default MainLayout;
