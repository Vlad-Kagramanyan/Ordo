import React, { Component } from 'react';
import styles from './SideMenu.style';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { DrawerActions, StackNavigator } from 'react-navigation';
import { Container, Content, ListItem, Text, Left, Header, Body, Thumbnail, Right, Button, StatusBar, Row } from 'native-base';
import avatarLink from '../constants/avatar';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    const user = this.props.user.data.activeUser;
    const imageUrl = avatarLink + user.avatar
    return (
      <Container style={{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0, .1)' }}>
        <Content style={[styles.container, { backgroundColor: '#3e7b70', width: 80 + '%' }]}>
          <Header androidStatusBarColor="#195c59" style={{ display: 'none' }} />
          <ListItem avatar noBorder style={{ marginBottom: 20 }}>
            <Left >
              {this.props.user.data.activeUser.avatar ? <Thumbnail source={{ uri: imageUrl }} /> :
                <Thumbnail source={require('../images/empty_avatar.jpg')} />}
            </Left>
            <Body>
              <Text style={[styles.navItemStyle, { fontSize: 22 }]} onPress={this.navigateToScreen('Settings')}>{user.first_name}</Text>
              <Text style={styles.navItemStyle} note>{user.email}</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={this.navigateToScreen('Settings')}>
                <Thumbnail source={require('../images/settings.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            </Right>
          </ListItem>
          <Content>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/calendar-icon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Main')}>Calendar</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/message-icon.png')} style={{ width: 25, height: 17, }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Messages')}>Messages</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/call-icon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Contacts')}>Contacts</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/dollar-icon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Expenses')}>Expenses</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/group-icon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Users')}>Users</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/info-icon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} >Help</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/logout-icon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} >Logout</Text>
              </Body>
            </ListItem>
          </Content>
        </Content>
        <Button transparent style={{ width: 20 + '%', height: 100 + '%'}} onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}>
        </Button>
      </Container>
    );
  }
}


mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    changeUserData: (data, token) => {
      action.changeUserData(dispatch, data, token)
    },
    uploadimage: (data, token) => {
      action.uploadimage(dispatch, data, token)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)