import { connect } from "react-redux";
import LoginPasswordForm from "./login_password_form";

const mSTP = (state) => {
  return {
    email: state.session.email,
  };
};

//mDTP login

export default connect(mSTP)(LoginPasswordForm);