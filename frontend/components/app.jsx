import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import EmailFormContainer from "./session/email_form_container";
import LoginPasswordFormContainer from "./session/login_password_form_container";
import SignupPasswordFormContainer from "./session/signup_password_form_container"

const App = () => (
  <div>
    
    {/* <GreetingContainer /> */}
    <Route exact path="/" component={GreetingContainer} />
    <Route path="/email" component={EmailFormContainer} />
    <Route path="/login-password" component={LoginPasswordFormContainer} />
    <Route path="/signup-password" component={SignupPasswordFormContainer} />
  </div>
);

export default App;
