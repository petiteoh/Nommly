import React from "react";
import { Link } from "react-router-dom";

class SignupPasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: this.props.email, password: "", display_name: "", errors: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.isValidPassword(this.state.password)) {
      this.props.signup(this.state).then(
        (response) => {
          this.props.history.push("/");
        }, 
        (err) => {
          console.log(err.responseJSON);
        });
    } else {
      this.setState({errors: "Password must be 8 or more characters."})
    }
  }

  isValidPassword(input) {
    if (input.length < 7) {
      return false;
    } else {
      return true;
    };
  };

    renderErrors() {
      return (
        <ul className="signup-password-errors-container">
          {this.props.errors.map((error, i) => (
            <li className="signup-password-error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    };

    render() {
        let errorMessage;
        if (this.state.errors) {
          errorMessage = (
            <p className="signup-password-errors">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.errors}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          );
        };

        return (
          <div className="signup-password-form-container">
            <div className="signup-password-backlink-container">
              <p className="signup-password-less-icon">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </p>
              {this.props.navLink}
            </div>
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <h1 className="signup-welcome-message">Welcome!</h1>
              <h1 className="signup-password-sub-message">
                Please create your password
              </h1>
              <label className="signup-password-label">
                <input
                  autoCapitalize="off"
                  placeholder="Password"
                  className="signup-password-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              {this.renderErrors()}
              {errorMessage}
              <br></br>
              <h1 className="signup-greeting-message">
                How Shall We Greet You?
              </h1>
              <label className="display-name-label">
                <input
                  autoCapitalize="off"
                  placeholder="Your Name"
                  type="string"
                  className="display-name-input"
                  value={this.state.display_name}
                  onChange={this.update("display_name")}
                />
              </label>
              <br></br>
              <button className="signup-password-button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        );
    };
};

export default SignupPasswordForm;