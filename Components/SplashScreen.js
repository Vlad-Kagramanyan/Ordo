import React, {Component} from 'react';
import screen from '../constants/screen';
import {TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import fonts from '../src/utils/fonts';
import LoginForm from './LoginForm';

export default class SplashScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
          <ImageBackground source={require('../images/bg.jpg')} style={[styles.imageBg, {width: '100%', height: '100%', position: 'absolute'}]}></ImageBackground>
            <View style={styles.logoBlock}>
                <Image source={require('../images/ordo_logo.png')} style={styles.logo}/>
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
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },

  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  logo: {
    width: 165,
    height: 127,
  },

});