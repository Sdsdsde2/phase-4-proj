import React from 'react';

export default function Login() {

    function submitHandler(e) {
        e.preventDefault();
    }

    return (
        <div className="login-card">
            <div className="cardTitle">
                <h2>Login</h2>
            </div>
            <form className="login-form" onSubmit={submitHandler}>
                <label>
                    <input type="text" name="logname" placeholder="Username" id="login-input"/>
                </label>
                <label>
                    <input type="password" name="logpassword" placeholder="Password" id="login-input"/>
                </label>
                <input type="submit" value="Login" id="submit" />
            </form>
        </div>
    )
}