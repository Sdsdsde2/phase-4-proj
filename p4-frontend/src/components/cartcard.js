import React, { Component } from 'react';

class CartCard extends Component {

  render() {
    return (
      <div className="card">
        {console.log(this.props.cartItem)}
        {console.log(this.props.productID)}
        <div className="cardTitle">
            <h2>Your Cart Item</h2>
        </div>
        <img src="https://recognizeyourworld.com/wp-content/uploads/2016/12/T-Shirt-Icon.jpg" alt="" className="product-avatar" />
        <p>Price: $9</p>
        <p>{this.props.postId}</p>
        <button onClick={() => this.props.removeFromCart(this.props.cartItem.id)} >Remove from cart</button>
      </div>
    );
  }
}

export default CartCard;