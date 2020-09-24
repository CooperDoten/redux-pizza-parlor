import React, { Component } from 'react';
import { connect } from 'react-redux'

class CustomerInfo extends Component {
    render() {
        return (
            <div>

                <form onSubmit={this.handleInfoSubmit}>
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={this.handleNameChange}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={this.handleAddressChange}
                        placeholder="Street Address"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={this.handleCityChange}
                        placeholder="City"
                    />
                    <input
                        type="text"
                        // value={this.state.newArtist}
                        onChange={this.handleZipChange}
                        placeholder="Zip"
                    />


{/* *name*, *street address*, *city* and *zip*.  */}

                    <button type="submit">Add Artist</button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(CustomerInfo); 