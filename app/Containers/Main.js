import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import InitialForms from './InitialForms';
import WeeklyVisitation from './WeeklyVisitation';
import Home from './Home';

export default class Main extends Component {
  render() {
      return (
          <InitialForms/>
        );
  }
}


