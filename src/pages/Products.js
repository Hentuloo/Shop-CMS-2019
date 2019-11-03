import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import {
  createProduct as createProductAction,
  editProduct as editProductAction,
  deleteProduct as deleteProductAction,
  fetchProducts as fetchProductsAction,
} from 'store/actions/productActions';
import { setAlert as setAlertAction } from 'store/actions/generalActions';

import MainLayout from 'layouts/MainLayout';
import {
  ProductsTable,
  ProductEditor,
} from 'components/ProductsPage';

import Constants from 'config/Constants';

const EditorBarButton = styled.button`
  position: fixed;
  right: 0%;
  top: 100px;
  border-radius: 0px;
  padding-right: 20px;
  font-size: 1.6rem;
  @media ${({ theme }) => theme.mq.md} {
    top: 3%;
  }
`;

const StyledProductEditor = styled(ProductEditor)`
  position: fixed;
  width: 100vw;
  height: calc(100vh - 85px);
  top: 85px;
  left: 0%;
  border-width: 3px !important;
  transition: transform 0.4s ease-in;
  transform: translateX(110%);
  @media ${({ theme }) => theme.mq.md} {
    top: 0px;
    left: 100%;
    height: 100vh;
    width: 50vw;
    transform: translateX(0%);
    border-width: 0px !important;
  }
  @media ${({ theme }) => theme.mq.lg} {
    width: 40vw;
  }
  ${({ active }) =>
    active &&
    css`
      transform: translateX(0%);
      @media ${({ theme }) => theme.mq.md} {
        transform: translateX(-100%);
      }
    `}
`;

class Products extends Component {
  state = {
    editorActive: false,
    activeElement: undefined,
  };

  componentDidMount() {
    // id from url-params
    const {
      match: { params },
    } = this.props;
    const { id } = params;
    if (id) {
      const { products } = this.props;
      const productById = products.find(product => product.id === id);
      if (productById) {
        this.setState({
          editorActive: true,
          activeElement: productById.id,
        });
      }
    }
  }

  handleChangeFlagEditor = () => {
    this.setState(prevState => {
      return { editorActive: !prevState.editorActive };
    });
  };

  handleClickEditBtn = id => {
    this.setState(prevState => {
      return {
        editorActive: !prevState.editorActive,
        activeElement: id || undefined,
      };
    });
  };

  handleClickNewBtn = () => {
    this.setState({ editorActive: true, activeElement: undefined });
  };

  handleClickDeleteBtn = id => {
    const { deleteProduct, orderedProducts, setAlert } = this.props;
    if (
      orderedProducts.find(orderProducts =>
        orderProducts.find(({ productId }) => productId === id),
      )
    ) {
      return setAlert({ type: 'checkProductsInOrdersTab' });
    }
    return deleteProduct(id);
  };

  handleProductEditorAccept = async ({
    id,
    index,
    images,
    name,
    price,
    amount,
    details,
  }) => {
    const { createProduct, editProduct } = this.props;

    if (id) {
      // edit product
      const callBackStatus = await editProduct({
        id,
        index,
        images,
        name,
        price,
        amount,
        details,
      });
      if (callBackStatus) this.handleChangeFlagEditor();
      return;
    }
    // create product
    const callBackStatus = await createProduct({
      index,
      images,
      name,
      price,
      amount,
      details,
    });
    if (callBackStatus) this.handleChangeFlagEditor();
  };

  render() {
    const { products } = this.props;
    const { editorActive, activeElement } = this.state;
    return (
      <MainLayout>
        <div className="row pt-3">
          <div className="col-6 col-md-3">
            <button
              onClick={() => this.handleClickNewBtn()}
              type="button"
              className="btn bg-light d-flex flex-column align-items-center"
            >
              <span
                className="fa fa-plus display-1"
                aria-hidden="true"
              />
              <span>{Constants.en.TEXT.newProduct}</span>
            </button>
          </div>
        </div>
        <ProductsTable
          className=""
          products={products}
          onClickEditBtn={this.handleClickEditBtn}
          onClickDeleteBtn={this.handleClickDeleteBtn}
        />
        <StyledProductEditor
          active={editorActive}
          className="bg-dark border-top border-white"
          activeElement={products.find(
            ({ id }) => id === activeElement,
          )}
          submitAction={this.handleProductEditorAccept}
        />
        <EditorBarButton
          type="button"
          aria-hidden="true"
          className={`${
            editorActive ? 'btn-light' : 'btn-dark'
          } btn fa fa-tasks`}
          editorActive={editorActive}
          onClick={this.handleChangeFlagEditor}
        />
      </MainLayout>
    );
  }
}

const mapStateToProps = ({ Products: ProductsState, Orders }) => ({
  products: ProductsState.products,
  orderedProducts: Orders.orders.map(({ products }) => products),
});
const mapDispatchToProps = {
  createProduct: createProductAction,
  editProduct: editProductAction,
  deleteProduct: deleteProductAction,
  setAlert: setAlertAction,
  fetchProducts: fetchProductsAction,
};

Products.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
  orderedProducts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};
Products.defaultProps = {
  products: null,
  orderedProducts: null,
  match: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
