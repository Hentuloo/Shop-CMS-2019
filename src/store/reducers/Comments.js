import { commentsActions } from '../actions';

const initialState = {
    fetched: false,
    errorMessage: null,
    comments: [
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
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case commentsActions.FETCH_COMMENTS: {
            return state;
        }
        case commentsActions.FETCH_COMMENTS_SUCCESS: {
            return {
                ...state,
                errorMessage: null,
                orders: action.payload,
                fetched: true,
            };
        }
        case commentsActions.FETCH_COMMENTS_FAILURE: {
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
