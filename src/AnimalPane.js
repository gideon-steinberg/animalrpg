import React, { Component } from 'react';

class AnimalPane extends Component {
  getAnimal(){
    return ["http://i.imgur.com/gSEFJey.jpg", "dog1"];
  }
  render(){
    var animal = this.getAnimal();
    return (
      <table className="AnimalPane">
        <tr>
          <button className="FirstButton" > First Buttton </button>
        </tr>
        <tr>
          <button className="SecondButton" > Second Button </button>
        </tr>
        <tr>
          <img src={animal[0]} className="TheAnimal" alt={animal[1]} />
        </tr>
      </table>
    );
  }
}

export default AnimalPane;
