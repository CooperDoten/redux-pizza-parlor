import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {

    handleCheckout = () => {
     
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCheckout}>Checkout</button>
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