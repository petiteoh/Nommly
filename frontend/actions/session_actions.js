import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_BY_EMAIL = "RECEIVE_USER_BY_EMAIL";

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

const receiveUserByEmail = (userEmail) => ({
    type: RECEIVE_USER_BY_EMAIL,
    userEmail,
})

export const signup = (user) => (dispatch) => (
    APIUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)), 
    (err) => dispatch(receiveErrors(err.responseJSON))
));

// export const login = (user) => (dispatch) => (
//     APIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)), 
//     (err) => dispatch(receiveErrors(err.responseJSON))
// ));

export const login = (user) => (dispatch) => {
    debugger
    return APIUtil.login(user).then((user) => {
        debugger
        return dispatch(receiveCurrentUser(user))
        }
    )
}

export const logout = () => (dispatch) =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser())
);

export const fetchUserByEmail = (userEmail) => (dispatch) => {
    return APIUtil.fetchUserByEmail(userEmail).then(
      (user) => {
        return dispatch(receiveUserByEmail(user.email));
      }, (response) => {
          debugger
        return dispatch(receiveUserByEmail(response.responseJSON.email));
      }
    );
};