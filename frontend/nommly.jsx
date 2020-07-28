import React from "react";
import ReactDOM from "react-dom";
// import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();

    // test
        window.$ = $;
    // test

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Om Nom Nom...</h1>, root);
});
