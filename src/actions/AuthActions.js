import axios from "axios";
import * as ApiConstant from "../utils/ApiConstant";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  };
}

function loginError(err) {
  let message = "Netword Error";
  if (err.response) {
    switch (err.response.status) {
      case 401:
        message = "You have entered an invalid username or password";
        break;
      case 500:
        message = "Oop! Got some problem, Try agin larer";
        break;
    }
  }
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message: message
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

export function userLogoutRequest() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem("id_token");
    dispatch(receiveLogout());
  };
}

export function userLoginRequest(creds) {
  return dispatch => {
    dispatch(requestLogin(creds));
    axios
      .post(ApiConstant.getApi(ApiConstant.USER_LOGIN), creds)
      .then(function(response) {
        localStorage.setItem("id_token", response.data.token);
        dispatch(receiveLogin(response.data));
      })
      .catch(function(err) {
        dispatch(loginError(err));
      });
  };
}
