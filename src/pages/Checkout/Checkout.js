import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {


    render() {
        console.log('in checkout ', this.props.reduxState)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Cost
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            Name of Pizza
                            </td>
                          
                        </tr>
                        
                    </tbody>
                </table>
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