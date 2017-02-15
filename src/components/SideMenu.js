import React, { Component } from "react";
import { connect } from "react-redux";
import { mianMenuToggle } from "../actions/AppActions";

class SideMenu extends Component {
  render() {
    return (
      <div id="menubar" className="menubar animate">
        <div className="nano has-scrollbar">
          <div className="menubar-scroll-panel">
            <ul id="main-menu" className="gui-controls gui-controls-tree" onMouseEnter={this.props.mianMenuToggle} onMouseLeave={this.props.mianMenuToggle}>
              <li><small>DIVIDER</small></li>
              <li className="active">
                <a href="#" className="active">
                  <div className="gui-icon"><i className="fa fa-home" /></div>
                  <span className="title">Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="gui-icon"><i className="fa fa-dashboard" /></div>
                  <span className="title">Dashboard</span>
                </a>
              </li>
              ...
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { mianMenuToggle })(SideMenu);
