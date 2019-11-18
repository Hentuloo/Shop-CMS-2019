import { orderActions } from '../actions/ordersActions';

const initialState = {
  fetched: true,
  errorMessage: null,
  orders: [
    {
      address: 'Aldlyn Goldbourne',
      date: '2019-11-03',
      details:
        'Small and lightweight 3.8x zoom capability with focal range of 40',
      email: '22fd@ds222h.pl',
      products: [
        {
          amount: 1,
          productId: 'U2ZRL0S9qONCfuNNHf7R',
        },
      ],
      status: 3,
      id: 'A00bhYTnuJ6prbY8YWlt',
    },
    {
      address: 'Janbourne - Lindale',
      date: '2019-11-03',
      details: '',
      email: 'dsdsd@shop.pl',
      products: [
        {
          amount: 1,
          productId: 'DVvjKoZWSYb1YhPbB1eg',
        },
      ],
      status: 3,
      id: 'GI1oOOxRIFwDUNVTWtnH',
    },
    {
      address: 'Poland Płock 215/2',
      date: '2019-11-03',
      details:
        'e of the town is usually the first impression on people passing through or coming to live. If you are a property developer and have a town to name, you can name it with the features of the land in mind, for example,',
      email: 'asfd@sShhh.pl',
      products: [
        {
          amount: 20,
          productId: 'QN49SS18V8noujE1Fz5c',
        },
      ],
      status: 3,
      id: 'WFwAQNtGIPTyIBYEnV3W',
    },
    {
      address: 'Hollowlake 12/3',
      date: '2019-11-03',
      details: '',
      email: 'dhjgkm@wp.pl',
      products: [
        {
          amount: 3,
          productId: 'EBTiso3ozgmIKOuzmHr1',
        },
      ],
      status: 1,
      id: 'cxSTwnVB9HgiaacIdreR',
    },
    {
      address: 'Mallowcastle 23',
      amount: 1,
      date: '2019-11-03',
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      email: 'janKowal@wp.pl',
      products: [
        {
          amount: 1,
          productId: 'dnQZcpUz8UxUJMmvY61x',
        },
      ],
      status: 1,
      id: 'hCyRt4Sr4swFGPNmw4xP',
    },
    {
      address: 'Edgedale',
      date: '2019-11-03',
      details:
        'e of the town is usually the first impression on people passing through or coming to live. If you are a property developer and have a town to name, you can name it with the features of the land in mind, for example,',
      email: '12sdf35sss@sd1.pl',
      products: [
        {
          amount: 2,
          productId: 'btZu5LfWiM6C48cooHJP',
        },
        {
          amount: 1,
          productId: 'xFheMB1W0NaxWWNlB240',
        },
        {
          amount: 1,
          productId: 'U2ZRL0S9qONCfuNNHf7R',
        },
      ],
      status: 3,
      id: 'kBmjbtqPlRuY5kQFocVm',
    },
    {
      address: 'Białe błoto 23',
      amount: 1,
      date: '2019-11-03',
      details: 'Please pack it securely',
      email: 'janKowal@wp.pl',
      products: [
        {
          amount: 2,
          productId: 'EBTiso3ozgmIKOuzmHr1',
        },
        {
          amount: 1,
          productId: 'U2ZRL0S9qONCfuNNHf7R',
        },
      ],
      status: 1,
      id: 'r9TuFphcb2sL6inD8bYB',
    },
    {
      address: 'Oldview p.32/3',
      date: '2019-11-03',
      details: 'Lore',
      email: 'ddsaeLorem@wp.pl',
      products: [
        {
          amount: 1,
          productId: 'dnQZcpUz8UxUJMmvY61x',
        },
        {
          amount: 3,
          productId: 'zKcJL1jTTdkuLgagZ3f1',
        },
      ],
      status: 2,
      id: 'vVb7itNHoY7hqpnPPzx8',
    },
  ],
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
