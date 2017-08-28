import React, { Component } from 'react';
import AnimalPane from './AnimalPane.js';

class Board extends Component {
  constructor(){
    super();

    this.state = {
      dogsUsed : []
    };
    this.state.playerAnimal = this.getAnimal();
    this.state.computerAnimal = this.getAnimal();
  }

  getAnimal() {
    var dogs = [
      ["http://i.imgur.com/gSEFJey.jpg", "dog1"],
      ["https://i.redd.it/jir3ivdb1diz.jpg", "dog2"],
      ["https://i.redd.it/el7zyljm7diz.jpg", "dog3"],
      ["https://i.redd.it/ocm8vwpsbciz.jpg", "dog4"],
      ["https://i.redd.it/fib9v78bs9iz.jpg", "dog5"]
    ];

    var random = Math.random();
    var randomDog = Math.floor(random * dogs.length)
    
    while (this.state.dogsUsed.includes(randomDog))
    {
      random = Math.random();
      randomDog = Math.floor(random * dogs.length)
    }

    this.state.dogsUsed.push(randomDog);

    return dogs[randomDog];
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
          </tr>
            <td>
              <AnimalPane image={this.state.computerAnimal[0]} name = {this.state.computerAnimal[1]} />
            </td>
            <td>
              <AnimalPane image={this.state.playerAnimal[0]} name = {this.state.playerAnimal[1]} />
            </td>
          <tr>
            <button className="FirstButton" > First Buttton </button>
            <br />
            <button className="SecondButton" > Second Button </button>
            <br />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;
