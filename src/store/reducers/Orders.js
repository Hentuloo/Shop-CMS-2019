import { orderActions } from '../actions';

const initialState = {
  fetched: false,
  errorMessage: null,
  orders: [],
};
// [
//     {
//         products: [
//             {
//                 productId: 22,
//                 amount: 2,
//             },
//         ],
//         id: 15,
//         status: 1,
//         amount: 1,
//         date: new Date().toISOString().substring(0, 10),
//         address: 'Dębo222209-200 Sierpc',
//         email: '2@gmail.com1234',
//         details: `Lorem ipsum dolor sit, amet consectetur
//         adipisicing elit. Optio laborum beatae nisi fugiat fu
//         ga rerum velit ducimus! Odio aspernatur odit velit, nemo, ad
//          numquam voluptatum aut, est veniam quis magni!`,
//     },

// ];

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

    case orderActions.DELETE_ORDER_FAILURE:
    case orderActions.CHANGE_STATUS_FAILURE:
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
