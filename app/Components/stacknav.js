import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Image,
  View, TouchableOpacity
} from 'react-native';

import { Container, Header, Content, Icon, Drawer  } from 'native-base';

import { DrawerActions, createStackNavigator } from 'react-navigation';
// import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "./MainScreen";
import SettingsPage from "./SettingsPage";
import Messages from "./Messages";
import SideMenu from "./SideMenu";

closeDrawer = () => {
  this._drawer._root.close()
};

openDrawer = () => {
  this._drawer._root.open()
}

const stackNav = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Calendar",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 40, color: 'white', marginLeft: 30 }} />
          </TouchableOpacity>
      ),
      headerRight: (<>
        <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
      </>
      ),
    })
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: ({ navigation }) => ({
      title: "settings",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },


  Messages: {
    screen: Messages,
    navigationOptions: ({ navigation }) => ({
      title: "Messages",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  }
});

export default stackNav;