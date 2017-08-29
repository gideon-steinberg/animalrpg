import React, { Component } from 'react';

class HelpDialogButton extends Component {
  render() {
    return (
      <div>
          <button onClick = { this.props.onClick} >
            Next Help Message Please!
          </button>
        <hr />
      </div>
    );
  }
}

export default HelpDialogButton;
