import React from 'react';

export default function Header(props) {
    return (
        <div className="header">
            <h1>
                <a className="headerMain" href="#/">Our Shopping App</a>
            </h1>
            <h3>
                <div className="headerLink">
                    <a className="linkStyle" href="#/register">Register</a> 
                    <a className="linkStyle" href="#/login">Login</a> 
                    <a className="linkStyle" href="#/cart">Cart</a> 
                </div>
            </h3>
        </div>
    )
}