import React, { Component } from 'react';

class CartCard extends Component {

  render() {
    return (
      <div className="card">
        {console.log(this.props.cartItem)}
        <div className="cardTitle">
            <h2>{this.props.cartItem.name}</h2>
        </div>
        <img src={this.props.cartItem.image} alt="" className="product-avatar" />
        <p>{this.props.id}</p>
        <p>{this.props.postId}</p>
        <button onClick={() => this.props.removeFromCart(this.props.cartItem.id)} >Remove from cart</button>
      </div>
    );
  }
}

export default CartCard;