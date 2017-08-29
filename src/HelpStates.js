import React, { Component } from 'react';

export class HelpState1 extends Component {
  render() {
    return (
      <div>
        Hi!
        <br />
        Welcome to this Animal rpg
        <br />
        For more help, please hit the button above
        <hr />
      </div>
    );
  }
}

export class HelpState2 extends Component {
  render() {
    return (
      <div>
        This is a non-competitive rpg
        <br />
        You work together with the computer
        <br />
        Every turn you chose an action and then the computer does
        <hr />
      </div>
    );
  }
}

export class HelpState3 extends Component {
  render() {
    return (
      <div>
        Your score is determined in the following way
        <br />
        Your total score is the Pat score + the Hug Score
        <br />
        <br />
        The Pat Score is the number of pats both of the animals receive
        <br />
        However if either animal gets too many pats the Pat score is halved
        <br />
        <br />
        The Hug Score is the number of hugs both of the animals receive
        <br />
        It is halved unless one animal has way more hugs than the other
        <hr />
      </div>
    );
  }
}
