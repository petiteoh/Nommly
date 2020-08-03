import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_NOM } from "../actions/recipe_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return Object.assign({}, oldState, {
            [action.currentUser.id]: action.currentUser.user,
        });
    case RECEIVE_NOM:
      const user = action.user;
      return Object.assign({}, oldState, { [user.id]: user });
    default:
        return oldState;
  };
};

export default usersReducer;