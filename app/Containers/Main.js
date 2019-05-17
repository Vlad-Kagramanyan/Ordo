import React, { Component } from 'react';
import InitialForms from './InitialForms';
import { Root, Header } from 'native-base';
import ViewEvent from './ViewEvent';

export default class Main extends Component {
  render() {
    return (
      <Root>
        <Header androidStatusBarColor="#195c59" style={{ display: 'none' }} />
        <InitialForms />
        {/* <ViewEvent/> */}
      </Root>
    );
  }
}


