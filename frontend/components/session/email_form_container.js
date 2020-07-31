import { connect } from "react-redux";
import React from "react";
import { fetchUserByEmail } from "../../actions/session_actions";
import EmailForm from "./email_form";
import { Link } from "react-router-dom";

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    navLink: <Link className="email-form-close-link" to="/">Close & use Nommly</Link>,
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUserByEmail: (userEmail) => dispatch(fetchUserByEmail(userEmail)),
  };
};

export default connect(mSTP, mDTP)(EmailForm);
