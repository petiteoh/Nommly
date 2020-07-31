import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import EmailFormContainer from "./session/email_form_container";
import LoginPasswordFormContainer from "./session/login_password_form_container";
import SignupPasswordFormContainer from "./session/signup_password_form_container"
import NavContainer from "./nav/nav_container"
import RecipeIndexContainer from "./recipe/recipe_index_container";
import RecipeShowContainer from "./recipe/recipe_show_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div className="app">
    <NavContainer />
    <Route exact path="/" component={GreetingContainer} />
    <Route exact path="/" component={RecipeIndexContainer} />
    <Route path="/recipes/:recipeId" component={RecipeShowContainer} />
    <Route path="/email" component={EmailFormContainer} />
    <AuthRoute path="/login-password" component={LoginPasswordFormContainer} />
    <AuthRoute path="/signup-password" component={SignupPasswordFormContainer} />
  </div>
);

export default App;
