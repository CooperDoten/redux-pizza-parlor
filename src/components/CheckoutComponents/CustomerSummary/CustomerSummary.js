import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {

    render() {
        console.log('in checkout ', this.props.reduxState)
        return (
            <div>
                {/* <p>{this.props.reduxState.customerInfo.customer_name}</p>
                <p>{this.props.reduxState.customerInfo.pizza.name}</p>
                <p>{this.props.reduxState.customerInfo.pizza.description}</p>
                <p>{this.props.reduxState.customerInfo.pizza.price}</p> */}
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