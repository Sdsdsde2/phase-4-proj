import React from 'react';

class Cart extends React.Component {
    render() {
    return (
        <div className="cart-card">
            <div className="cart-card-title">
                <h2>Your Shopping Cart</h2>
            </div>
            <div className="card">
                <div className="cart-card-title">
                    <h2>Ice Cream Cone</h2>
                </div>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg'} alt="" className="product-avatar" />
                <button className="remove-btn">Remove Item</button>
            </div>
        </div>
    );
    }
}

export default Cart