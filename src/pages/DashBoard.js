import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import MainLayout from 'layouts/MainLayout';
import {
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

const DashBoard = ({ amountsOfOrders, lastsProducts, reffers }) => {
  return (
    <MainLayout>
      <Wrapper>
        <OrdersCount amountsOfOrders={amountsOfOrders} />
        <ProductsStat products={lastsProducts} />
        <RefferBlocks reffers={reffers} />
      </Wrapper>
    </MainLayout>
  );
};

const mapStateToProps = ({
  Orders,
  Products,

  Settings,
}) => ({
  amountsOfOrders: Orders.orders.map(order => ({
    status: order.status,
  })),
  lastsProducts: Products.products
    .filter(({ amount }) => amount <= 2)
    .map(({ id, amount, name }) => ({ id, amount, name })),

  reffers: Settings.reffers,
});

DashBoard.propTypes = {
  amountsOfOrders: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastsProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  reffers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(DashBoard);
