import React from 'react'
import './App.css';
import Header from './components/header'

class App extends React.Component{

  state = {
    products: []
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
    fetch('http://localhost:3000/purchases', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(cartItem)
    })
  }
  
  render() {
  return (
    <div className="App">
      <Header products={this.state.products} addToCart={this.addToCart} />
      <div>
        
      </div>
    </div>
  );
  }
}

export default App;
