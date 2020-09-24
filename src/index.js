import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
    combineReducers({
        //enter reducer names here,

    }),
    applyMiddleware(logger)
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 
