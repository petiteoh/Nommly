import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_BY_EMAIL = "RECEIVE_USER_BY_EMAIL";

const receiveCurrentUser = (payload) => {
    // let recipes = () => {
    //     if (payload.recipes.length > 0) {
    //         return payload.recipes;
    //     } else {
    //         return null;
    //     }
    // }
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: payload.user,
        recipes: payload.recipes,
        // jbuilder collects information from 2 keys. so you need to split it into
        // key of user or key of recipes
    }
};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

const receiveUserByEmail = (userEmail) => {
    // debugger
    return {
        type: RECEIVE_USER_BY_EMAIL,
        userEmail
    }
};

export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then((payload) => {
        return dispatch(receiveCurrentUser(payload)
    )}, (err) => {
        return dispatch(receiveErrors(err.responseJSON))
    }); 
};

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user).then((payload) => {
        return dispatch(receiveCurrentUser(payload) 
    )}, (err) => {
        return dispatch(receiveErrors(err.responseJSON))
    });
};

export const logout = () => (dispatch) =>
    APIUtil.logout().then(() => dispatch(logoutCurrentUser())
);

export const fetchUserByEmail = (userEmail) => (dispatch) => {
    return APIUtil.fetchUserByEmail(userEmail).then((response) => {
        // Line below. The response from the backend was double because we also called the response placeholder variable user. So it made a confusion 
        // Double nested and needed to key into the user
        return dispatch(receiveUserByEmail(response.user.email)
    )}, (response) => {
        return dispatch(receiveUserByEmail(response.responseJSON.email));
    });
};