import React from "react";

class EmailForm extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = { email: "", errors: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        // if (this.state.email) {

        // }

        if (this.isValidEmail(this.state.email)) {
          // debugger
          this.props.fetchUserByEmail(this.state.email).then((response) => {
            // this.props.
            // debugger // Check the response, then we are going have to switch components the regular way. We have to make sure that that email is coming back from the backend on the success, and it's getting put in the reducer cuz it's not.
            // Let 
            console.log("haha I just skipped you")  
            this.props.history.push("/login-password")
          }, (err) => {
              console.log(err.responseJSON)
              this.props.history.push("/signup-password")
          });
        } else {
          this.setState({errors: "PLEASE ENTER A VALID EMAIL ADDRESS."})
        }
    };

    isValidEmail(input) {
      if (input.length > 4 && input.includes("@") && input.includes("."))  {
        return true;
      } else {
        return false;
      };
    };

    renderErrors() {
        return (
          <ul className="email-form-errors">
            {this.props.errors.map((error, i) => (
              <li className="email-form-error" key={`error-${i}`}>{error}</li>
            ))}
          </ul>
        );
    };

    render() {
      let errorMessage;
      if (this.state.errors) {
        errorMessage = (
          <p className="email-form-errors">
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
          <div className="email-form-container">
            <h1 className="email-form-header-message">Cooks love us!</h1>
            <ul className="email-form-ratings">
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star-half"></i>
              </li>
            </ul>
            <h3 className="email-form-message">
              We're rated 4.5 out of 5 stars because our users have so much
              success finding recipes they love.
            </h3>
            <form className="email-form" onSubmit={this.handleSubmit}>
              <label className="email-form-label">
                <input
                  className="email-form-input"
                  autoCapitalize="off"
                  placeholder="Email Address"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
              {errorMessage}
              <button className="email-form-button" type="submit">
                Next
              </button>
            </form>
            {this.props.navLink}
          </div>
        );
    };
}

export default EmailForm;