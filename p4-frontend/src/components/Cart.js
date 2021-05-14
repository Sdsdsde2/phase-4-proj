import React from 'react';
import Card from './Card'

class Cart extends React.Component {

    state = {
        products: []
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
        .then(products => {
            this.setState({
                products: products
            })
        })
    }

    render() {

        return (
            <div className="cart-card">
                <div className="cart-card-title">
                    <h2>Your Shopping Cart</h2>
                </div>
                {this.state.products.map(product => {
                    return <Card key={product.id} product={product} />
                })}
            </div>
        );
    }
}

export default Cart