import React, { Component } from 'react';

class Register extends Component {

    submitHandler = (e) => {
        e.preventDefault();

        let newAccount = {
            name: e.target[0].value,
            username: e.target[1].value,
            password: e.target[2].value
        }

        this.props.createAccount(newAccount)
    }

    render() {
    return (
        <div className="register-card">
            <div className="cardTitle">
                <h2>Register</h2>
            </div>
            <form className="register-form" onSubmit={this.submitHandler}>
                <label>
                    <input type="text" name="regname" placeholder="Name" id="login-input"/>
                </label>
                <label>
                    <input type="text" name="regusername" placeholder="Username" id="login-input"/>
                </label>
                <label>
                    <input type="password" name="regpassword" placeholder="Password" id="login-input"/>
                </label>
                <input type="submit" value="Create Account" id="submit" />
            </form>
        </div>
    )
    }
}

export default Register;