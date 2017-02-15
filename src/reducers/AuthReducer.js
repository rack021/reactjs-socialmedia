import * as AuthActions from "../actions/AuthActions";
const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem("id_token") ? true : false,
  errorMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AuthActions.LOGIN_REQUEST:
      state = { ...state, isFetching: true };
      break;
    case AuthActions.LOGIN_SUCCESS:
      state = { ...state, isFetching: false, isAuthenticated: true, errorMessage: "" };
      break;
    case AuthActions.LOGIN_FAILURE:
      state = { ...state, isFetching: false, errorMessage: action.message };
      break;
    case AuthActions.LOGOUT_REQUEST:
      state = { ...state, isFetching: true };
      break;
    case AuthActions.LOGOUT_SUCCESS:
      state = { ...state, isFetching: false, isAuthenticated: false };
      break;
    case AuthActions.LOGOUT_FAILURE:
      state = { ...state, isFetching: false };
      break;
  }
  return state;
}
