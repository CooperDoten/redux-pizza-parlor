import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CustomerInfo from './../../pages/CustomerInfo/CustomerInfo';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br/>
          <img src="images/pizza_photo.png"/>
          <p>Pizza is great.</p>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
