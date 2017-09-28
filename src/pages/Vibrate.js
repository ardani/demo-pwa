import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import DefaultPage from "./Default";

class Vibrate extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isVibrate: false
    }
    this.buttonStyle = {
      marginTop: '30px',
      padding: '25px',
      fontSize: '18px'
    }
  }

  doVibrate () {
    let pattern = this.state.isVibrate === false ? [500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500] : 0;
    navigator.vibrate(pattern);
    this.setState({isVibrate: !this.state.isVibrate});
  }

  render () {
    return (
      <section style={{margin: '16px'}}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={(e) => this.doVibrate()} style={this.buttonStyle}
                  modifier='large'>Vibrate {this.state.isVibrate ? 'OFF' : 'ON'}</Button>
        </p>
      </section>
    )
  }
}

export default DefaultPage(Vibrate);