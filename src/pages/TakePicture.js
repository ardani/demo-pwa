import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import Webcam from 'react-webcam';
import DefaultPage from "./Default";

class TakePicture extends Component {
  constructor (props) {
    super(props)
    this.state = {
      enableVideo: false,
      imageSrc: null
    }
    this.buttonStyle = {
      marginTop: '30px',
      padding: '25px',
      fontSize: '18px'
    }
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({imageSrc: imageSrc});
  };

  renderWebcam () {
    if (this.state.enableVideo) {
      return <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width='100%'/>
        <img alt="capture" width='100%' height='350' src={this.state.imageSrc}/>
        <Button style={{margin: '10px'}} onClick={this.capture}>Capture photo</Button>
        <Button style={{margin: '10px'}} onClick={() => {
          this.setState({enableVideo: false})
        }}>Disable Webcam</Button>
      </div>
    } else {
      return <p style={{textAlign: 'center'}}>
        <Button modifier='large' style={this.buttonStyle} onClick={() => {
          this.setState({enableVideo: true})
        }}>Enable Webcam</Button>
      </p>
    }
  }

  render () {
    return (
      <section style={{margin: '16px'}}>
        {this.renderWebcam()}
      </section>
    )
  }
}

export default DefaultPage(TakePicture);