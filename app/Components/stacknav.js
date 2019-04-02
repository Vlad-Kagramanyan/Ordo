import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Image,
  View, TouchableOpacity
} from 'react-native';

import { Container, Header, Content, Icon } from 'native-base';

import { DrawerActions, createStackNavigator } from 'react-navigation';
// import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "./MainScreen";
import SettingsPage from "./SettingsPage";
import Messages from "./Messages";

const stackNav = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Calendar",
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerRight: (<>
        <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 40, color: 'white', marginRight: 30 }} />
        </TouchableOpacity>
      </>
      ),
    })
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: ({ navigation }) => ({
      title: "settings",
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 40, color: 'black', marginRight: 30 }} />
          </TouchableOpacity>
        </>
      ),
    })
  },
  Messages: {
    screen: Messages,
    navigationOptions: ({ navigation }) => ({
      title: "Messages",
      headerRight: (<>
        <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 40, color: 'black', marginRight: 30 }} />
        </TouchableOpacity>
      </>
      ),
    })
  }
});

export default stackNav;