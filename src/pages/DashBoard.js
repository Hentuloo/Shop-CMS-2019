import React from 'react';
import styled from 'styled-components';
import MainLayout from 'layouts/MainLayout';
import {
    LastComments,
    OrdersCount,
    ProductsStat,
    RefferBlocks,
} from 'components/DashboardPage';

const Wrapper = styled.div`
    @media ${({ theme }) => theme.mq.lg} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
`;

const DashBoard = () => {
    return (
        <MainLayout>
            <Wrapper>
                <OrdersCount />
                <ProductsStat />
                <LastComments />
                <RefferBlocks />
            </Wrapper>
        </MainLayout>
    );
};

export default DashBoard;
