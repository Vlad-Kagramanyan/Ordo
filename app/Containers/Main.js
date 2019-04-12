import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import InitialForms from './InitialForms';
import { Root, Header } from 'native-base';
import WeeklyVisitation from './WeeklyVisitation';
import Home from './Home';

export default class Main extends Component {
  render() {
    return (
      <Root>
        <Header androidStatusBarColor="#195c59" style={{ display: 'none' }} />
        <InitialForms />
      </Root>
    );
  }
}


