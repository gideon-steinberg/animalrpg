import React, { Component } from 'react';
import { getAnimalLink } from './utils/AnimalGenerator.js'

class AnimalPane extends Component {
  constructor(props) {
    super(props);
    var typeFromProps = this.props.type;
    this.state = {
      type : typeFromProps,
      image : getAnimalLink(typeFromProps)
    };
  }

  render() {
    return (
      <img src={this.state.image} alt={this.state.type} width="500px" height="500px" />
    );
  }
}

export default AnimalPane;
