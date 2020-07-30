import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ currentUser, currentUserId, login, logout }) => {
  if (currentUserId === 9) {
    return (
      <section className="nav">
        <nav className="navbar">
          <div className="left-icons">
            <i className="fas fa-bars"></i>
            <img
              className="yummly-icon"
              src="https://theme.zdassets.com/theme_assets/33710/aa8385e43b1db7d88a0f43b3ac30eb6f684c7326.png"
              alt="Yummly Icon"
            />
          </div>
          <div className="right-icons">
          </div>
        </nav>
        <div className="banner-container">
          <span className="banner-msg-container">
            <p className="banner-msg">Welcome to Nommly!</p>
            <p className="banner-msg-sml">
              You are now logged in as a Demo User. Should you want to curate
              your feed, log out to create a new account!
            </p>
          </span>
          <a className="banner-logout-btn" onClick={logout}>
            Demo Log Out
          </a>
        </div>
      </section>
    );
  } else if (currentUser) {
    return (
      <section className="nav">
        <nav className="navbar">
          <div className="left-icons">
            <i class="fas fa-bars"></i>
            <img
              className="yummly-icon"
              src="https://theme.zdassets.com/theme_assets/33710/aa8385e43b1db7d88a0f43b3ac30eb6f684c7326.png"
              alt="Yummly Icon"
            />
          </div>
          <div className="right-icons">
          </div>
        </nav>
        <div className="banner-container">
          <span className="banner-msg-container">
            <p className="banner-msg">Welcome to Nommly!</p>
            <p className="banner-msg-sml">
              You are logged in as yourself! Browse around to discover our cool
              features!
            </p>
          </span>
          <a className="banner-logout-btn" onClick={logout}>
            Log Out
          </a>
        </div>
      </section>
    );
  } else {
    return (
      <section className="nav">
        <nav className="navbar">
          <div className="left-icons">
            <i class="fas fa-bars"></i>
            <img
              className="yummly-icon"
              src="https://theme.zdassets.com/theme_assets/33710/aa8385e43b1db7d88a0f43b3ac30eb6f684c7326.png"
              alt="Yummly Icon"
            />
          </div>
          <div className="right-icons"></div>
        </nav>
        <div className="banner-container">
          <span className="banner-msg-container">
            <p className="banner-msg">Welcome to Nommly!</p>
            <p className="banner-msg-sml">
              Feel free to log in as a demo user or access/create your own
              account with personalized features!
            </p>
          </span>
          <a className="demo-login-btn" onClick={login}>
            Demo Login
          </a>
        </div>
      </section>
    );
  }
};

export default Nav;