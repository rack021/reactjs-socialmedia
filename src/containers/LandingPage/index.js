import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import Header from "../../components/header";
import SideMenu from "../../components/SideMenu";
import { userProfileRequest } from "../../actions/UserActions";
import { mianMenuToggle } from "../../actions/AppActions";
import profile from "../../components/profile";
import blog from "../../components/blog";
import Blank from "../../components/blank";

const Template = {
  profile,
  blog
};

class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onHoverContent = this.onHoverContent.bind(this);
  }

  componentWillMount() {
    this.props.userProfileRequest();
  }

  componentDidUpdate(nextProps) {
    this.updateView();
  }

  onHoverContent(event) {
    this.props.mianMenuToggle(event, false);
  }

  updateView() {
    for (let item of this.props.menu) {
      if (item.active === true && item.link.toLowerCase() != this.props.params.id) {
        browserHistory.push("/" + item.link);
        break;
      }
    }
  }

  render() {
    const Children = Template[this.props.params.id] ? Template[this.props.params.id] : profile;
    return (
      <div>
        <Header />
        <div id="base">
          <div id="content" onMouseEnter={this.onHoverContent}>
            <Children />
          </div>
          <SideMenu />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { menu: state.app.mainMenuList };
}

LandingPage.propTypes = {
  userProfileRequest: React.PropTypes.func.isRequired
};
export default connect(mapStateToProps, { userProfileRequest, mianMenuToggle })(LandingPage);
