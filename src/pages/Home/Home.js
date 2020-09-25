import React, { Component } from 'react';
import Pizzas from '../../components/Pizzas/Pizzas';
import Cart from '../../components/Cart/Cart';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Home extends Component{
    render(){
        return(
          <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            <Cart />
            <button> <Link to="/CustomerInfo"> NEXT </Link></button>
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