import React, { PropTypes } from "react";
import classnames from "classnames";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    let menuClass = classnames("menubar-hoverable", { "menubar-visible": this.props.menuOpen });
    return (
      <div className={menuClass}>
        {this.props.children}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { menuOpen: state.app.menuOpen };
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  menuOpen: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);
