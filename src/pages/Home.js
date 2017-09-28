import React, { Component } from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';
import VibratePage from './Vibrate';
import TakePicturePage from './TakePicture';
import Quote from './Quotes';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0
    };
    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs (activeIndex, tabbar) {
    return [
      {
        content: <VibratePage
          key='0'
          title='Vibrate Test'
          active={activeIndex === 0}
          tabbar={tabbar}/>,
        tab: <Tab
          key='0'
          label='Vibrate'
          icon='md-vibration'/>
      },
      {
        content: <TakePicturePage
          key='1'
          title='Take Picture'
          active={activeIndex === 1}
          tabbar={tabbar}/>,
        tab: <Tab
          key='1'
          label='Take Picture'
          icon='md-camera-add'/>
      },
      {
        content: <Quote
          key='2'
          title='Quote'
          active={activeIndex === 2}
          tabbar={tabbar}/>,
        tab: <Tab
          key='2'
          label='Quote'
          icon='md-quote'/>
      }
    ];
  }

  render () {
    return (
      <Page>
        <Tabbar
          index={this.state.index}
          onPreChange={(event) => {
            this.setState({index: event.index});
          }
          }
          position='bottom'
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

export default Home;
