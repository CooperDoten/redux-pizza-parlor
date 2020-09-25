import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddRemoveButton extends Component {

state={
    clicked: false
}
    toggleClick = (event) => {
        console.log('Clicked', this.props.pizza.name);
        if(this.state.clicked === false){
            this.props.dispatch({
                type: "ADD_TO_CART",
                payload: this.props.pizza
            })
        }
        else{
            this.props.dispatch({
                type: "REMOVE",
                payload: this.props.pizza
            })
        }
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