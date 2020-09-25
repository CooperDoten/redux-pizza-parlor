import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


// REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const pizzaReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZA':
          return action.payload;
        default:
          return state;
      }

}

const cartReducer = (state = [], action) => {
    console.log('this is what we got', action.payload)
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload];
    }
    else if(action.type === "REMOVE"){
       let pizzaToRemove = state.indexOf(action.payload);
       console.log(pizzaToRemove);
       state.splice(pizzaToRemove, 1);
       return [...state]
    }
    return state;
}


const store = createStore(
    combineReducers({
       pizzaReducer,
       cartReducer
    }),
   applyMiddleware(logger)
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 
