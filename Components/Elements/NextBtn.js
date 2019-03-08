import React, {Component} from 'react';
import screen from '../../constants/screen';
import {TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

export default class NextBtn extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.btnNext} onPress={this.props.change1}>
            <Text style={{color: '#fff'}}>Next</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    btnNext : {
        backgroundColor: '#3e7b70',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: screen.width/25,
        width: '70%',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },

});