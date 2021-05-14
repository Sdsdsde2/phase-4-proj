import React from 'react';
import CartCard from './cartcard'

class Cart extends React.Component {

    state = {
        purchases: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/purchases', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(purchases => {
            this.setState({
                purchases: purchases
            })
        })
    }

    clearCart = () => {
        this.props.cartItems.map(purchase => {
            this.props.removeFromCart(purchase)
        })
        alert("Cart has been cleared successfully!")
    }

    purchaseItems = () => {
        this.props.cartItems.map(purchase => {
            this.props.removeFromCart(purchase)
        })
        alert("Thank you for your purchase")
    }

    render() {

        return (
            <div className="cart-card">
                <div className="cart-card-title">
                    <h2>Your Shopping Cart</h2>
                </div>
                <div>
                    {this.props.cartItems.map(purchase => {
                        let prod = this.state.purchases.find((product) => product.id === purchase.product_id)
                        return <CartCard cartItem={purchase} productID={purchase.product_id} removeFromCart={this.props.removeFromCart} product={prod}/>
                    })}
                </div>
                <div>
                    <button onClick={this.clearCart} className="purchase-btn">Empty cart items</button>
                    <button onClick={this.purchaseItems} className="purchase-btn">Purchase Items</button>
                </div>
            </div>
        );
    }
}

export default Cart