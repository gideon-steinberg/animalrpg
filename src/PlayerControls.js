import React, { Component } from 'react';

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerType : props.playerType,
      computerType : props.computerType,
      patCallback : props.patCallback
    };
  }
  
  render() {
    return ( 
      <div>
        <button
          className="PatButton"
          onClick={ () => this.state.patCallback() }
        >
          Pat the dog
        </button>
        <br />
        <button className="SecondButton" > Second Button </button>
        <br />
      </div>
    );
  }
}

export default PlayerControls;
