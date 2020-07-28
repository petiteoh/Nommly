import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import EmailFormContainer from "./session/email_form_container";
import { Route } from "react-router-dom";
import LoginPasswordFormContainer from "./session/login_password_form_container";

const App = () => (
  <div>
    <nav className="navbar">
      <a className="hamburger-icon" href="#sidebar"></a>
      <img
        className="yummly-icon"
        src="https://theme.zdassets.com/theme_assets/33710/aa8385e43b1db7d88a0f43b3ac30eb6f684c7326.png"
        alt="Yummly Icon"
      />
      <img
        className="search-icon"
        src="https://i.pinimg.com/originals/4a/fc/56/4afc56db34df7232f15304ee005eaaa1.jpg"
        alt="Search Icon"
      />
      <nav className="demo-login"></nav>
    </nav>
    <GreetingContainer />
    <Route path="/email" component={EmailFormContainer} />
    <Route path="/login-password" component={LoginPasswordFormContainer} />
  </div>
);

export default App;
