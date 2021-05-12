import React, { Component } from 'react';

class Card extends Component {

//   likeHandler = () => {
//     this.props.toy.likes++
//     this.props.likeToy(this.props.toy)
//   }

//   donateHandler = () => {
//     this.props.donateToy(this.props.toy)
//   }

  render() {
    return (
      <div className="card">
        <div className="cardTitle">
            <h2>{this.props.product.body}</h2>
        </div>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg'} alt="" className="product-avatar" />
        <p>{this.props.id}</p>
        <p>{this.props.postId}</p>
        <button className="review-btn">Add to cart</button>
        {/* <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.likeHandler}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.donateHandler}>Donate to GoodWill</button>
        {console.log(this.props.toy.id)} */}
      </div>
    );
  }

}

export default Card;