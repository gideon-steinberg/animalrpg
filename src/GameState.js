import React, { Component } from 'react';

class GameState extends Component {
  constructor() {
    super();
    
    this.state = {
      numberOfPets : 0
    };
  }

  playerDogGotPat() {
    this.setState({
      numberOfPets : this.state.numberOfPets + 1
    });
  }

  render() {
    return (
      <div>
        Number of times pat = { this.state.numberOfPets }
      </div>
    );
  }
}

export default GameState;
