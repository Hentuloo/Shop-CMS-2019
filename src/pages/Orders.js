import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import MainLayout from 'layouts/MainLayout';
import OrdersTable from 'components/OrdersTable';
import OrderDetails from 'components/OrderDetails';

import OrderCardTemplate from 'templates/OrderCardTemplate';

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
        orderDetailActive: false,
    };

    handleChangeDetailFlag = () => {
        console.log('XD');
        this.setState(prevState => {
            return { orderDetailActive: !prevState.orderDetailActive };
        });
    };
    handleDetailsButton = id => {
        this.setState({ orderDetailActive: true });
    };

    render() {
        const { orderDetailActive } = this.state;
        return (
            <MainLayout>
                <div className="accordion mt-md-4" id="accordionExample">
                    <OrderCardTemplate
                        targetName="Waiting"
                        cardName="Zamówienia oczekujące wysyłki:"
                    >
                        <OrdersTable
                            clickDetailsButton={this.handleDetailsButton}
                        />
                    </OrderCardTemplate>
                    <OrderCardTemplate
                        targetName="DeliveredStatus"
                        cardName="Zamówienia oczekujące potwierdzenia
                                (dostarczono):"
                    >
                        <OrdersTable
                            clickDetailsButton={this.handleDetailsButton}
                        />
                    </OrderCardTemplate>
                    <OrderCardTemplate
                        targetName="Completed"
                        cardName=" Zakończone(ten miesiąc):"
                    >
                        <OrdersTable
                            clickDetailsButton={this.handleDetailsButton}
                        />
                    </OrderCardTemplate>
                </div>
                <StyledOrderDetails
                    onClose={this.handleChangeDetailFlag}
                    active={orderDetailActive}
                    className="bg-dark border-top border-white"
                />
            </MainLayout>
        );
    }
}

export default Orders;
