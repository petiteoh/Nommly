import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';

// test
    import * as APIUtil from "./util/session_api_util"
    import { login } from "./actions/session_actions"
// test

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // test
        window.$ = $;
        window.login = login;
        window.APIsignup = APIUtil.signup;
        window.APIlogin = APIUtil.login;
        window.APIlogout = APIUtil.logout;
        window.getState = store.getState;
        window.dispatch = store.dispatch;
        // test

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Om Nom Nom...</h1>, root);
});
