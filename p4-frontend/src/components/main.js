import React from 'react'
import Card from './card'

export default class Main extends React.Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         products: []
    //     }
    // }

    // componentDidMount() {
    //     fetch('http://localhost:3000/purchases', {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //             'accept': 'application/json'
    //         },
    //     })
    //     .then(resp => resp.json())
    //     .then(products => {
    //         this.setState({
    //             products: products
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                {this.props.products.map(product => {
                    return <Card key={product.id} product={product} addToCart={this.props.addToCart} />
                })}
            </div>
        )        
    }
}