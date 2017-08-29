import React, { Component } from 'react';
import Board from './Board.js'
import HelpDialog from './HelpDialog.js'

class App extends Component {
  render() {
    return (
      <div>
        <Board />
        <hr />
        <HelpDialog />
      </div>
    );
  }
}

export default App;
