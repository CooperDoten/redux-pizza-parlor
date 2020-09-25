import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CustomerInfo from './../../pages/CustomerInfo/CustomerInfo';
import Pizzas from './../Pizzas/Pizzas';
import Cart from '../Cart/Cart'
import CheckoutButton from '../CheckoutComponents/CheckoutButton/CheckoutButton';

class App extends Component {

    state = {
      pizzas: [],
    }

    componentDidMount() {
      this.refreshPizza();
    }

    refreshPizza = () => {
      axios({
        method: 'GET',
        url: '/api/pizza'
      }).then(response => {
        console.log(response);
        // response.data will be the array of artists
        this.props.dispatch({
          type: "SET_PIZZA",
          payload: response.data
        })
        this.setState({
          pizzas: response.data,
        });
      }).catch(err => {
        console.error('GET error', err)
      })
    }
  render() {
    return (
      <Router >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            <Cart />
          </header>
          <br/>
          <Pizzas />
         
          <div className="checkoutBtnDiv">
          <span>Pizza is great.</span>
            <CheckoutButton 
            classname="checkoutBtn"/>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
