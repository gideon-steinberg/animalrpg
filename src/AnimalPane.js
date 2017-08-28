import React, { Component } from 'react';

class AnimalPane extends Component {
  getAnimal(){
    return "http://i.imgur.com/gSEFJey.jpg";
  }
  render(){
    return (
      <div className="AnimalPane">
        <button className="FirstButton" > First Buttton </button>
	<button className="SecondButton" > Second Button </button>
	<img src={this.getAnimal()} className="TheAnimal" />
      </div>
    );
  }
}

export default AnimalPane;
