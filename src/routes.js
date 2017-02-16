import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import { requireAuthentication } from "./components/AuthenticatedComponent";
import RegisterPage from "./containers/register/";
import LoginPage from "./containers/login";
import LadingPage from "./containers/LandingPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuthentication(LadingPage)} />
    <Route path="login" component={requireAuthentication(LoginPage)} />
    <Route path="register" component={requireAuthentication(RegisterPage)} />
    <Route path=":id" component={requireAuthentication(LadingPage)} />
  </Route>
);
