import {
    FETCH_NPS_START, 
    FETCH_NPS_SUCCESS,
    FETCH_NPS_FAILURE,
    ADD_NPS_START, 
    ADD_NPS_SUCCESS,
    ADD_NPS_FAILURE,
    UPDATE_NPS_START, 
    UPDATE_NPS_SUCCESS,
    UPDATE_NPS_FAILURE,
    DELETE_NPS_START, 
    DELETE_NPS_SUCCESS,
    DELETE_NPS_FAILURE
} from '../actions'

const INITIAL_STATE = {
    NPS: [],
    dreamNPS: [],
    currentNPS: {},
    errors: {},

}

export default function NPSReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_NPS_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_NPS_SUCCESS:
            return {
                ...state,
                fetching: false,
                NPS: action.payload
            }
        case FETCH_NPS_FAILURE:
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }
        case ADD_NPS_START:
            return {
                ...state
            }
        case ADD_NPS_SUCCESS:
            return {
                ...state,
                NPS: [action.payload, ...state.NPS],
                dreamNPS: [action.payload, ...state.dreamNPS]
            }
        case ADD_NPS_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case UPDATE_NPS_START:
            return {
                ...state,
            }
        case UPDATE_NPS_SUCCESS:
            const filtered = state.dreamNPS.filter(NPS => {
                return NPS.id !== action.payload.id;
            });
            return {
                ...state,
                dreamNPS: [action.payload, ...filtered]
            }
        case UPDATE_NPS_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case DELETE_NPS_START:
            return {
                ...state
            }
        case DELETE_NPS_SUCCESS:
            const { dreamNPS } = state;
            const filteredNPS = dreamNPS.filter(NPS => {
                return NPS.id !== action.payload;
            });
            return {
                ...state,
                dreamNPS: [...filteredNPS]
            }
        case DELETE_NPS_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}