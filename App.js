import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import InitialForms from './Containers/InitialForms';
import WeeklyVisitation from './Components/WeeklyVisitation';
import FreePaid from './Components/FreePaid';

export default class App extends Component {
  render() {
      return (
          <InitialForms/>
        );
  }
}


