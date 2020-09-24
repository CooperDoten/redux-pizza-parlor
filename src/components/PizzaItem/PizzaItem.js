import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PizzaItem.css'

class PizzaItem extends Component {

    clickPizza = (pizza) => {
        console.log('Clicked', pizza.name);
    }

    render() {
        return (
            <div className="pizzaBox">
                <img src={this.props.pizza.image_path} alt={this.props.pizza.name} onClick={ () => this.clickPizza(this.props.pizza)}/>
                    <h2>{this.props.pizza.name}</h2>
                    <p>{this.props.pizza.description}</p>
                    <p>Price: {this.props.pizza.price}</p>
            </div>

        );
    }
}

export default connect()(PizzaItem); 