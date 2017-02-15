import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./routes";
import "./utils/index.js";
import "./styles/main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/theme-default/materialadmin.css";
import "./assets/css/theme-default/font-awesome.min.css";

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
