// import { ProductActions } from '../actions';

const initialState = [
    {
        id: 21,
        title: 'Nazwa posta',
        url: '/#comments',
        content: {
            id: 3223,
            autor: 'Taki se janusz',
            date: new Date().toISOString().substring(0, 10),
            content:
                'Ale zajebisty towar taki ze juz nie mogé Ale zajebisty towar taki ze juz nie mogé Ale zajebisty towar taki ze juz nie mogé Ale zajebisty towar taki ze juz nie mogé Ale zajebisty towar taki ze juz nie mogé',
            childrens: [
                {
                    id: 13213,
                    autor: 'adam jakis',
                    date: new Date().toISOString().substring(0, 10),
                    content: 'Ale zajebisty towar taki ze juz nie mogé',
                },
                {
                    id: 5,
                    autor: 'adam jakis',
                    date: new Date().toISOString().substring(0, 10),
                    content: 'Ale zajebisty towar taki ze juz nie mogé',
                },
                {
                    id: 15,
                    autor: 'adam jakis',
                    date: new Date().toISOString().substring(0, 10),
                    content: 'Ale zajebisty towar taki ze juz nie mogé',
                },
                {
                    id: 25,
                    autor: 'adam jakis',
                    date: new Date().toISOString().substring(0, 10),
                    content: 'Ale zajebisty towar taki ze juz nie mogé',
                },
            ],
        },
    },
    {
        id: 22,
        title: 'Nazwa posta',
        url: '/#comments',
        content: {
            id: 3223,
            autor: 'Taki se janusz',
            date: new Date().toISOString().substring(0, 10),
            content: 'Ale zajebisty towar taki ze juz nie mogé',
            childrens: [],
        },
    },
    {
        id: 222,
        title: 'Nazwa posta',
        url: '/#comments',
        content: {
            id: 3223,
            autor: 'Taki se janusz',
            date: new Date().toISOString().substring(0, 10),
            content: 'Ale zajebisty towar taki ze juz nie mogé',
            childrens: [],
        },
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        // case ProductActions.CREATE_PROJECT: {
        //     return [...state, action.payload];
        // }
        default:
            return state;
    }
};
