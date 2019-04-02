
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions, StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}>
              <Text style={{position: 'relative', color: 'red', top: -35+'%', left: 93+'%', fontSize: 30, zIndex: 9999}}>x</Text>
            </TouchableOpacity>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
                Settings
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Messages')}>
                Messages
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default SideMenu;