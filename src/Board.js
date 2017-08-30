import React, { Component } from 'react';
import AnimalPane from './AnimalPane.js';
import PlayerControls from './PlayerControls.js';
import GameState from './GameState.js';
import { availableAnimals } from './utils/AnimalGenerator.js'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      playerAnimalType : availableAnimals()[0],
      computerAnimalType : availableAnimals()[0]
    };
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
                type = { this.state.playerAnimalType }
              />
            </td>
            <td>
              <AnimalPane
                type = { this.state.computerAnimalType }
              />
            </td>
            <td>
              <PlayerControls
                playerType = { this.state.playerAnimalType }
                computerType = { this.state.computerAnimalType }
                playerPatCallback =   { () => this.gameState.playerGotPat(true) }
                computerPatCallback = { () => this.gameState.computerGotPat(true) }
                playerHugCallback =   { () => this.gameState.playerGotHugged(true) }
                computerHugCallback = { () => this.gameState.computerGotHugged(true) }
               />
              <hr />
              <GameState
                ref={(gameState) => {this.gameState = gameState}}
                playerType = { this.state.playerAnimalType }
                computerType = { this.state.computerAnimalType }
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;
