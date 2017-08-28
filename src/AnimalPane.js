import React, { Component } from 'react';

class AnimalPane extends Component {
  getAnimal(){
    return ["http://i.imgur.com/gSEFJey.jpg", "dog1"];
  }
  render(){
    var animal = this.getAnimal();
    return (
      <div>
        <button className="FirstButton" > First Buttton </button>
        <br />
        <button className="SecondButton" > Second Button </button>
        <br />
        <img src={animal[0]} className="TheAnimal" alt={animal[1]} />
      </div>
    );
  }
}

export default AnimalPane;
