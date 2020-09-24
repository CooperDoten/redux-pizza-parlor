import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {


    render() {
        console.log('in checkout ', this.props.reduxState)
        return (
            <div>
                IN CHECKOUT.js
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