import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
const headImage = require("../../img/img16.jpg");

class Profile extends Component {
  render() {
    let divStyle = {
      backgroundImage: "url(" + headImage + ")"
    };
    return (
      <section className="full-bleed">
        <div className="section-body style-default-dark force-padding text-shadow">
          <div className="img-backdrop" style={divStyle}> </div>
          <div className="overlay overlay-shade-top stick-top-left height-3" />
          <div className="row">
            <div className="col-md-3 col-xs-5">
              <img className="img-circle border-white border-xl img-responsive auto-width" src={require("../../assets/img/avatar1.jpg")} alt="" />
              <h3>{this.props.fristName + " " + this.props.lastName}<br /><small>Consultant at CodeCovers</small></h3>
            </div>
            <div className="col-md-9 col-xs-7">
              <div className="width-3 text-center pull-right">
                <strong className="text-xl">643</strong><br />
                <span className="text-light opacity-75">followers</span>
              </div>
              <div className="width-3 text-center pull-right">
                <strong className="text-xl">108</strong><br />
                <span className="text-light opacity-75">following</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.user.profile
  };
}

Profile.propTypes = {};

export default connect(mapStateToProps, {})(Profile);
