import React, { Component } from "react";
import HeadUserControl from "./HeadUserControl";
import HeaderbarLeft from "./HeaderbarLeft";
import HeaderbarRight from "./HeaderbarRight";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="headerbar">
          <HeaderbarLeft />
          <HeaderbarRight />
        </div>
      </header>
    );
  }
}
export default Header;
