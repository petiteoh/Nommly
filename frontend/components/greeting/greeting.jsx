import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    if (!currentUser) {
        return (
          <div className="signup-login-sidebar">
            <div className="toggle-btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul>
              <a className="signup-login-btn">
                <Link to="/email">Sign Up / Log In</Link>
              </a>
            </ul>
          </div>
        );
    } else {
        return (
            <div className="logout-sidebar">
                <ul>
                    <h1>{currentUser.display_name}'s Personalized Feed</h1>
                    <a href="#" onClick={logout}>Log Out</a>
                </ul>
            </div>
        )
    }
}

export default Greeting;