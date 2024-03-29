import { combineReducers } from 'redux';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import General from './General';
import Orders from './Orders';
import Products from './Products';
import Settings from './Settings';
import Auth from './Auth';

export default combineReducers({
  General,
  Orders,
  Products,
  Settings,
  Auth,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
