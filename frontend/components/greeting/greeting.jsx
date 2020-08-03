import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { currentUser, logout } = this.props 

    if (!currentUser) {
      return (
        <div className="signup-login-sidebar">
          <ul>
            <li>
              <Link className="signup-login-btn" to="/email">
                Sign Up / Log In
                </Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="logout-sidebar">
          <ul>
            <div className="user-circle-icon">
              <Link to="/profile">
                <i className="fa fa-user-circle fa-3x" aria-hidden="true"></i>
              </Link>
            </div>
            <h1>{currentUser.displayName}'s Feed</h1>
            <a href="#" onClick={logout}>Log Out</a>
          </ul>
        </div>
      )
    }
  }
};

export default Greeting;