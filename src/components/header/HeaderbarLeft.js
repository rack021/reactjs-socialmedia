import React, { Component } from "react";
import { connect } from "react-redux";
import { mianMenuToggle } from "../../actions/AppActions";

class HeaderbarLeft extends Component {
  render() {
    return (
      <div className="headerbar-left">
        <ul className="header-nav header-nav-options">
          <li className="header-nav-brand">
            <div className="brand-holder">
              <a href="../../html/dashboards/dashboard.html">
                <span className="text-lg text-bold text-primary">Château de Versailles</span>
              </a>
            </div>
          </li>
          <li>
            <a className="btn btn-icon-toggle menubar-toggle" onClick={this.props.mianMenuToggle} data-toggle="menubar" href="javascript:void(0);">
              <i className="fa fa-bars" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { mianMenuToggle })(HeaderbarLeft);
