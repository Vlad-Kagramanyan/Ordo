import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import { AppRegistry, Dimensions } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import SideMenu from '../Components/SideMenu';
import stackNav from './stacknav';



const drawernav = createDrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 80, 
    drawerBackgroundColor: 'transparent' 
});

export default createAppContainer(drawernav);