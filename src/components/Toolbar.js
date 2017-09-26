import React from 'react';
import {Toolbar} from 'react-onsenui';

export default class extends React.Component {
    render() {
      return(
        <Toolbar modifier={this.props.modifier} >
          <div className="center">{this.props.title}</div>
        </Toolbar>
      )
    }
  }