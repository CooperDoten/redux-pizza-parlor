import React, { Component } from 'react';
import { connect } from 'react-redux'

class CustomerInfo extends Component {
    state = {

       customerInfo: { 
            name: '',
            address: '',
            city: '',
            zip: ''
        }
    }
    
        handleChangeFor = (event, property) => {
            this.setState({
               customerInfo: {
                   ...this.state.customerInfo,
                   [property]: event.target.value
               }
            });
        }

       sendDataToRedux = () => {
        this.props.dispatch({
            type: 'CUSTOMER_INFO',
            payload: this.state.customerInfo
        })
       } 

    render() {
        console.log(this.state.customerInfo);
        return (
            <div>

                <form onSubmit={this.sendDataToRedux}>
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={(event) => this.handleChangeFor(event, 'name')}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={(event) => this.handleChangeFor(event, 'address')}
                        placeholder="Street Address"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={(event) => this.handleChangeFor(event, 'city')}
                        placeholder="City"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={(event) => this.handleChangeFor(event, 'zip')}
                        placeholder="Zip"
                    />


{/* *name*, *street address*, *city* and *zip*.  */}

                    <button type="submit">Add Pizza</button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(CustomerInfo); 