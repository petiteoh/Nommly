import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { signup } from "../../actions/session_actions";
import SignupPasswordForm from "./signup_password_form";

const mSTP = (state) => {
    return {
        email: state.session.email,
        errors: state.errors.session,
        navLink: <Link className="signup-password-back-link" to="/email">Back</Link>,
    };
};

const mDTP = (dispatch) => {
    return {
        signup: (user) => {
            dispatch(signup(user));
        } 
    };
};

export default connect(mSTP, mDTP)(SignupPasswordForm);
