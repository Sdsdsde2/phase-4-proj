import React from 'react'
import Card from './card'

export default class Main extends React.Component {
    render() {
        return (
            <div className="main-div">
                {this.props.products.map(product => {
                    return <Card key={product.id} product={product} addToCart={this.props.addToCart}/>
                })}
            </div>
        )        
    }
}