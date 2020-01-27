import axios from "axios";

export const FETCH_USER_NPS_START = "FETCH_USER_NPS_START";
export const FETCH_USER_NPS_SUCCESS = "FETCH_USER_NPS_SUCCESS";
export const FETCH_USER_NPS_FAILURE = "FETCH_USER_NPS_FAILURE";

export const FETCH_NPS_START = "FETCH_NPS_START";
export const FETCH_NPS_SUCCESS = "FETCH_NPS_SUCCESS";
export const FETCH_NPS_FAILURE = "FETCH_NPS_FAILURE";

export const ADD_NPS_START = "ADD_NPS_START";
export const ADD_NPS_SUCCESS = "ADD_NPS_SUCCESS";
export const ADD_NPS_FAILURE = "ADD_NPS_FAILURE";

export const UPDATE_NPS_START = "UPDATE_NPS_START";
export const UPDATE_NPS_SUCCESS = "UPDATE_NPS_SUCCESS";
export const UPDATE_NPS_FAILURE = "UPDATE_NPS_FAILURE";

export const DELETE_NPS_START = "DELETE_NPS_START";
export const DELETE_NPS_SUCCESS = "DELETE_NPS_SUCCESS";
export const DELETE_NPS_FAILURE = "DELETE_NPS_FAILURE";

//Switches base_url based on environment variable
const BASE_URL = "https://nmylynh-nps.herokuapp.com";

const token = {
  headers: { authorization: localStorage.getItem("jwt") }
};

//Fetches all NPS entries
export const fetchNPS = () => dispatch => {
  dispatch({ type: FETCH_NPS_START });

  return axios
    .get(`${BASE_URL}/nps`, token)
    .then(res => {
      dispatch({
        type: FETCH_NPS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_NPS_FAILURE,
        payload: err
      });
    });
};

// Fetches all nps of a user by user id
export const fetchUserNPS = id => dispatch => {
  dispatch({ type: FETCH_USER_NPS_START });

  axios
    .get(`${BASE_URL}/users/${id}/nps`, token)
    .then(res => {
      dispatch({
        type: FETCH_USER_NPS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USER_NPS_FAILURE,
        payload: err
      });
    });
};

//Fetches single NPS by id
export const fetchNPSById = id => dispatch => {
  dispatch({ type: FETCH_NPS_START });

  axios
    .get(`${BASE_URL}/nps/${id}`, token)
    .then(res => {
      dispatch({
        type: FETCH_NPS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_NPS_FAILURE,
        payload: err
      });
    });
};

//Adds new NPS entry
export const addNPS = sentNPS => dispatch => {
  dispatch({ type: ADD_NPS_START });
  return axios
    .post(`${BASE_URL}/nps`, sentNPS, token)
    .then(res => {
      dispatch({
        type: ADD_NPS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_NPS_FAILURE,
        payload: err
      });
    });
};

//Updates NPS entry by id
export const updateNPS = editedNPS => dispatch => {
  dispatch({ type: UPDATE_NPS_START });
  axios
    .put(`${BASE_URL}/nps/${editedNPS.id}`, editedNPS, token)
    .then(res => {
      dispatch({
        type: UPDATE_NPS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_NPS_FAILURE,
        payload: err
      });
    });
};

//Deletes NPS entry by id
export const deleteNPS = id => dispatch => {
  dispatch({ type: DELETE_NPS_START });

  axios
    .delete(`${BASE_URL}/nps/${id}`, token)
    .then(res => {
      dispatch({
        type: DELETE_NPS_SUCCESS,
        payload: id
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_NPS_FAILURE,
        payload: err
      });
    });
};
