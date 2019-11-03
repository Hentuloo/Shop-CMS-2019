import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';

import LoadingView from 'components/LoadingView';

import { fetchProducts as fetchProductsAction } from 'store/actions/productActions';
import { fetchOrders as fetchOrdersAction } from 'store/actions/ordersActions';

const withData = WrappedComponent => {
  class fetchingComponent extends Component {
    componentDidMount() {
      const {
        ordersFetched,
        productsFetched,
        fetchOrders,
        fetchProducts,
      } = this.props;

      if (!ordersFetched) {
        fetchOrders();
      }
      if (!productsFetched) {
        fetchProducts();
      }
    }

    render() {
      const { ordersFetched, productsFetched } = this.props;
      if (!ordersFetched || !productsFetched) {
        return <LoadingView />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }
  fetchingComponent.propTypes = {
    ordersFetched: PropTypes.bool.isRequired,
    productsFetched: PropTypes.bool.isRequired,
    fetchOrders: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
  };
  return fetchingComponent;
};

const mapStateToProps = ({ Orders, Products }) => ({
  ordersFetched: Orders.fetched,
  productsFetched: Products.fetched,
  // refers
});
const mapDispatchToProps = {
  fetchOrders: fetchOrdersAction,
  fetchProducts: fetchProductsAction,
};

const composedWithDataWrapper = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withData,
);

export default composedWithDataWrapper;
