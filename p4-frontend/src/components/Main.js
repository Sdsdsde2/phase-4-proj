import React from 'react'
import Card from './Card'

export default class Main extends React.Component {

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