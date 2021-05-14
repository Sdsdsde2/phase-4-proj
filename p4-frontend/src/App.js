import React from 'react'
import './App.css';
import Header from './components/header'

class App extends React.Component{

  state = {
    products: [],
    cartItems: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        products: data
      })
    })
  }

  addToCart = (cartItem) => {

    console.log("Added" + cartItem)

    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(cartItem)
    }

    fetch(`http://localhost:3000/purchases`, reqPackage)
    .then(resp => resp.json())
    .then(data => this.setState({
      cartItems: [...this.state.cartItems, data]
      })
    )
  }

  removeFromCart = (purchaseID) => {
    fetch(`http://localhost:3000/purchases/${purchaseID}`, {method: 'DELETE'})
    this.setState({
      cartItems: this.state.cartItems.filter((cartItem)=>{ return cartItem !== cartItem})
    })
  }

  createAccount = (accountArgs) => {
    console.log("Added" + accountArgs)

    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(accountArgs)
    }

    fetch(`http://localhost:3000/users`, reqPackage)
    // .then(resp => resp.json())
    // .then(data => this.setState({
    //   cartItems: [...this.state.cartItems, data]
    //   })
    // )
  }
  
  render() {
  return (
    <div className="App">
      <Header products={this.state.products} cartItems={this.state.cartItems} addToCart={this.addToCart} removeFromCart={this.removeFromCart} createAccount={this.createAccount} />
      <div>
        
      </div>
    </div>
  );
  }
}

export default App;
