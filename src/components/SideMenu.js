import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { mianMenuToggle, menuItemClick } from "../actions/AppActions";

class SideMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(item, event) {
    this.props.menuItemClick(item.name);
  }

  render() {
    let MenuItems = this.props.menuList.map((item, i) => {
      let icon = classnames("fa " + item.icon);
      let active = classnames({ active: item.active });
      let boundItemClick = this.onClickHandler.bind(this, item);
      return (
        <li key={i} className={active}>
          <a href="javascript:void(0)" onClick={boundItemClick} tag={item.name}>
            <div className="gui-icon"><i className={icon} /></div>
            <span className="title">{item.name}</span>
          </a>
        </li>
      );
    });
    return (
      <div id="menubar" className="menubar animate" onMouseEnter={this.props.mianMenuToggle} onMouseLeave={this.props.mianMenuToggle}>
        <div className="nano has-scrollbar">
          <div className="menubar-scroll-panel">
            <ul id="main-menu" className="gui-controls gui-controls-tree">
              {MenuItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuList: state.app.mainMenuList
  };
}

export default connect(mapStateToProps, { mianMenuToggle, menuItemClick })(SideMenu);
