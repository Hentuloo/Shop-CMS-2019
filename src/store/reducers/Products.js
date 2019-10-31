import { productActions } from '../actions';

const initialState = [
    {
        id: 22,
        index: 44,
        image: {
            src:
                'https://cdn.pixabay.com/photo/2017/06/25/19/50/sunset-2441776_960_720.jpg',
            title: 'mój obrazek i przedmiot',
        },
        name: 'special product',
        details:
            'sssssssssssssssssssssssssssssssssssssssssssssssssssssss Lorem ipsum dolor sit amet conse informacje odnośne',
        amount: 12,
    },
    {
        id: 1,
        index: 1,
        image: {
            src:
                'https://cdn.pixabay.com/photo/2019/10/17/21/17/clown-4557864_960_720.jpg',
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
            src:
                'https://cdn.pixabay.com/photo/2019/08/28/14/24/tokyo-4436914_960_720.jpg',
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
            src:
                'https://cdn.pixabay.com/photo/2019/08/08/11/22/autumn-leaves-4392723_960_720.jpg',
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
            src:
                'https://cdn.pixabay.com/photo/2019/10/18/09/29/cat-4558651_960_720.jpg',
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
            src:
                'https://cdn.pixabay.com/photo/2019/08/13/02/03/night-4402380_960_720.jpg',
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
        case productActions.CREATE_PROJECT: {
            return [...state, action.payload];
        }
        case productActions.EDIT_PROJECT: {
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload;
                }
                return product;
            });
        }
        case productActions.DELETE_PROJECT: {
            return state.filter(product => product.id !== action.payload.id);
        }
        default:
            return state;
    }
};
