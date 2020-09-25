import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            <Cart />
          </header>
          <br/>
          <Pizzas />
          <p>Pizza is great.</p>
        </div>
        )
    }
}

export default Home;