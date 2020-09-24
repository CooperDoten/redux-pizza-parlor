import React, { Component } from 'react';
import {connect} from 'react-redux';

class Cart extends Component {

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
             <p>In our cart</p>
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