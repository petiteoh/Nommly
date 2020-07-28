import React from "react";
import { login } from "../../util/session_api_util";



class LoginPasswordForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: this.props.email, password: "" }
    }

    render() {
        const { email } = this.props;
        debugger
        return (
            <div>{email}</div>
        )
    };
};

//make a request to create a new session

// = ({ existingUser }) => {

//     if (//this.props.email) {
//         return (
//             <div>
//                 <h1>Welcome back!</h1>
//                 Find matching password
//             </div>

//             //Link to the homepage chain a .then that has 
//             // inside of the callback of the .then... call this.props.history.push("/")
//         );
//     } else {
//         return (
//             <div>
//                 <h1>Sign Up!</h1>
//                 Create new user
//             </div>
//         )
//     };
// };


export default LoginPasswordForm;