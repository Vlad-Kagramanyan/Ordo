
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { DrawerActions, StackNavigator } from 'react-navigation';
import { Container, Content, ListItem, Text,  Left, Header, Body, Thumbnail, Right, Button, StatusBar } from 'native-base';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <Container style={[styles.container, { backgroundColor: '#3e7b70' }]}>
      <Header androidStatusBarColor="#195c59" style={{display:'none'}}/>
        <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}>
          <Text style={{ position: 'relative', color: 'white', top: -35 + '%', left: 93 + '%', fontSize: 30, zIndex: 9999 }}>x</Text>
        </TouchableOpacity>
        <ListItem avatar noBorder style={{ marginBottom: 20 }}>
          <Left >
            <Thumbnail
              source={{ uri: 'data:image/jpeg;base64,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' }} />
          </Left>
          <Body>
            <Text  style={[styles.navItemStyle, { fontSize: 22 }]} onPress={this.navigateToScreen('Settings')}>Parent's Name</Text>
            <Text style={styles.navItemStyle} note>example@gmail.com</Text>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.navigateToScreen('Settings')}>
              <Thumbnail source={require('../images/settings.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          </Right>
        </ListItem>
        <Content>
          <ListItem noBorder icon>
            <Left>
              <Thumbnail square source={require('../images/calendar-icon.png')} style={{ width: 20, height: 20 }} />
            </Left>
            <Body style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Main')}>Calendar</Text>
            </Body>
          </ListItem>
          <ListItem noBorder icon>
            <Left>
              <Thumbnail square source={require('../images/message-icon.png')} style={{ width: 25, height: 17 }} />
            </Left>
            <Body style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Messages')}>Messages</Text>
            </Body>
          </ListItem>
          <ListItem noBorder icon>
            <Left>
              <Thumbnail square source={require('../images/call-icon.png')} style={{ width: 20, height: 20 }} />
            </Left>
            <Body style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Messages')}>Contacts</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}


export default SideMenu;