import React, { Component } from 'react';
import { connect } from 'react-redux'

class PizzaItem extends Component {

    clickPizza = (pizza) => {
        console.log('Clicked', pizza.name);
    }

    render() {
        return (
            <div  className="pizza">
            <div>
                <img src={this.props.pizza.image_path} alt={this.props.pizza.name} onClick={ () => this.clickPizza(this.props.pizza)}/>
                <h2>{this.props.pizza.name}</h2>
                <p>{this.props.pizza.description}</p>
                <p>Price: {this.props.pizza.price}</p>
            </div>
        </div>
        );
    }
}

export default connect()(PizzaItem); 