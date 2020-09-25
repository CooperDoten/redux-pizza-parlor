import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PizzaItem.css'
//import NextButton from './NextButton';
import AddRemoveButton from './AddRemoveButton';

class PizzaItem extends Component {



    pizzaClick = (event) => {
    
    
    }

    render() {
        return (
            <div>
                <div className="pizzaBox">
                    <img src={this.props.pizza.image_path} alt={this.props.pizza.name} onClick={ () => this.clickPizza(this.props.pizza)}/>
                        <h2>{this.props.pizza.name}</h2>
                        <p>{this.props.pizza.description}</p>
                        <p>Price: {this.props.pizza.price}</p>
                        <AddRemoveButton onClick={(event)=> this.pizzaClick}
                        pizza={this.props.pizza}/>
                </div>
            </div>

        );
    }
}

export default connect()(PizzaItem); 