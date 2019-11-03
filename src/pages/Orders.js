import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import {
  changeStatus as changeStatusAction,
  deleteOrder as deleteOrderAction,
} from 'store/actions/ordersActions';

import MainLayout from 'layouts/MainLayout';
import { OrdersTable, OrderDetails } from 'components/OrdersPage';

import OrderCardTemplate from 'templates/OrderCardTemplate';

import Constants from 'config/Constants';

const StyledOrderDetails = styled(OrderDetails)`
  position: fixed;
  width: 100vw;
  height: calc(100vh - 73px);
  top: 102vh;
  left: 0%;
  border-width: 3px !important;
  transition: transform 0.4s ease-in;

  @media ${({ theme }) => theme.mq.md} {
    top: 100vh;
    left: auto;
    right: 0%;
    height: 100vh;
    width: 50vw;
    border-width: 0px !important;
  }
  @media ${({ theme }) => theme.mq.lg} {
    width: 40vw;
  }
  ${({ active }) =>
    active &&
    css`
      transform: translateY(-100%);
    `}
`;

class Orders extends Component {
  state = {
    orderDetailBarActive: false,
    detailsBar: {
      products: [],
      id: null,
      status: undefined,
      address: '',
      clientComment: '',
      date: '',
      email: '',
    },
  };

  handleChangeDetailFlag = () => {
    this.setState(prevState => {
      return {
        orderDetailBarActive: !prevState.orderDetailBarActive,
      };
    });
  };

  handleOnChangeStatus = async ({ status, id }) => {
    const { changeStatus } = this.props;
    const changed = await changeStatus({ status, id });
    if (changed) {
      return this.setState({ orderDetailBarActive: false });
    }
    return 0;
  };

  handleDeleteOrder = id => {
    const { deleteOrder } = this.props;
    deleteOrder({ id });
  };

  handleDetailsButton = id => {
    const { orders, selectedProducts } = this.props;

    const activeOrder = orders.find(order => order.id === id);

    const orderedProducts = activeOrder.products.map(
      orderedProduct => {
        return selectedProducts
          .filter(product => product.id === orderedProduct.productId)
          .map(({ id: productId, images, name }) => ({
            id: productId,
            image: {
              src: images[0].src,
              title: images[0].title,
            },
            name,
            amount: orderedProduct.amount,
          }))[0];
      },
    );
    const {
      status,
      address,
      details: clientComment,
      date,
      email,
    } = activeOrder;

    this.setState({
      orderDetailBarActive: true,
      detailsBar: {
        products: orderedProducts,
        id,
        status,
        address,
        clientComment,
        date,
        email,
      },
    });
  };

  render() {
    const { orderDetailBarActive, detailsBar } = this.state;
    const { orders, selectedProducts } = this.props;
    const ordersStatusGroups = {
      toSend: {
        orders: orders.filter(order => order.status === 1),
        products: selectedProducts.filter(product => {
          return orders.find(order => {
            return order.products.find(
              orderedProduct =>
                orderedProduct.productId === product.id &&
                order.status === 1,
            );
          });
        }),
      },
      sended: {
        orders: orders.filter(order => order.status === 2),
        products: selectedProducts.filter(product => {
          return orders.find(order => {
            return order.products.find(
              orderedProduct =>
                orderedProduct.productId === product.id &&
                order.status === 2,
            );
          });
        }),
      },
      delivered: {
        orders: orders.filter(order => order.status === 3),
        products: selectedProducts.filter(product => {
          return orders.find(order => {
            return order.products.find(
              orderedProduct =>
                orderedProduct.productId === product.id &&
                order.status === 3,
            );
          });
        }),
      },
    };
    return (
      <MainLayout>
        <div
          className="accordion mt-md-4 pb-5 pb-mb-2"
          id="accordionExample"
        >
          <OrderCardTemplate
            targetName="Waiting"
            cardName={Constants.en.TEXT.toSentWaiting}
          >
            <OrdersTable
              items={ordersStatusGroups.toSend}
              clickDetailsButton={this.handleDetailsButton}
            />
          </OrderCardTemplate>
          <OrderCardTemplate
            targetName="Sended"
            cardName={Constants.en.TEXT.pendingConfirmation}
          >
            <OrdersTable
              items={ordersStatusGroups.sended}
              clickDetailsButton={this.handleDetailsButton}
            />
          </OrderCardTemplate>
          <OrderCardTemplate
            targetName="Delivered"
            cardName={Constants.en.TEXT.delivered}
          >
            <OrdersTable
              items={ordersStatusGroups.delivered}
              clickDetailsButton={this.handleDetailsButton}
              clickDeleteOrder={this.handleDeleteOrder}
            />
          </OrderCardTemplate>
        </div>
        <StyledOrderDetails
          onClose={this.handleChangeDetailFlag}
          onChangeStatus={this.handleOnChangeStatus}
          active={orderDetailBarActive}
          data={detailsBar}
          className="myColors-dark border-top border-white pb-5"
        />
      </MainLayout>
    );
  }
}

const mapStateToProps = ({ Orders: OrdersState, Products }) => ({
  orders: OrdersState.orders,
  selectedProducts: Products.products.filter(product => {
    return OrdersState.orders.find(order => {
      return order.products.find(
        orderedProduct => orderedProduct.productId === product.id,
      );
    });
  }),
});

const mapDispatchToProps = {
  changeStatus: changeStatusAction,
  deleteOrder: deleteOrderAction,
};

Orders.propTypes = {
  changeStatus: PropTypes.func.isRequired,
  deleteOrder: PropTypes.func.isRequired,
  orders: PropTypes.oneOfType([PropTypes.array]),
  selectedProducts: PropTypes.oneOfType([PropTypes.array]),
};

Orders.defaultProps = {
  orders: null,
  selectedProducts: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
