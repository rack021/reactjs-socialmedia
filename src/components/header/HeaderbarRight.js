import React, { Component } from "react";
import HeadUserControl from "./HeadUserControl";

class HeaderbarRight extends Component {
  render() {
    return (
      <div className="headerbar-right">
        <ul className="header-nav header-nav-options">
          <li className="dropdown hidden-xs">
            <a href="javascript:void(0);" className="btn btn-icon-toggle btn-default" data-toggle="dropdown" aria-expanded="true">
              <i className="fa fa-bell" /><sup className="badge style-danger">0</sup>
            </a>
          </li>
        </ul>
        <HeadUserControl />
      </div>
    );
  }
}

export default HeaderbarRight;
