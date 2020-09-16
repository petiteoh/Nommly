import React from "react";

class LoginPasswordForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: this.props.email, password: "", errors: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        debugger
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        debugger
        if (this.isValidPassword(this.state.password)) {
          debugger
          this.props.login(this.state).then((response) => {
              this.props.history.push("/")
          }, (err) => {
              console.log(err.responseJSON)
          });
        } else {
          this.setState({ errors: "INVALID EMAIL AND / OR PASSWORD COMBINATION" });
        }
    };

    isValidPassword(input) {
      if (input.length < 7) {
        return false;
      } else {
        return true;
      };
    };

    // renderErrors() {
    //     return (
    //       <ul className="login-password-form-errors-container">
    //         {this.props.errors.map((error, i) => (
    //           <li className="login-password-form-error" key={`error-${i}`}>
    //             {error}
    //           </li>
    //         ))}
    //       </ul>
    //     );
    // };
    
    // renderErrors() {
    //     return (
    //         this.props.errors.map((error, i) => (
    //           error
    //         ))
    //     );
    // };

    render() {
      // let errorMessageBefore = this.renderErrors();
      let errorMessage;
      if (this.state.errors) {
        errorMessage = (
          <p className="login-password-form-errors">
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
          <div className="login-password-form-container">
            <div className="login-password-backlink-container">
              <p className="login-password-less-icon">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </p>
              {this.props.navLink}
            </div>
            <h1 className="login-password-header-message">Welcome Back!</h1>
            <h1 className="login-password-sub-message">
              Please enter your password
            </h1>
            <form className="login-password-form" onSubmit={this.handleSubmit}>
              <label className="login-password-label">
                <input
                  autoCapitalize="off"
                  placeholder="Password"
                  type="password"
                  className="login-password-input"
                  onChange={this.update("password")}
                  value={this.state.password}
                  />
              </label>
              {/* {this.renderErrors()} */}
              {errorMessage}
              <button className="login-password-button" type="submit">
                Next
              </button>
            </form>
          </div>
        );
    };
};

export default LoginPasswordForm;