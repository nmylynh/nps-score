import { combineReducers } from 'redux';
import totalsReducer from './totalsReducer'

export default combineReducers({
    totals: totalsReducer
});