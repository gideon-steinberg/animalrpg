import React, { Component } from 'react';

class GameState extends Component {
  constructor() {
    super();
    
    this.state = {
      numberOfPlayerPats : 0,
      numberOfComputerPats : 0,
      numberOfPlayerHugs : 0,
      numberOfComputerHugs : 0
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

  calculatePatScore() {
    var computer = this.state.numberOfComputerPats;
    var player = this.state.numberOfPlayerPats;
    var result = computer + player;

    if ( Math.abs(player - computer) > 2 )
    {
      result = Math.floor(result / 2);
    }

    return result;
  }

  playerDogGotHugged() {
    var newState = Object.assign({}, this.state);
    newState.numberOfPlayerHugs = newState.numberOfPlayerHugs + 1;

    this.setState(newState);
  }

  computerDogGotHugged() {
    var newState = Object.assign({}, this.state);
    newState.numberOfComputerHugs = newState.numberOfComputerHugs + 1;

    this.setState(newState);
  }

  calculateHugScore() {
    var computer = this.state.numberOfComputerHugs;
    var player = this.state.numberOfPlayerHugs;
    var result = computer + player;

    if ( Math.abs(player - computer) < 4 )
    {
      result = Math.floor( result / 2 );
    }

    return result;
  }

  calculateTotalScore() {
    var result = this.calculatePatScore();
    result = result + this.calculateHugScore();
    return result;
  }

  render() {
    return (
      <div>
        Pat score = { this.calculatePatScore() }
        <br />
        Hug score = { this.calculateHugScore() }
        <br />
        Total score = { this.calculateTotalScore() }
      </div>
    );
  }
}

export default GameState;
