import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';

import LoadingView from 'components/LoadingView';

import {
  fetchOrders as fetchOrdersAction,
  fetchProducts as fetchProductsAction,
  fetchComments as fetchCommentsAction,
} from 'store/actions';

const withData = WrappedComponent => {
  class fetchingComponent extends Component {
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
  }
  fetchingComponent.propTypes = {
    ordersFetched: PropTypes.bool.isRequired,
    productsFetched: PropTypes.bool.isRequired,
    commentsFetched: PropTypes.bool.isRequired,
    fetchOrders: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired,
  };
  return fetchingComponent;
};

const mapStateToProps = ({ Orders, Products, Comments }) => ({
  ordersFetched: Orders.fetched,
  productsFetched: Products.fetched,
  commentsFetched: Comments.fetched,
  // refers
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
