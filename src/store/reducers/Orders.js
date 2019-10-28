import { OrderActions } from '../actions';

const initialState = [
    {
        products: [
            {
                productId: 22,
                amount: 2,
            },
        ],
        id: 15,
        status: 1,
        amount: 1,
        date: new Date().toISOString().substring(0, 10),
        address: 'Dębo222209-200 Sierpc',
        email: '2@gmail.com1234',
        details: `Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Optio laborum beatae nisi fugiat fu
        ga rerum velit ducimus! Odio aspernatur odit velit, nemo, ad
         numquam voluptatum aut, est veniam quis magni!`,
    },
    {
        products: [
            {
                productId: 5,
                amount: 1,
            },
        ],
        id: 1,
        status: 2,
        amount: 1,
        date: new Date().toISOString().substring(0, 10),
        address: 'Dębowo 7 09-200 Sierpc',
        email: 'chentulooo@gmail.com1234',
        details: `Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Optio laborum beatae nisi fugiat fu
        ga rerum velit ducimus! Odio aspernatur odit velit, nemo, ad
         numquam voluptatum aut, est veniam quis magni!`,
    },
    {
        id: 2,
        products: [
            {
                productId: 5,
                amount: 1,
            },
            {
                productId: 2,
                amount: 5,
            },
        ],
        status: 1,
        amount: 2,
        date: new Date().toISOString().substring(0, 10),
        address: 'Dębowo 7 09-200 Sierpc',
        email: 'chentulooo@gmail.com1234',
        details: `Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Optio laborum beatae nisi fugiat fu
        ga rerum velit ducimus! Odio aspernatur odit velit, nemo, ad
         numquam voluptatum aut, est veniam quis magni!`,
    },
    {
        id: 3,
        products: [
            {
                productId: 5,
                amount: 1,
            },
            {
                productId: 2,
                amount: 5,
            },
        ],
        status: 2,
        amount: 1,
        productId: 3,
        date: new Date().toISOString().substring(0, 10),
        address: 'Dębowo 7 09-200 Sierpc',
        email: 'chentulooo@gmail.com1234',
        details: `Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Optio laborum beatae nisi fugiat fu
        ga rerum velit ducimus! Odio aspernatur odit velit, nemo, ad
         numquam voluptatum aut, est veniam quis magni!`,
    },
    {
        id: 4,
        products: [
            {
                productId: 5,
                amount: 1,
            },
            {
                productId: 2,
                amount: 5,
            },
        ],
        status: 2,
        amount: 0,
        productId: 3,
        date: new Date().toISOString().substring(0, 10),
        address: 'Dębowo 7 09-200 Sierpc',
        email: 'chentulooo@gmail.com1234',
        details: `Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Optio laborum beatae nisi fugiat fu
        ga rerum velit ducimus! Odio aspernatur odit velit, nemo, ad
         numquam voluptatum aut, est veniam quis magni!`,
    },
    {
        id: 5,
        products: [
            {
                productId: 5,
                amount: 1,
            },
            {
                productId: 2,
                amount: 5,
            },
        ],
        status: 3,
        amount: 3,
        productId: 1,
        date: new Date().toISOString().substring(0, 10),
        address: 'Dębowo 7 09-200 Sierpc',
        email: 'chentulooo@gmail.com1234',
        details: `Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Optio laborum beatae nisi fugiat fu
        ga rerum velit ducimus! Odio aspernatur odit velit, nemo, ad
         numquam voluptatum aut, est veniam quis magni!`,
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case OrderActions.CHANGE_STATUS: {
            const { status, id } = action.payload;
            return state.map(order => {
                if (order.id === id) {
                    return { ...order, status };
                }
                return order;
            });
        }
        case OrderActions.DELETE_ORDER: {
            const { id } = action.payload;
            return state.filter(order => order.id !== id);
        }
        default:
            return state;
    }
};
