import { connect } from "react-redux";
import { login, logout } from "../../actions/session_actions"
import Nav from "./nav";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    login: (user) => dispatch(login({ email: "demo@demo.com", password: 11111111 })),
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(Nav);