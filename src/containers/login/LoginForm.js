import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import validator from "validator";
import { userLoginRequest } from "../../actions/AuthActions";
import TextField from "../../components/TextField";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import Form from "../../components/Form";

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fields: { username: null, password: null },
      submitDisable: true
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  _isValid(event) {
    let isValid = true;
    let fields = this.state.fields;
    for (let key in fields) {
      const el = this.refs[key];
      if (event) {
        if (event.target.id === key) {
          fields[key] = this._validate(el);
        }
      } else {
        fields[key] = this._validate(el);
      }
      isValid = fields[key] === null ? false : fields[key];
    }
    this.setState({ fields });
    return isValid;
  }

  formData() {
    const data = {};
    let fields = this.state.fields;
    for (let key in fields) {
      data[key] = this.refs[key].state.value;
    }
    return data;
  }

  onChange(event) {
    if (this._isValid(event)) {
      this.setState({ submitDisable: false });
    } else {
      this.setState({ submitDisable: true });
    }
  }

  _validate(el) {
    switch (el.props.validator) {
      case "required": {
        return !validator.isEmpty(el.value);
      }
      default: {
        return true;
      }
    }
  }

  onSubmitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this._isValid()) {
      this.props.userLoginRequest(this.formData());
    }
  }

  render() {
    const submitDisable = this.state.submitDisable ? true : this.props.isFetching;
    let formGroupClass = classnames("form-group", { "has-error": true });
    return (
      <Form onSubmit={this.onSubmitHandler}>
        <div className="has-error text-center">
          <span className="text-danger">{this.props.errorMessage}</span>
        </div>

        <TextField
          ref="username"
          id="username"
          type="text"
          isvalid={this.state.fields.username == null ? true : this.state.fields.username}
          label="Username"
          onChange={this.onChange}
          validator="required"
          errorMsg="username can not empty"
        />
        <TextField
          ref="password"
          id="password"
          type="password"
          isvalid={this.state.fields.password == null ? true : this.state.fields.password}
          label="Password"
          onChange={this.onChange}
          validator="required"
          errorMsg="password can not empty"
          fptxt="Forgotten?"
          fproute="register"
        />
        <br />
        <div className="row">
          <div className="col-xs-6 text-left">
            <Checkbox label="Remember me" />
          </div>
          <div className="col-xs-6 text-right">
            <Button type="submit" text="login" disabled={submitDisable} />
          </div>
        </div>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.auth.isFetching,
    errorMessage: state.auth.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return { userLoginRequest };
}

LoginForm.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  errorMessage: React.PropTypes.string.isRequired
};

export default connect(mapStateToProps, { userLoginRequest })(LoginForm);
