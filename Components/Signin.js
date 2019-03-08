import React, {Component} from 'react';
import screen from '../constants/screen';
import {TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import fonts from '../src/utils/fonts';
import LoginForm from './LoginForm';

export default class Signin extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
          <ImageBackground source={require('../images/bg.jpg')} style={[styles.imageBg, {width: '100%', height: '100%', position: 'absolute'}]}></ImageBackground>
          <View style={styles.wrapper}>
            <View style={styles.logoBlock}>
                <Image source={require('../images/ordo_logo.png')} style={styles.logo}/>
            </View>
            <LoginForm 
              password={this.props.password}
              email={this.props.email}
              userLogin={this.props.userLogin}
              msg={this.props.msg}
              inputChange={(target, value) => this.props.inputChange(target, value)}/>
            <Text style={styles.text}>OR</Text>
            <TouchableOpacity style={styles.googlebutton} onPress={this.props.change1}>
              <View>
                  <Image source={require('../images/search.png')}/>
              </View>
              <Text style={{color: '#dc4e41'}}>SIGN IN WITH GOOGLE</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    width: '100%',
  },

  contentContainerStyle: {
    alignItems: 'center', 
  },

  wrapper: {
    flex: 1,
    flexDirection: 'column',
    width: '72%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 100
  },

  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  text: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 22,
    color: 'white'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  opacity: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 0, .1)',
    height: '100%',
    width: '100%',
  },

  logoBlock: {
    width: 115,
    minHeight: 90,
    maxHeight: 150,
    marginBottom: '20%'
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  googlebutton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: '#ffffff',
    marginTop: 50,
  },

});