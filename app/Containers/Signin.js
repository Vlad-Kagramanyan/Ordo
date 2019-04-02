import React, {Component} from 'react';
import screen from '../constants/screen';
import {TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from 'react-native-google-signin';
import LoginForm from '../Components/LoginForm';

export default class Signin extends Component {
  state = {
    userInfo: "",
    error: ""
  }

  async componentDidMount () {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // google services are available
    } catch (err) {
      console.error('play services are not available');
      this.setState({ error: 'play services are not available' });
    }

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: "547808104761-orhk06j8l2jrljao2v1475v5ri5ajpff.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
    })
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.props.googleFetch(userInfo)
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow')
        this.setState({ error: 'user cancelled the login flow' });
      } else if (error.code === statusCodes.IN_PROGRESS) {
         console.log('operation (f.e. sign in) is in progress already')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('// play services not available or outdated')
        this.setState({ error: 'play services not available or outdated' });
      } else {
        console.log('// some other error happened')
        this.setState({ error: 'some other error happened' });
      }
    }
  };

  render() {
    console.log('state s', this.state)
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
          <ImageBackground source={require('../images/bg.jpg')} style={[styles.imageBg, {width: '100%', height: '100%', position: 'absolute'}]}></ImageBackground>
          <View style={styles.wrapper}>
            <View style={styles.logoBlock}>
                <Image source={require('../images/ordo_logo.png')} style={styles.logo}/>
            </View>
            <LoginForm 
              fetch={this.props.fetch}
              password={this.props.password}
              email={this.props.email}
              userLogin={this.props.userLogin}
              msg={this.props.msg}
              inputChange={(target, value) => this.props.inputChange(target, value)}/>
            <Text style={styles.text}>OR</Text>
            {this.state.error.length > 0 && <Text style={[styles.text, {color: 'red'}]}>{this.state.error}</Text>}
            <TouchableOpacity style={styles.googlebutton} onPress={this.signIn}>
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