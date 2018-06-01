import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers';
import App from './App'


const store = createStore(allReducers);

ReactDOM.render(<App/>, document.getElementById('root'));

