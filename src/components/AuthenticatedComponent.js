import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        if (this.props.route.path != "login") {
          browserHistory.push("/login");
        }
      } else {
        if (this.props.route.path != undefined) {
          browserHistory.push("/");
        }
      }
    }
    render() {
      return (
        <div>
          <Component {...this.props} />
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  AuthenticatedComponent.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    routes: React.PropTypes.any
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
}
