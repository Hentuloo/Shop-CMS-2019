import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import LoadingView from 'components/LoadingView';

import {
    fetchOrders as fetchOrdersAction,
    fetchProducts as fetchProductsAction,
    fetchComments as fetchCommentsAction,
} from 'store/actions';

const withData = WrappedComponent => {
    return class extends Component {
        componentDidMount() {
            const {
                ordersFetched,
                productsFetched,
                commentsFetched,
                fetchOrders,
                fetchProducts,
                fetchComments,
            } = this.props;

            if (!ordersFetched) {
                fetchOrders();
            }
            if (!productsFetched) {
                fetchProducts();
            }
            if (!commentsFetched) {
                fetchComments();
            }
        }
        render() {
            const {
                ordersFetched,
                productsFetched,
                commentsFetched,
            } = this.props;
            if (!ordersFetched || !productsFetched || !commentsFetched) {
                return <LoadingView />;
            }

            return <WrappedComponent {...this.props} />;
        }
    };
};

const mapStateToProps = ({ Orders, Products, Comments }) => ({
    ordersFetched: Orders.fetched,
    productsFetched: Products.fetched,
    commentsFetched: Comments.fetched,
    //refers
});
const mapDispatchToProps = {
    fetchOrders: fetchOrdersAction,
    fetchProducts: fetchProductsAction,
    fetchComments: fetchCommentsAction,
};

const composedWithDataWrapper = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withData,
);

export default composedWithDataWrapper;
