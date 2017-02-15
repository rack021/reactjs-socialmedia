import url from "url";

export const BASE_URL = "http://localhost:8008";
export const USER_LOGIN = "/user/login";
export const USER_REGISTERATION = "/user/register";
export const USER_PROFILE = "/user/profile";

export function getApi(api) {
  return url.resolve(BASE_URL, api);
}
