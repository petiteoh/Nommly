import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ currentUser, currentUserId, login }) => {
  if (currentUserId === 9) {
    return (
      <section>
        <nav className="navbar">
          <div className="left-icons">
            {/* {this.props.bar-icon} */}
            <img
              className="yummly-icon"
              src="https://theme.zdassets.com/theme_assets/33710/aa8385e43b1db7d88a0f43b3ac30eb6f684c7326.png"
              alt="Yummly Icon"
            />
          </div>
          <div className="right-icons">
            {/* <FontAwesomeIcon icon={["search"]} />
            <FontAwesomeIcon icon={["user"]} /> */}
          </div>
        </nav>
        <div className="placeholder">
          <p>You are now logged in as a Demo User</p>
        </div>
      </section>
    );
  } else if (currentUser) {
    return (
      <section>
        <nav className="navbar">
          <div className="left-icons">
            {/* <FontAwesomeIcon icon={["bars"]} /> */}
            <img
              className="yummly-icon"
              src="https://theme.zdassets.com/theme_assets/33710/aa8385e43b1db7d88a0f43b3ac30eb6f684c7326.png"
              alt="Yummly Icon"
            />
          </div>
          <div className="right-icons">
            {/* <FontAwesomeIcon icon={["search"]} /> */}
          </div>
        </nav>
        <div className="placeholder">
        <p>You are logged in as yourself!</p>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <nav className="navbar">
          <div className="left-icons">
            {/* <FontAwesomeIcon icon={["bars"]} /> */}
            <img
              className="yummly-icon"
              src="https://theme.zdassets.com/theme_assets/33710/aa8385e43b1db7d88a0f43b3ac30eb6f684c7326.png"
              alt="Yummly Icon"
            />
          </div>
          <div className="right-icons">
            {/* <FontAwesomeIcon icon={["search"]} /> */}
          </div>
        </nav>
        <div className="placeholder">
          <p>Welcome to Nommly! Feel free to login as a Demo User!</p>
          <button onClick={login}>Demo Login</button>
        </div>
      </section>
    );
  }
};

export default Nav;