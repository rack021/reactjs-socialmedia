import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import SideMenu from "../../components/SideMenu";
import { userProfileRequest } from "../../actions/UserActions";
import { mianMenuToggle } from "../../actions/AppActions";

class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onHoverContent = this.onHoverContent.bind(this);
  }

  componentWillMount() {
    this.props.userProfileRequest();
  }

  onHoverContent(event) {
    this.props.mianMenuToggle(event, false);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="base">
          <div id="content" onMouseEnter={this.onHoverContent}>
            ~ Main content goes here ~
          </div>
          <SideMenu />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

LandingPage.propTypes = {
  userProfileRequest: React.PropTypes.func.isRequired
};
export default connect(mapStateToProps, { userProfileRequest, mianMenuToggle })(LandingPage);
