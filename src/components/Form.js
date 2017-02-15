import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="form floating-label" onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}
Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default Form;
