import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

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

const DashBoard = ({
    amountsOfOrders,
    lastsProducts,
    lastsComments,
    reffers,
}) => {
    return (
        <MainLayout>
            <Wrapper>
                <OrdersCount amountsOfOrders={amountsOfOrders} />
                <ProductsStat products={lastsProducts} />
                <LastComments comments={lastsComments} />
                <RefferBlocks reffers={reffers} />
            </Wrapper>
        </MainLayout>
    );
};

const mapStateToProps = ({ Orders, Products, Comments, Settings }) => ({
    amountsOfOrders: Orders.orders.map(order => ({ status: order.status })),
    lastsProducts: Products.products
        .filter(({ amount }) => amount <= 2)
        .map(({ id, amount, name }) => ({ id, amount, name })),
    lastsComments:
        Orders.orders.length > 2 &&
        Comments.slice(0, 2).map(comment => ({
            ...comment,
            content: {
                ...comment.content,
                childrens: comment.content.childrens.slice(0, 2),
            },
        })),
    reffers: Settings.reffers,
});

export default connect(mapStateToProps)(DashBoard);
