import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <div className="cardTitle">
            <h2>{this.props.product.name}</h2>
        </div>
        <img src={this.props.product.image} alt="" className="product-avatar" />
        <p>{this.props.id}</p>
        <p>{this.props.postId}</p>
        <button onClick={() => this.props.addToCart(this.props.product.id)} >Add to cart</button>
      </div>
    );
  }
}

export default Card;