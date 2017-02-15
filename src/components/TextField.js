import React, { Component } from "react";
import classnames from "classnames";

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dirtyClass: false,
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value === "") {
      this.setState({ dirtyClass: false });
    } else {
      this.setState({ dirtyClass: true });
    }
    const { filter } = this.props;
    const newValue = filter ? filter(event.target.value) : event.target.value;

    this.setState({ value: newValue });
    this.props.onChange(event);
  }

  get value() {
    return this.state.value;
  }

  render() {
    const { id, isvalid, type, errorMsg, label, fproute, fptxt } = this.props;
    let inputClass = classnames("form-control", { dirty: this.state.dirtyClass });
    let formGroupClass = classnames("form-group", { "has-error": !isvalid });
    let errorClass = classnames("help-block", { hidden: isvalid });
    return (
      <div className={formGroupClass}>
        <input id={id} name={id} type={type} className={inputClass} onChange={this.handleChange} onBlur={this.handleChange} value={this.state.value} />
        <span className={errorClass}>{errorMsg}</span>
        <label htmlFor={id}>{label}</label>
        <p className="pw-forgot">
          <a href={fproute}>
            {fptxt}
          </a>
        </p>
      </div>
    );
  }
}

TextField.propTypes = {
  filter: React.PropTypes.string,
  onChange: React.PropTypes.func,
  id: React.PropTypes.string,
  isvalid: React.PropTypes.bool.isRequired,
  type: React.PropTypes.string.isRequired,
  errorMsg: React.PropTypes.string,
  label: React.PropTypes.string,
  fproute: React.PropTypes.string,
  fptxt: React.PropTypes.string
};

export default TextField;
