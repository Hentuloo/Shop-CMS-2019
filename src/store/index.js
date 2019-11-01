import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import fbConfig from 'config/fbConfig';

import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default createStore(
    rootReducer,
    compose(
        composeWithDevTools(
            applyMiddleware(
                thunk.withExtraArgument({ getFirebase, getFirestore }),
            ),
            reduxFirestore(fbConfig),
        ),
    ),
);
