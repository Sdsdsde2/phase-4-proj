import React from 'react';
import Cart from './cart';

const newItem = {
    name: 'Ice Cream Cone',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg',
    price: '3.99',
    reviews: '3 Reviews'
};

function createCartItem() {
    console.log(newItem);
    // <Cart theCart={newItem}/>;
}

export default function Main(props) {
    return (
        <div className="card">
            <div className="cardTitle">
                <h2>Ice Cream Cone</h2>
            </div>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg'} alt="" className="product-avatar" />
            <p>$ 3.99</p>
            <p>3 Reviews</p>
            <button className="review-btn" onClick={createCartItem}>Add to cart</button>
        </div>
    )
}