import axios from "axios";
import * as ApiConstant from "../utils/ApiConstant";

export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";

function requestProfile() {
  return {
    type: PROFILE_REQUEST,
    isAuthenticated: false
  };
}

function receiveProfile(profile) {
  return {
    type: PROFILE_SUCCESS,
    profile
  };
}
function profileError() {
  return {
    type: PROFILE_FAILURE,
    isFetching: false
  };
}

export function userProfileRequest() {
  return dispatch => {
    dispatch(requestProfile());
    axios
      .get(ApiConstant.getApi(ApiConstant.USER_PROFILE), {
        params: {
          access_token: localStorage.getItem("id_token")
        }
      })
      .then(function(response) {
        dispatch(receiveProfile(response.data));
      })
      .catch(function(err) {
        dispatch(profileError(err));
      });
  };
}
