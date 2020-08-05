import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    const { currentUser, logout } = this.props 
    let visibility = "";

    if (this.props.sidebarVisibility === false) {
      visibility = "hide";
    } else {
      visibility = "show";
    }

    if (!currentUser) {
      return (
        <div id="signup-login-sidebar" onMouseDown={this.props.handleMouseDown} className={visibility}>
          <ul className="sidebar-ul">
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
        <div id="logout-sidebar" onMouseDown={this.props.handleMouseDown} className={visibility}>
          <ul className="sidebar-ul">
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