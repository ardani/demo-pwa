import React, { Component } from 'react';
import { Page, Button } from 'react-onsenui';
import MyToolbar from '../components/Toolbar';

export default class extends Component {
    constructor(props) {
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

    doVibrate() {
        let pattern = this.state.isVibrate === false ? [500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500] : 0;
        navigator.vibrate(pattern);
        this.setState({isVibrate: !this.state.isVibrate});
    }

    render() {
        return (
        <Page renderToolbar={() => <MyToolbar title={this.props.title} />} >
         <section style={{margin: '16px'}}>
            <p style={{textAlign: 'center'}}>
                <Button onClick={(e) => this.doVibrate()} style={this.buttonStyle} modifier='large'>Vibrate {this.state.isVibrate ? 'OFF' : 'ON'}</Button>
            </p>
        </section>
        </Page>
        )
    }
}