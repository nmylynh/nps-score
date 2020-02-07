import {
  UPDATE_PROMOTERS,
  UPDATE_PASSIVES,
  UPDATE_DETRACTORS,
  CLEAR_FORM
} from "../actions";

const initialState = {
  totalPromoters: 0,
  totalPassives: 0,
  totalDetractors: 0,
  clear: false
};

const totalsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PROMOTERS:
      return {
        ...state,
        totalPromoters: payload
      };

    case UPDATE_PASSIVES:
      return {
        ...state,
        totalPassives: payload
      };

    case UPDATE_DETRACTORS:
      return {
        ...state,
        totalDetractors: payload
      };
    case CLEAR_FORM:
      return {
        ...state,
        clear: payload
      };
    default:
      return state;
  }
};

export default totalsReducer;
