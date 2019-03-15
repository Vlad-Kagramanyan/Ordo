import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import InitialForms from './InitialForms';
import WeeklyVisitation from '../Components/WeeklyVisitation';
import FreePaid from '../Components/FreePaid';

export default class Main extends Component {
  render() {
      return (
          <InitialForms/>
        );
  }
}


