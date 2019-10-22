const initialState = {
    products: [
        {
            id: 1,
            image: 'https://unsplash.it/200/200',
            name: 'okulary wodoszczelne',
            amount: 3,
        },
        {
            id: 2,
            image: 'https://unsplash.it/200/200',
            name: 'okulary wodoszczelne',
            amount: 3,
        },
        {
            id: 3,
            image: 'https://unsplash.it/200/200',
            name: 'okulary wodoszczelne',
            amount: 3,
        },
        {
            id: 4,
            image: 'https://unsplash.it/200/200',
            name: 'okulary wodoszczelne',
            amount: 3,
        },
    ],
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.tyepe) {
        default:
            return state;
    }
};
