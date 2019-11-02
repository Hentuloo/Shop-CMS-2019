import { productActions } from '../actions';

const initialState = {
  fetched: false,
  errorMessage: null,
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productActions.FETCH_PRODUCTS: {
      return state;
    }
    case productActions.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        fetched: true,
        errorMessage: null,
      };
    }
    case productActions.CREATE_PRODUCT: {
      return state;
    }
    case productActions.CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
        products: [...state.products, action.payload],
      };
    }

    case productActions.EDIT_PRODUCT: {
      return state;
    }
    case productActions.EDIT_PRODUCT_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product,
        ),
      };
    }
    case productActions.DELETE_PRODUCT: {
      return state;
    }
    case productActions.DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
        products: state.products.filter(
          product => product.id !== action.payload.id,
        ),
      };
    }
    case productActions.CREATE_PRODUCT_FAILURE:
    case productActions.FETCH_PRODUCTS_FAILURE:
    case productActions.EDIT_PRODUCT_FAILURE:
    case productActions.DELETE_PRODUCT_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.message,
        initialFetchStatus: true,
      };
    }
    default:
      return state;
  }
};
