import React, { Component } from 'react';

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerType : props.playerType,
      computerType : props.computerType,
      playerPatCallback : props.playerPatCallback,
      computerPatCallback : props.computerPatCallback
    };
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
        <br />
      </div>
    );
  }
}

export default PlayerControls;
