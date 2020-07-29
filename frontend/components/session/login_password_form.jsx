import React from "react";

class LoginPasswordForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: this.props.email, password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state).then((response) => {
            this.props.history.push("/")
        }, (err) => {
            console.log(err.responseJSON)
            
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome Back!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Password
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    };
};

//make a request to create a new session


export default LoginPasswordForm;