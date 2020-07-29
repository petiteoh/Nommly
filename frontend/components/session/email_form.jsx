import React from "react";

class EmailForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.fetchUserByEmail(this.state.email).then((response) => {
            debugger
            this.props.history.push("/login-password")
        }, (err) => {
            debugger
            console.log(err.responseJSON)
            this.props.history.push("/signup-password")
        });
    };

    render() {
        return (
            <div>
                <h1>Connect with Email</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email Address
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    };
}

export default EmailForm;