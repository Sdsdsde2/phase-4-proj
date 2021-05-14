import React from 'react';

export default function Register() {
    return (
        <div className="register-card">
            <div className="cardTitle">
                <h2>Register</h2>
            </div>
            <form className="register-form">
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