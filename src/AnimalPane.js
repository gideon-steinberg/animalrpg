import React, { Component } from 'react';

class AnimalPane extends Component {
  constructor(props) {
    super(props);

    var animal = this.getAnimal();
    this.state = {
      animalImage : animal[0],
      animalName : animal[1],
      isHuman : props.isHuman === true
    };
  }

  getAnimal() {
    return ["http://i.imgur.com/gSEFJey.jpg", "dog1"];
  }

  renderButtons() {
    if (!this.state.isHuman)
    {
      return (
        <div>
        </div>
      );
    }
    return (
      <div>
        <button className="FirstButton" > First Buttton </button>
        <br />
        <button className="SecondButton" > Second Button </button>
        <br />
      </div>
    );
  }

  render() {
    return (
      <div>
        <img src={this.state.animalImage} className="TheAnimal" alt={this.state.animalName} />
        { this.renderButtons() }
      </div>
    );
  }
}

export default AnimalPane;
