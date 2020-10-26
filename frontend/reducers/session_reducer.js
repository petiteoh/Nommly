import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_USER_BY_EMAIL,
} from "../actions/session_actions";

const _nullUser = Object.freeze({
  id: null,
  email: null,
});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id, email: null };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_USER_BY_EMAIL:
        return { id: null, email: action.userEmail };
    default:
      return oldState;
  };
};

export default sessionReducer;