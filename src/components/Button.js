import React, { Component } from "react";

class Button extends Component {
  render() {
    const { disabled, type, text } = this.props;
    return <input className="btn btn-primary btn-raised" disabled={disabled} type={type} value={text} />;
  }
}

Button.propTypes = {
  disabled: React.PropTypes.bool
};
export default Button;
