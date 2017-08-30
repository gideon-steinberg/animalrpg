import React, { Component } from 'react';

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerType : props.playerType,
      computerType : props.computerType,
      playerPatCallback : props.playerPatCallback,
      computerPatCallback : props.computerPatCallback,
      playerHugCallback : props.playerHugCallback,
      computerHugCallback : props.computerHugCallback
    };
  }

  setTypes(playerType, computerType) {
    var newState = Object.assign({}, this.state);
    newState.playerType = playerType;
    newState.computerType = computerType;    

    this.setState(newState);
  }
  
  render() {
    return ( 
      <div>
        <button
          onClick={ () => this.state.playerPatCallback() }
        >
          Pat your {this.state.playerType}
        </button>
        <br />
        <button
          onClick={ () => this.state.computerPatCallback() }
        >
          Pat the computers {this.state.computerType}
        </button>
        <br />

        <button
          onClick={ () => this.state.playerHugCallback() }
        >
          Hug your {this.state.playerType}
        </button>
        <br />
        <button
          onClick={ () => this.state.computerHugCallback() }
        >
          Hug the computers {this.state.computerType}
        </button>
        <br />

      </div>
    );
  }
}

export default PlayerControls;
