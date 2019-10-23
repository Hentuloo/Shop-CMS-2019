import { Actions } from '../actions';

const initialState = [
    {
        id: 1,
        index: 1,
        image: {
            src: 'https://unsplash.it/200/200',
            title: 'Tytuł',
        },
        name: 'okulary wodoszczelne',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio, magnam, animi quaerat enim voluptas inventore eum corporis vel nisi quasi eaque repellendus. Delectus consequatur porro sequi alias ut laudantium!',
        amount: 12,
    },
    {
        id: 2,
        index: 2,
        image: {
            src: 'https://unsplash.it/200/200',
            title: 'Tytuł',
        },
        name: 'okulary wodoszczelne',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio, magnam, animi quaerat enim voluptas inventore eum corporis vel nisi quasi eaque repellendus. Delectus consequatur porro sequi alias ut laudantium!',
        amount: 0,
    },
    {
        id: 3,
        index: 3,
        image: {
            src: 'https://unsplash.it/200/200',
            title: 'Tytuł',
        },
        name: 'okulary wodoszczelne',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio, magnam, animi quaerat enim voluptas inventore eum corporis vel nisi quasi eaque repellendus. Delectus consequatur porro sequi alias ut laudantium!',
        amount: 5,
    },
    {
        id: 4,
        index: 4,
        image: {
            src: 'https://unsplash.it/200/200',
            title: 'Tytuł',
        },
        name: 'okulary wodoszczelne',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio, magnam, animi quaerat enim voluptas inventore eum corporis vel nisi quasi eaque repellendus. Delectus consequatur porro sequi alias ut laudantium!',
        amount: 1,
    },
    {
        id: 5,
        index: 5,
        image: {
            src: 'https://unsplash.it/200/200',
            title: 'Tytuł',
        },
        name: 'okulary wodoszczelne',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio, magnam, animi quaerat enim voluptas inventore eum corporis vel nisi quasi eaque repellendus. Delectus consequatur porro sequi alias ut laudantium!',
        amount: 2,
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.CREATE_PROJECT: {
            console.log(action);
            return [...state, action.payload];
        }
        case Actions.EDIT_PROJECT: {
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload;
                }
                return product;
            });
        }
        case Actions.DELETE_PROJECT: {
            return state.filter(product => product.id !== action.payload.id);
        }
        default:
            return state;
    }
};
