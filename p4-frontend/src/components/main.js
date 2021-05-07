import React from 'react';

export default function Main(props) {
    return (
        <div className="card">
            <div className="cardTitle">
                <h2>Ice Cream Cone</h2>
            </div>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg'} className="product-avatar" />
            <p>$ 3.99</p>
            <p>3 Reviews</p>
            <button className="review-btn">Add to cart</button>
        </div>
    )
}