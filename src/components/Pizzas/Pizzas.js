import React, { Component } from 'react';
import {connect} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

class Pizzas extends Component {


    render() {
            
        return (
            <div>
                 {this.props.reduxState.pizzas.map((pizza, i) => {
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