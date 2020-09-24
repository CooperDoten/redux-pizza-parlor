import React, { Component } from 'react';
import {connect} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import './Pizzas.css'

class Pizzas extends Component {


    render() {
        return (
            <div className= "pizzaDiv">
                 {this.props.reduxState.pizzaReducer.map((pizza, i) => {
                       return (
                           <PizzaItem key={pizza.id} pizza={pizza} />
                       );
                    })} 
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    console.log(reduxState);
  return {
      reduxState
  }
}
  
export default connect(mapStateToProps)(Pizzas);