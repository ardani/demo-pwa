import React, { Component } from 'react';
import { Page } from 'react-onsenui';
import MyToolbar from '../components/Toolbar';

const DefaultPage = (ComposedComponent) => class extends Component {
  render() {
    return (
    <Page renderToolbar={() => <MyToolbar {...this.props} />}>
      <ComposedComponent {...this.props} />
    </Page>
    )
  }
}

export default DefaultPage;
