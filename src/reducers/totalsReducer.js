import {
    UPDATE_PROMOTERS,
    UPDATE_PASSIVES,
    UPDATE_DETRACTORS,
    CLEAR_FORM 
} from '../actions'

const initialState = {
    totalPromoters: 0,
    totalPassives: 0,
    totalDetractors: 0,
    clearForm: false
}

const totalsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_PROMOTERS:
            return {
                ...state,
                totalPromoters: action.payload
            };

        case UPDATE_PASSIVES:
            return {
                ...state,
                totalPassives: action.payload
            };
        
        case UPDATE_DETRACTORS:
            return {
                ...state,
                totalDetractors: action.payload
            }
        case CLEAR_FORM:
            return {
                ...state,
                clearForm: action.payload
            }
        default:
            return state
    }
};

export default totalsReducer;