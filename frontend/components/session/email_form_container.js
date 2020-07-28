import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { fetchUserByEmail } from "../../actions/session_actions";
import EmailForm from "./email_form";

// const mSTP = (state) => {
//   debugger;
//   return {
//     {}
//   };
// };

const mDTP = (dispatch) => {
  // debugger;
  return {
    fetchUserByEmail: (userEmail) => dispatch(fetchUserByEmail(userEmail)),
  };
};

export default connect(null, mDTP)(EmailForm);
