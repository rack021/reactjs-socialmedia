import * as UserActions from "../actions/UserActions";
const initialState = {
  isFetching: false,
  profile: {
    fristName: "",
    lastName: null,
    username: null,
    email: null
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UserActions.PROFILE_REQUEST:
      return { ...state, isFetching: true };
    case UserActions.PROFILE_SUCCESS:
      return { ...state, isFetching: false, profile: action.profile };
    case UserActions.PROFILE_FAILURE:
      return { ...state, isFetching: false };
  }
  return state;
}
