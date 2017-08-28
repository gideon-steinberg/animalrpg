import React, { Component } from 'react';

class AnimalPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animalImage : this.props.image,
      animalName : this.props.name,
    };
  }

  render() {
    return (
      <img src={this.state.animalImage} className="TheAnimal" alt={this.state.animalName} width="500px" height="500px" />
    );
  }
}

export default AnimalPane;
