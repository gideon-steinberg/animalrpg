import React, { Component } from 'react';
import { HelpState1, HelpState2, HelpState3 } from './HelpStates.js'
import HelpDialogButton from './HelpDialogButton.js'

class HelpDialog extends Component {
  constructor(){
    super();
    this.state = {
      dialogTree : 0
    };
  }

  nextHelpItem() {
    var nextState = (this.state.dialogTree + 1) % 3;

    // Don't show the welcome message again
    if (nextState === 0) { nextState = 1; }
    this.setState( { dialogTree : nextState }); 
  }

  render() {
    if (this.state.dialogTree === 0){
      return (
        <div>
          <HelpDialogButton
            onClick = { () => this.nextHelpItem() }
          />
          <HelpState1 />
        </div>
      );
    } else if (this.state.dialogTree === 1) {
      return (
        <div>
          <HelpDialogButton
            onClick = { () => this.nextHelpItem() }
          />
          <HelpState2 />
        </div>
      );
    } else {
      return (
        <div>
          <HelpDialogButton
            onClick = { () => this.nextHelpItem() }
          />
          <HelpState3 />
        </div>
      );

    }
  }
}

export default HelpDialog;
