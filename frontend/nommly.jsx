import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root"

// test
    import * as APIUtil from "./util/session_api_util"
    import { login, logout, fetchUserByEmail } from "./actions/session_actions"
// test

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser },
        },
            session: { id: window.currentUser.id },
        };
    store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };

    // test
        window.$ = $;
        window.login = login;
        window.logout = logout;
        window.fetchUserByEmail = fetchUserByEmail;
        window.APIsignup = APIUtil.signup;
        window.APIlogin = APIUtil.login;
        window.APIlogout = APIUtil.logout;
        window.getState = store.getState;
        window.dispatch = store.dispatch;
    // test

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});
