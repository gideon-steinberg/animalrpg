import React, { Component } from 'react';

class GameState extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lastActions : Array(8).fill(''),
      numberOfActionsToDisplay : 8,
      numberOfPlayerPats : 0,
      numberOfComputerPats : 0,
      numberOfPlayerHugs : 0,
      numberOfComputerHugs : 0,
      playerType : props.playerType,
      computerType : props.computerType
    };
  }

  computerAction() {
    var random = Math.floor(Math.random() * 4) % 4;

    switch (random) {
      case 0:  this.playerGotPat(false);
      case 1:  this.playerGotHugged(false);
      case 2:  this.computerGotPat(false);
      default: this.computerGotHugged(false);
    }
  }

  playerGotPat(isPlayer) {
    var newState = Object.assign({}, this.state);
    newState.numberOfPlayerPats = newState.numberOfPlayerPats + 1;

    var actor = isPlayer ? "player" : "computer";
    newState.lastActions.push("The " + actor + " patted the players " + this.state.playerType + ".");
    newState.lastActions = newState.lastActions.slice(-this.state.numberOfActionsToDisplay);

    this.setState(newState);

    if (isPlayer) this.computerAction();
  }

  computerGotPat(isPlayer) {
    var newState = Object.assign({}, this.state);
    newState.numberOfComputerPats = newState.numberOfComputerPats + 1;

    var actor = isPlayer ? "player" : "computer";
    newState.lastActions.push("The " + actor + " patted the computers " + this.state.computerType + ".");
    newState.lastActions = newState.lastActions.slice(-this.state.numberOfActionsToDisplay);

    this.setState(newState);

    if (isPlayer) this.computerAction();
  }

  playerGotHugged(isPlayer) {
    var newState = Object.assign({}, this.state);
    newState.numberOfPlayerHugs = newState.numberOfPlayerHugs + 1;

    var actor = isPlayer ? "player" : "computer";
    newState.lastActions.push("The " + actor + " hugged the players " + this.state.playerType + ".");
    newState.lastActions = newState.lastActions.slice(-this.state.numberOfActionsToDisplay);

    this.setState(newState);

    if (isPlayer) this.computerAction();
  }

  computerGotHugged(isPlayer) {
    var newState = Object.assign({}, this.state);
    newState.numberOfComputerHugs = newState.numberOfComputerHugs + 1;

    var actor = isPlayer ? "player" : "computer";
    newState.lastActions.push("The " + actor + " hugged the computers " + this.state.computerType + ".");
    newState.lastActions = newState.lastActions.slice(-this.state.numberOfActionsToDisplay);

    this.setState(newState);

    if (isPlayer) this.computerAction();
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

        <hr />
        Action History:
        <ul>
          { this.state.lastActions.map(function(action, index) {
            return <li key={index}>{action}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default GameState;
