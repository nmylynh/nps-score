import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions";

import jwtDecode from "jwt-decode";

const INITIAL_STATE = (token => ({
  loggedIn: false,
  currentUser: token ? jwtDecode(token) : 0,
  registerSuccess: false,
  loading: false,
  errors: []
}))(localStorage.getItem("jwt"));

export default function authReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case LOGOUT_USER:
      localStorage.removeItem("jwt");
      return {
        ...state,
        loggedIn: false,
        currentUser: 0
      };
    case LOGIN_START:
      return {
        ...state,
        loggedIn: false,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        currentUser: payload,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        errors: payload,
        loading: false
      };
    case REGISTER_START:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        errors: null,
        registerSuccess: true,
        loading: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        errors: payload,
        loading: false
      };
    default:
      return state;
  }
}
