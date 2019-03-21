import React, { Component } from 'react';
import screen from '../constants/screen';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Picker, ScrollView, Image, TextInput, ImageBackground, StyleSheet, Text, View } from 'react-native';
import fonts from '../src/utils/fonts';
import date from '../constants/date';

export default class ChildForm extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
  }

  componentDidMount() {
    if (this.props.childCount != this.state.count) {
      this.props.reset()
      this.setState({ count: this.props.childCount })
    }
  }

  render() {
    let msg = this.props.msg ? <Text style={styles.msg}>{this.props.msg}</Text> : false;
    let data = [{
      value: 'male',
    }, {
      value: 'female',
    }];
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.continer}>
        <ImageBackground source={require('../images/bg.jpg')} style={styles.imageBg}></ImageBackground>
        <View style={styles.wrapper}>
          <View style={styles.logoBlock}>
            <Image source={require('../images/ordo_logo.png')} style={styles.logo} />
          </View>
          <Text style={styles.title}>Child`s info</Text>
          <TextInput style={styles.input} placeholder="First name" placeholderTextColor="#89c194" value={this.props.firstName} onChangeText={(text) => this.props.inputChange('firstName', text)} />
          <TextInput style={styles.input} placeholder="Last name" placeholderTextColor="#89c194" value={this.props.lastName} onChangeText={(text) => this.props.inputChange('lastName', text)} />
          <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }}
            containerStyle={[styles.select, { width: '100%' }]} label='Gender' data={[{ value: 'male' }, { value: 'female' }]}
            value={this.props.gender} onChangeText={this.props.setGender} />
          <Text style={styles.bithText}>Bith day</Text>
          <View style={styles.bithDatewrapper}>
            <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }} value={this.props.month} onChangeText={this.props.setMonth}
              containerStyle={[styles.select, { width: '30%' }]} label='Month' data={date.months} />
            <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }} value={this.props.day} onChangeText={this.props.setDay}
              containerStyle={[styles.select, { width: '30%' }]} label='Day' data={date.days.days(this.props.month, this.props.year)} />
            <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }} value={this.props.year} onChangeText={this.props.setYear}
              containerStyle={[styles.select, { width: '30%' }]} label='Yaar' data={date.years.years()} />
          </View>
          {msg}
          <View style={styles.input} style={styles.btnGroup}>
            <TouchableOpacity style={styles.btnNext} onPress={this.props.childFetch}>
              <Text style={{ color: '#fff' }}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnplus} onPress={this.props.addChildFetch}>
              <Text style={{ color: '#fff' }}>add Child</Text>
            </TouchableOpacity>
          </View>
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

  input: {
    borderColor: '#252525',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 11,
    width: '100%',
    fontSize: screen.width / 25,
    marginBottom: 10,
  },

  btnGroup: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },

  btnNext: {
    backgroundColor: '#3e7b70',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: screen.width / 25,
    width: '50%'
  },

  btnplus: {
    backgroundColor: '#3e7b70',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: screen.width / 25,
    width: '45%'
  },

  title: {
    color: '#fff',
    margin: '10%',
    fontSize: screen.width / 10
  },

  select: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 14,
    paddingBottom: -2,
    marginBottom: 10,
  },

  bithDatewrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  bithText: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: 15
  },

  msg: {
    color: 'red',
    textAlign: "center",
    fontSize: 16,
    marginBottom: 15
  },


  logo: {
    width: 125,
    height: 95,
  },

});