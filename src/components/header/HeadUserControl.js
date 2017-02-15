import React, { Component } from "react";
import { userLogoutRequest } from "../../actions/AuthActions";
import { connect } from "react-redux";
import classnames from "classnames";

class HeadUserControl extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
    this.logout = this.logout.bind(this);
    this.open = this.open.bind(this);
  }
  open() {
    this.setState({ open: this.state.open ? false : true });
  }
  logout() {
    this.props.userLogoutRequest();
  }
  render() {
    let open = classnames("dropdown", { open: this.state.open });
    return (
      <ul className="header-nav header-nav-profile">
        <li className={open}>
          <a href="javascript:void(0);" className="dropdown-toggle ink-reaction" onClick={this.open} data-toggle="dropdown" aria-expanded={this.state.open}>
            <img src={require("../../assets/img/avatar1.jpg")} alt="" />
            <span className="profile-info">
              {this.props.fristName}
              <small>Administrator</small>
            </span>
          </a>
          <ul className="dropdown-menu animation-dock">
            <li className="dropdown-header">Config</li>
            <li><a href="../../html/pages/profile.html">My profile</a></li>
            <li><a href="../../html/pages/blog/post.html">My blog <span className="badge style-danger pull-right">16</span></a></li>
            <li><a href="../../html/pages/calendar.html">My appointments</a></li>
            <li className="divider" />
            <li><a href="../../html/pages/locked.html"><i className="fa fa-fw fa-lock" /> Lock</a></li>
            <li><a href="javascript:void(0)" onClick={this.logout}><i className="fa fa-fw fa-power-off text-danger" /> Logout</a></li>
          </ul>
        </li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    fristName: state.user.profile.fristName
  };
}

HeadUserControl.propTypes = {
  userLogoutRequest: React.PropTypes.func.isRequired,
  fristName: React.PropTypes.string
};
export default connect(mapStateToProps, { userLogoutRequest })(HeadUserControl);
