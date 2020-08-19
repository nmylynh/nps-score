import {
  ADD_NPS_START,
  ADD_NPS_SUCCESS,
  ADD_NPS_FAILURE,
  FETCH_NPS_START,
  FETCH_NPS_SUCCESS,
  FETCH_NPS_FAILURE,
  UPDATE_NPS_START,
  UPDATE_NPS_SUCCESS,
  UPDATE_NPS_FAILURE,
  DELETE_NPS_START,
  DELETE_NPS_SUCCESS,
  DELETE_NPS_FAILURE,
  FETCH_USER_NPS_START,
  FETCH_USER_NPS_SUCCESS,
  FETCH_USER_NPS_FAILURE
} from "../actions";

const INITIAL_STATE = {
  userNPS: [],
  NPS: [],
  errors: {}
};

// CRUD operations that work but ATM not implemented
export default function NPSReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_USER_NPS_START:
      return {
        ...state
      };
    case FETCH_USER_NPS_SUCCESS:
      return {
        ...state,
        userNPS: payload
      };
    case FETCH_USER_NPS_FAILURE:
      return {
        ...state,
        errors: payload
      };
    case FETCH_NPS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_NPS_SUCCESS:
      return {
        ...state,
        fetching: false,
        NPS: payload
      };
    case FETCH_NPS_FAILURE:
      return {
        ...state,
        fetching: false,
        errors: payload
      };
    case ADD_NPS_START:
      return {
        ...state
      };
    case ADD_NPS_SUCCESS:
      return {
        ...state
      };
    case ADD_NPS_FAILURE:
      return {
        ...state,
        errors: payload
      };
    case UPDATE_NPS_START:
      return {
        ...state
      };
    case UPDATE_NPS_SUCCESS:
      const filtered = state.nps.filter(e => {
        return e.id !== payload.id;
      });
      return {
        ...state,
        nps: [payload, ...filtered]
      };
    case UPDATE_NPS_FAILURE:
      return {
        ...state,
        errors: payload
      };
    case DELETE_NPS_START:
      return {
        ...state
      };
    case DELETE_NPS_SUCCESS:
      const { nps } = state;
      const filteredNPS = nps.filter(e => {
        return e.id !== payload;
      });
      return {
        ...state,
        nps: [...filteredNPS]
      };
    case DELETE_NPS_FAILURE:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
}
