import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {
    render() {
        
        return (
            <div>
                IN PIZZAORDER.js
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