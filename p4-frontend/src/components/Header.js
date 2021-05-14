import React from 'react';
import Main from './Main';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header(props) {
    return (
        <Router>
            <div className="header">
                <h1>
                    <Link to="/" className="headerMain">Our Shopping App</Link>
                </h1>
                <h3>
                    <div className="headerLink">
                        <Link to="/register" className="linkStyle">👋 Register</Link>
                        <Link to="/login" className="linkStyle">🕵️ Login</Link>
                        <Link to="/cart" className="linkStyle">🛒 Cart</Link>
                    </div>
                </h3>
            </div>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/">
                    
                    <Main products={props.products} addToCart={props.addToCart} />
                </Route>
            </Switch>
        </Router>
    )
}