import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Cart.css'

class Cart extends Component {


  
    render() {
        let getPrices =  this.props.reduxState.cartReducer.map(pizza => {
            return Number(pizza.price);
        });
        let getTotal = getPrices.reduce((a,b) => a + b, 0)
        console.log('in cart ', this.props.reduxState)
        console.log(getPrices.reduce((a,b) => a + b, 0)) ;
        console.log( 'these are our prices', 
        this.props.reduxState.cartReducer.map(pizza => {
             return pizza.price;
        }));
      
        return (
            <div>
                <p>Total: ${getTotal}</p>
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
  
export default connect(mapStateToProps)(Cart);