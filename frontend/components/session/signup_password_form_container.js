import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupPasswordForm from "./signup_password_form";

const mSTP = (state) => {
    return {
        email: state.session.email,
    };
};

const mDTP = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user)),
    };
};

export default connect(mSTP, mDTP)(SignupPasswordForm);
