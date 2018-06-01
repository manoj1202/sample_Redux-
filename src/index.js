import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers'

const store = createStore(allReducers);

ReactDOM.render(<h1>Sample Redux</h1>, document.getElementById('root'));

