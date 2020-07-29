import React from "react";
import { Link } from "react-router-dom";

class SignupPasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: this.props.email, password: "", display_name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(
      (response) => {
        this.props.history.push("/");
      }, 
      (err) => {
        console.log(err.responseJSON);
      }
    );
  }

    renderErrors() {
      return(
        <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
                {error}
            </li>
            ))}
        </ul>
      );
    };

    render() {
        return (
          <div >
            {this.props.navLink}
            <h1>Welcome to Nommly!</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <label>
                Create Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <br></br>
              <label>
                Display Name:
                <input
                  type="string"
                  value={this.state.display_name}
                  onChange={this.update("display_name")}
                />
              </label>
              <br></br>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        );
    };
};

export default SignupPasswordForm;