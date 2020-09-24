import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({
            type: 'CLEAR_CART'
        })
    }

    render() {
        console.log('in checkout ', this.props.reduxState)
        return (
            <div>
             IN CART.js
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
  
export default connect(mapStateToProps)(Checkout);