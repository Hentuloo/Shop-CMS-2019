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
  FilterInput,
  Controlers,
  TableSettings,
} from 'components/ProductsPage';

const ControlsAndFilterWrapper = styled.div`
  @media ${({ theme }) => theme.mq.lg} {
    display: flex;
    width: 90%;
    flex-flow: column-reverse;
    margin: 20px auto;
  }
`;
const EditorBarButton = styled.button`
  position: fixed;
  right: 0%;
  top: 100px;
  border-radius: 0px;
  padding-right: 20px;
  font-size: 1.6rem;
  z-index: 20;
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
    filterValue: '',
    tableSettings: {
      checkboxVisible: false,
      image: true,
      name: true,
      price: true,
      amount: true,
      description: true,
      operations: true,
      last: false,
    },
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

  handleInput = e => {
    const { value, name } = e.target;
    const { [name]: stateValue } = this.state;
    if (value !== stateValue) {
      this.setState({
        [name]: value,
      });
    }
  };

  handleResetFilter = () => {
    this.setState({ filterValue: '' });
  };

  handleTableSettingsBtn = () => {
    this.setState(prevState => {
      return {
        tableSettings: {
          checkboxVisible: !prevState.tableSettings.checkboxVisible,
          image: true,
          name: true,
          price: true,
          amount: true,
          description: true,
          operations: true,
          last: false,
        },
      };
    });
  };

  handleChangeTableSetting = e => {
    const { name, checked } = e.target;
    const { tableSettings } = this.state;

    const newtableSettings = {
      ...tableSettings,
      [name]: checked,
    };

    this.setState({
      tableSettings: newtableSettings,
    });
  };

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
    this.setState({
      editorActive: true,
      activeElement: undefined,
    });
  };

  handleClickDeleteBtn = id => {
    const { deleteProduct, orderedProducts, setAlert } = this.props;
    if (
      orderedProducts.find(orderProducts =>
        orderProducts.find(({ productId }) => productId === id),
      )
    ) {
      return setAlert({
        type: 'checkProductsInOrdersTab',
      });
    }
    return deleteProduct(id);
  };

  handleProductEditorAccept = async product => {
    const { id } = product;
    const { createProduct, editProduct } = this.props;

    if (id) {
      // edit product
      const callBackStatus = await editProduct(product);
      if (callBackStatus) this.handleChangeFlagEditor();
      return;
    }
    // create product
    const callBackStatus = await createProduct(product);
    if (callBackStatus) this.handleChangeFlagEditor();
  };

  render() {
    const { products } = this.props;
    const {
      editorActive,
      activeElement,
      filterValue,
      tableSettings,
    } = this.state;

    const { checkboxVisible } = tableSettings;

    const filteredProducts = () => {
      if (filterValue === '') return products;

      return products.filter(({ name, details }) => {
        if (
          name &&
          name.toLowerCase().includes(filterValue.toLowerCase())
        ) {
          return true;
        }
        if (
          details &&
          details.toLowerCase().includes(filterValue.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    };

    return (
      <MainLayout>
        <ControlsAndFilterWrapper>
          <Controlers
            onClickNewItem={this.handleClickNewBtn}
            onClickTableEdit={this.handleTableSettingsBtn}
          />
          {checkboxVisible && (
            <TableSettings
              settings={tableSettings}
              onToggle={this.handleChangeTableSetting}
            />
          )}
          <FilterInput
            name="filterValue"
            handleInput={this.handleInput}
            resetFilter={this.handleResetFilter}
            inputValue={filterValue}
          />
        </ControlsAndFilterWrapper>
        <ProductsTable
          className=""
          products={filteredProducts()}
          onClickEditBtn={this.handleClickEditBtn}
          onClickDeleteBtn={this.handleClickDeleteBtn}
          filterValue={filterValue}
          tableSettings={tableSettings}
        />
        <StyledProductEditor
          active={editorActive}
          className="myColors-dark border-top border-white"
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
