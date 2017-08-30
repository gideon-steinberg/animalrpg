import React, { Component } from 'react';
import { availableAnimals } from './utils/AnimalGenerator.js'

class PlayerUpdateAnimalControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateCallback : props.updateCallback
    };
  }

  blank() {}
  
  renderButtons() {
    var callback = this.state.updateCallback;

    return availableAnimals().map(function(animal, key) {
      return (
        <button key={key} onClick={ () => callback(animal) }>
          Change to {animal}
        </button>
      );
    });
  }

  render() {
    return (
      <div>
          { this.renderButtons() }
      </div>
    );
  }
}

export default PlayerUpdateAnimalControls;
