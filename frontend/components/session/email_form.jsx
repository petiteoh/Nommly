import React from "react";

class EmailForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchUserByEmail(this.state.email).then((response) => {
            this.props.history.push("/login-password")
        }, (err) => {
            console.log(err.responseJSON)
            this.props.history.push("/signup-password")
        });
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
            {/* <h1 className="connect">Connect with Email</h1> */}
            <form className="email-form" onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <label className="email-form-label">
                <input
                  autocapitalize="off"
                  placeholder="Email Address"
                  className="email-form-input"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
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