import React, {Component} from 'react';
import screen from '../constants/screen';
import {TouchableOpacity, Button, TextInput, StyleSheet, Text, View} from 'react-native';

export default class LoginForm extends Component {

  render() {
    let msg = this.props.msg ? <Text style={styles.msg}>{this.props.msg}</Text>: false;

    return (
      <View style={styles.loginForm}>
          <TextInput style={styles.input} placeholder="email" name="email" value={this.props.email} placeholderTextColor="#89c194" onChangeText={(text) => this.props.inputChange('email', text)}/>
          <TextInput style={styles.input} secureTextEntry={true} placeholder="password" name="password" value={this.props.password} placeholderTextColor="#89c194"  onChangeText={(text) => this.props.inputChange('password', text)}/>
          {msg}
          <TouchableOpacity style={styles.btnSignin} onPress={this.props.userLogin}>
              <Text style={{color: '#fff'}}>Sign IN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginForm: {
    width: '100%'
  },

  input: {
    borderColor: '#252525',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 14,
    width: '100%',
    fontSize: screen.width/25,
    marginBottom: 10,
  },

  btnSignin : {
    backgroundColor: '#3e7b70',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: screen.width/25
  },
  msg: {
    color: 'red', 
    textAlign: "center",
    fontSize: 16,
    marginBottom: 15
  }
});