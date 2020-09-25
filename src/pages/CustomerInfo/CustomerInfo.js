import React, { Component } from 'react';
import { connect } from 'react-redux'

class CustomerInfo extends Component {
    state = {
        name: '',
        address: '',
        city: '',
        zip: ''
    }
    
        handleChangeFor = () => {
    
        }

    render() {
        return (
            <div>

                <form onSubmit={this.handleInfoSubmit}>
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={this.handleChangeFor}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={this.handleChangeFor}
                        placeholder="Street Address"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={this.handleChangeFor}
                        placeholder="City"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={this.handleChangeFor}
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