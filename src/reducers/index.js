import { combineReducers } from 'redux';
import totalsReducer from './totalsReducer';
import authReducer from './authReducer';
import npsReducer from './npsReducer'

export default combineReducers({
    nps: npsReducer,
    totals: totalsReducer,
    auth: authReducer
});