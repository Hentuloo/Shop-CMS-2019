import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux';
import { changeStatus as changeStatusAction } from 'store/actions';
import { deleteOrder as deleteOrderAction } from 'store/actions';

import MainLayout from 'layouts/MainLayout';
import OrdersTable from 'components/OrdersTable';
import OrderDetails from 'components/OrderDetails';

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
            return { orderDetailBarActive: !prevState.orderDetailBarActive };
        });
    };

    handleOnChangeStatus = ({ status, id }) => {
        const { changeStatus } = this.props;
        changeStatus({ status, id });
        this.setState({ orderDetailBarActive: false });
    };
    handleDeleteOrder = id => {
        const { deleteOrder } = this.props;
        deleteOrder({ id });
    };
    handleDetailsButton = id => {
        const { orders, selectedProducts } = this.props;

        const activeOrder = orders.find(order => order.id === id);

        const orderedProducts = activeOrder.products.map(orderedProduct => {
            return selectedProducts
                .filter(product => product.id === orderedProduct.productId)
                .map(({ id, image, name }) => ({
                    id,
                    image,
                    name,
                    amount: orderedProduct.amount,
                }))[0];
        });
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
                    className="bg-dark border-top border-white pb-5"
                />
            </MainLayout>
        );
    }
}

const mapStateToProps = ({ Orders, Products }) => ({
    orders: Orders,
    selectedProducts: Products.filter(product => {
        return Orders.find(order => {
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Orders);
