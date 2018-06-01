import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user-list';

class App extends Component {
  render() {
    return (
      <div >
        <h1>User List:</h1>
        <UserList />
        <hr />
        <h1>User Details:</h1>
      </div>
    );
  }
}

export default App;
