import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    if (!currentUser) {
        return (
                <div className="signup-login">
                    <button className="signup-login-btn">
                        <Link to="/email">Sign Up / Log In</Link>
                    </button>
                </div>
        )
    } else {
        return (
            <div className="logout">
                <h1>{currentUser.display_name}'s Personalized Feed</h1>
                <a href="#" onClick={logout}>Log Out</a>
            </div>
        )
    }
}

export default Greeting;