import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import AppReducer from "./AppReducer";
const Reducers = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  app: AppReducer
});

export default Reducers;
