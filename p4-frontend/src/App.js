import React from 'react'
import './App.css';
import Header from './components/header'

class App extends React.Component{

  state = {
    products: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/comments')
    .then(resp => resp.json())
    .then(data => this.setState({products: data}))
  }
  
  render() {
  return (
    <div className="App">
      <Header products={this.state.products}/>
      <div>
        
      </div>
    </div>
  );
  }
}

export default App;
