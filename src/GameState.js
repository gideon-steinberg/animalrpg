import React, { Component } from 'react';

class GameState extends Component {
  constructor() {
    super();
    
    this.state = {
      numberOfPlayerPats : 0,
      numberOfComputerPats : 0
    };
  }

  playerDogGotPat() {
    var newState = Object.assign({}, this.state);
    newState.numberOfPlayerPats = newState.numberOfPlayerPats + 1;

    this.setState(newState);
  }

  computerDogGotPat() {
    var newState = Object.assign({}, this.state);
    newState.numberOfComputerPats = newState.numberOfComputerPats + 1;

    this.setState(newState);
  }

  calculateNumberOfPats() {
    var computer = this.state.numberOfComputerPats;
    var player = this.state.numberOfPlayerPats;
    var result = computer + player;

    if ( Math.abs(player - computer) > 2 )
    {
      result = Math.floor(result / 2);
    }

    return result;
  }

  render() {
    return (
      <div>
        Pat score = { this.calculateNumberOfPats() }
      </div>
    );
  }
}

export default GameState;
