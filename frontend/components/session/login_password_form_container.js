import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import React from "react";
import { Link } from "react-router-dom";
import LoginPasswordForm from "./login_password_form";

const mSTP = (state) => {
  return {
    email: state.session.email,
    errors: state.errors.session,
    navLink: <Link to="/email">Back</Link>,
  };
};

const mDTP = (dispatch) => {
  return {
    login: user => {
      debugger
      dispatch(login(user))
    }
  };
};

export default connect(mSTP, mDTP)(LoginPasswordForm);