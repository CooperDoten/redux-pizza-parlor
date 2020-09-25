import React, { Component } from 'react';
import Pizzas from '../../components/Pizzas/Pizzas';
import Cart from '../../components/Cart/Cart'
import './Home.css'


class Home extends Component{
    render(){
        return(
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            <Cart className="cart"/>
          </header>
          <br/>
          <Pizzas />
          <p>Pizza is great.</p>
        </div>
        )
    }
}

export default Home;