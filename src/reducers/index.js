import { combineReducers } from 'redux';
import totalsReducer from './totalsReducer';
import authReducer from './authReducer';

export default combineReducers({
    totals: totalsReducer,
    auth: authReducer
});