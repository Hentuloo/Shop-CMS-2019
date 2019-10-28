// import { ProductActions } from '../actions';

const initialState = {
    reffers: [
        {
            id: 123,
            title: 'Analytics',
            href: '#example',
            image: {
                src:
                    'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg',
                title: 'Image title',
            },
        },
        {
            id: 155,
            title: 'Facebook group',
            href: '#example',
            image: {
                src:
                    'https://cdn.pixabay.com/photo/2016/08/02/12/36/facebook-1563273_960_720.jpg',
                title: 'Image title',
            },
        },
        {
            id: 14,
            title: 'YouTube',
            href: '#example',
            image: {
                src:
                    'https://cdn.pixabay.com/photo/2015/01/05/17/19/film-589491_960_720.jpg',
                title: 'Image title',
            },
        },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        // case ProductActions.CREATE_PROJECT: {
        //     return [...state, action.payload];
        // }
        default:
            return state;
    }
};
