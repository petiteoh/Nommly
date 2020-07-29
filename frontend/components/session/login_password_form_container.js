import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginPasswordForm from "./login_password_form";

const mSTP = (state) => {
  return {
    email: state.session.email,
  };
};

const mDTP = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mSTP, mDTP)(LoginPasswordForm);