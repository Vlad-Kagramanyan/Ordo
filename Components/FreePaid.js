import React, {Component} from 'react';
import screen from '../constants/screen';
import {TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import fonts from '../src/utils/fonts';
import LoginForm from './LoginForm';

export default class FreePaid extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
          <ImageBackground source={require('../images/bg.jpg')} style={[styles.imageBg, {width: '100%', height: '100%', position: 'absolute'}]}></ImageBackground>
          <View style={styles.wrapper}>
            <View style={styles.logoBlock}>
                <Image source={require('../images/ordo_logo.png')} style={styles.logo}/>
            </View>
            <TouchableOpacity style={styles.btnNext}>
                <Text style={{color: '#fff', fontSize: 20}}>FREE VERSION FEATURES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googlebutton} onPress={this.props.change1}>
              <Text style={{color: 'white', fontSize: 20}}>PAID VERSION FEATURES</Text>
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
    paddingTop: screen.height/5,
    paddingBottom: screen.height/3
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

    logoBlock: {
        marginBottom: '20%'
    },

  logo: {
    width: 115,
    maxHeight: 90,
  },

  googlebutton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#dc4e41',
    marginTop: 50,
  },

  btnNext : {
    backgroundColor: '#3e7b70',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: screen.width/25,
    width: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
  },

});