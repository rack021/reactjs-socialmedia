import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";
import reducers from "./reducers";

const middleware = applyMiddleware(promise, thunk, logger());

export default createStore(reducers, middleware);
