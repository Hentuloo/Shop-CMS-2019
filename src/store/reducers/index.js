import { combineReducers } from 'redux';
import General from './General';
import Orders from './Orders';
import Products from './Products';
import Comments from './Comments';
import Settings from './Settings';

export default combineReducers({
    General,
    Orders,
    Products,
    Comments,
    Settings,
});
