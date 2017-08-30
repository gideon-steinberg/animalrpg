import React, { Component } from 'react';
import AnimalPane from './AnimalPane.js';
import PlayerControls from './PlayerControls.js';
import GameState from './GameState.js';
import PlayerUpdateAnimalControls from './PlayerUpdateAnimalControls.js'

import { availableAnimals } from './utils/AnimalGenerator.js'

class Board extends Component {

  constructor() {
    super();

    var player = availableAnimals()[0];

    this.state = {
      playerType : player,
      computerType : this.getNewComputerType(player)
    }
  }

  getNewComputerType(playerType) {

    var types = availableAnimals().filter(function(animal){
      return animal !== playerType;
    });

    var random = Math.floor(Math.random() * types.length);
    return types[random]; 
  }

  setPlayerType(playerType) {
    var computerType = this.getNewComputerType(playerType); 

    this.playerAnimalPane.setAnimalType(playerType);
    this.computerAnimalPane.setAnimalType(computerType);
    this.gameState.setTypes(playerType, computerType);
    this.playerControls.setTypes(playerType, computerType);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td> Player </td>
            <td> Computer </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <AnimalPane
                type = { this.state.playerType }
                ref={(playerAnimalPane) => {this.playerAnimalPane = playerAnimalPane}}
              />
            </td>
            <td>
              <AnimalPane
                type = { this.state.computerType }
                ref={(computerAnimalPane) => {this.computerAnimalPane = computerAnimalPane}}
              />
            </td>
            <td>
              <PlayerControls
                playerType = { this.state.playerType }
                computerType = { this.state.computerType }
                playerPatCallback =   { () => this.gameState.playerGotPat(true) }
                computerPatCallback = { () => this.gameState.computerGotPat(true) }
                playerHugCallback =   { () => this.gameState.playerGotHugged(true) }
                computerHugCallback = { () => this.gameState.computerGotHugged(true) }
                ref={(playerControls) => {this.playerControls = playerControls}}
               />
              <hr />
              <GameState
                ref={(gameState) => {this.gameState = gameState}}
                playerType = { this.state.playerType }
                computerType = { this.state.computerType }
              />
            </td>
          </tr>
          <tr>
            <td>
              <PlayerUpdateAnimalControls
                updateCallback = { (type) => this.setPlayerType(type) }
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;
