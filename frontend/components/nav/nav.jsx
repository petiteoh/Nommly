import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";
import { logout } from "../../util/session_api_util";

class Nav extends React.Component {
  constructor(props, context) {
    super (props, context);

    this.state = { visible: false };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  // handleSessionStatus(type) {
  //   if (type === "logout") {
  //     this.props.logout();
  //     <Redirect to="/" />
  //   } else if (type === "login") {
  //     this.props.login();
  //     <Redirect to="/" />
  //   };
  // };

  handleMouseDown(e) {
    this.toggleSidebar();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleSidebar() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { currentUser, currentUserId, login, logout } = this.props;
    if (currentUserId === 27) {
    return (
      <section className="whole-nav-section">
        <section id="nav-bar-container">
          <nav className="navbar">
            <div className="left-icons">
              <div className="bar-icon-container" onMouseDown={this.handleMouseDown}>
                <i className="fas fa-bars" aria-hidden="true"></i>
              </div>
              <Link to="/">
                    <img
                      className="nommly-icon"
                      src={window.nommlyLogo}
                      alt="Nommly Icon"
                    />
              </Link>
            </div>
            <div className="right-icons">
              <div className="nav-user-circle-icon">
                <Link to="/search">
                  <i className="fas fa-search fa-1x"></i>
                </Link>
                <Link to="/profile">
                  <i className="fa fa-user-circle fa-1x" aria-hidden="true"></i>
                </Link>
              </div>
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
            {/* <a className="banner-logout-btn" onClick={this.handleSessionStatus("logout")} > */}
            <a className="banner-logout-btn" onClick={logout} >
              Demo Log Out
            </a>
          </div>
        </section>
        <section className="side-nav">
          <GreetingContainer toggleSidebar={this.toggleSidebar} handleMouseDown={this.handleMouseDown} sidebarVisibility={this.state.visible}/>
        </section>
      </section>
    );
  } else if (currentUser) {
    return (
      <section className="whole-nav-section">
        <section className="nav-bar-container">
          <nav className="navbar">
            <div className="left-icons">
              <div
                className="bar-icon-container"
                onMouseDown={this.handleMouseDown}
              >
                <i className="fas fa-bars" aria-hidden="true"></i>
              </div>
              <Link to="/">
                <img
                  className="nommly-icon"
                  src={window.nommlyLogo}
                  alt="Nommly Icon"
                />
              </Link>
            </div>
            <div className="right-icons">
              <div className="nav-user-circle-icon">
                <Link to="/search">
                  <i className="fas fa-search fa-1x"></i>
                </Link>
                <Link to="/profile">
                  <i className="fa fa-user-circle fa-1x" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </nav>
          <div className="banner-container">
            <span className="banner-msg-container">
              <p className="banner-msg">Welcome to Nommly!</p>
              <p className="banner-msg-sml">
                You are logged in as yourself! Browse around to discover our
                cool features!
              </p>
            </span>
            {/* <a className="banner-logout-btn" onClick={this.handleSessionStatus("logout")}> */}
            <a className="banner-logout-btn" onClick={logout}>
              Log Out
            </a>
          </div>
        </section>
        <section className="side-nav">
          <GreetingContainer
            toggleSidebar={this.toggleSidebar}
            handleMouseDown={this.handleMouseDown}
            sidebarVisibility={this.state.visible}
          />
        </section>
      </section>
    );
  } else {
    return (
      <section className="whole-nav-section">
        <section className="nav-bar-container">
          <nav className="navbar">
            <div className="left-icons">
              <div
                className="bar-icon-container"
                onMouseDown={this.handleMouseDown}
              >
                <i className="fas fa-bars" aria-hidden="true"></i>
              </div>
              <Link to="/">
                <img
                  className="nommly-icon"
                  src={window.nommlyLogo}
                  alt="Nommly Icon"
                />
              </Link>
            </div>
            <div className="right-icons">
              <div className="nav-user-circle-icon">
                <Link to="/search">
                  <i className="fas fa-search fa-1x"></i>
                </Link>
              </div>
            </div>
          </nav>
          <div className="banner-container">
            <span className="banner-msg-container">
              <p className="banner-msg">Welcome to Nommly!</p>
              <p className="banner-msg-sml">
                Feel free to log in as a demo user or access/create your own
                account with personalized features!
              </p>
            </span>
            {/* <a className="demo-login-btn" onClick={this.handleSessionStatus("login")}> */}
            <a className="demo-login-btn" onClick={login}>
              Demo Login
            </a>
          </div>
        </section>
        <section className="side-nav">
          <GreetingContainer
            toggleSidebar={this.toggleSidebar}
            handleMouseDown={this.handleMouseDown}
            sidebarVisibility={this.state.visible}
          />
        </section>
      </section>
    );
  };
}};

export default Nav;