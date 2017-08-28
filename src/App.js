import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalPane from './AnimalPane.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <table className= "Board">
          <tr>
            <td>
              <AnimalPane />
            </td>
            <td>
              <AnimalPane />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
