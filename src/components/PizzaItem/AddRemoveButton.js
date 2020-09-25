import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddRemoveButton extends Component {

state={
    clicked: false
}
    toggleClick = (event) => {
        this.setState({
            clicked: !this.state.clicked
        })

    }

    render() {
        return (
   
                <button onClick={(event) => this.toggleClick()}>
            {
                    this.state.clicked ?
                    'Remove' :
                    'Add'
            }
                </button>
        );
    }
}

export default connect()(AddRemoveButton); 