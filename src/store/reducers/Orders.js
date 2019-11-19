import { orderActions } from '../actions/ordersActions';

const initialState = {
  fetched: false,
  errorMessage: null,
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case orderActions.FETCH_ORDERS: {
      return state;
    }
    case orderActions.FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
        orders: action.payload,
        fetched: true,
      };
    }
    case orderActions.CHANGE_STATUS: {
      return state;
    }
    case orderActions.CHANGE_STATUS_SUCCESS: {
      const { status, id } = action.payload;
      return {
        ...state,
        errorMessage: null,
        orders: state.orders.map(order => {
          if (order.id === id) {
            return { ...order, status };
          }
          return order;
        }),
      };
    }
    case orderActions.DELETE_ORDER: {
      return state;
    }
    case orderActions.DELETE_ORDER_SUCCESS: {
      const { id } = action.payload;
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== id),
      };
    }
    case orderActions.CREATE_ORDER: {
      return state;
    }
    case orderActions.CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
        products: [...state.orders, action.payload],
      };
    }

    case orderActions.DELETE_ORDER_FAILURE:
    case orderActions.CHANGE_STATUS_FAILURE:
    case orderActions.CREATE_ORDER_FAILURE:
    case orderActions.FETCH_ORDERS_FAILURE: {
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
