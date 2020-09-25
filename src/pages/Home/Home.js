import React, { Component } from 'react';
import Pizzas from '../../components/Pizzas/Pizzas';
import Cart from '../../components/Cart/Cart';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Cart from '../../components/Cart/Cart'
import './Home.css'


class Home extends Component{
    render(){
        return(
          <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>

            <Cart />
            <button> <Link to="/CustomerInfo"> NEXT </Link></button>

            <Cart className="cart"/>

          </header>
          <br/>
          <Pizzas />
          <p>Pizza is great.</p>
        </div>
        </Router>
        )
    }
}

export default Home;
