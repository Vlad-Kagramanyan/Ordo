import React, {Component} from 'react';
import screen from '../constants/screen';
import { Dropdown } from 'react-native-material-dropdown';
import {TouchableOpacity, Picker, ScrollView, Image, TextInput, ImageBackground, StyleSheet, Text, View} from 'react-native';
import fonts from '../src/utils/fonts';
import date from '../constants/date'; 
import country from '../constants/country';



export default class ParentForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let msg = this.props.msg ? <Text style={styles.msg}>{this.props.msg}</Text>: false;
    return (
      <ScrollView  contentContainerStyle={{alignItems: 'center'}} style={styles.continer}>
          <ImageBackground source={require('../images/bg.jpg')} style={styles.imageBg}></ImageBackground>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Parent 1</Text>
            <TextInput style={styles.input} placeholder="First name" placeholderTextColor="#89c194" name="firstName" value={this.props.firstName} onChangeText={(text) => this.props.inputChange('firstName', text)}/>
            <TextInput style={styles.input} placeholder="Last name" placeholderTextColor="#89c194" name="lastName" value={this.props.lastName} onChangeText={(text) => this.props.inputChange('lastName', text)}/>
            <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }}
            containerStyle={[styles.select, {width: '100%'}]} label='Gender' data={[{value: 'male'}, {value: 'female'}]}
            value={this.props.gender} onChangeText={this.props.setGender}/>
            <Text style={styles.bithText}>Bith day</Text>
            <View style={styles.bithDatewrapper}>
                <Dropdown baseColor="#89c194"  dropdownOffset={{ top: 0, left: 0 }}  value={this.props.month} onChangeText={this.props.setMonth}
                containerStyle={[styles.select, {width: '30%'}]} label='Month' data={date.months}/>
                <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }} value={this.props.day} onChangeText={this.props.setDay}
                containerStyle={[styles.select, {width: '30%'}]} label='Day'  data={date.days.days(this.props.month, this.props.year)}/>
                <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }} value={this.props.year} onChangeText={this.props.setYear}
                containerStyle={[styles.select, {width: '30%'}]} label='Yaar'  data={date.years.years()}/>
            </View>
            <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }} value={this.props.country} onChangeText={this.props.setCountry}
            containerStyle={[styles.select, {width: '100%'}]} label='Country' data={country.country}/>
            <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }} value={this.props.region} onChangeText={this.props.setRegion}
            containerStyle={[styles.select, {width: '100%'}]} label='Region' data={country.region}/>
            <Text style={styles.bithText}>Chose a calendar</Text>
            <Dropdown baseColor="#89c194" dropdownOffset={{ top: 0, left: 0 }} value={this.props.calendar} onChangeText={this.props.setCalendar}
            containerStyle={[styles.select, {width: '100%'}]} label='Catholic' data={date.calendars}/>
            {msg}
            <View style={styles.input} style={styles.btnGroup}>
                <TouchableOpacity style={styles.btnNext} onPress={this.props.parentValidation}>
                    <Text style={{color: '#fff'}}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnplus} onPress={this.props.change}>
                    <Text style={{color: '#fff'}}>+</Text>
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
    paddingBottom: 50
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
    fontSize: screen.width/25,
    marginBottom: 10,
  },

  btnGroup : {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },

  btnNext : {
    backgroundColor: '#3e7b70',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: screen.width/25,
    width: '70%'
  },

  btnplus : {
    backgroundColor: '#3e7b70',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: screen.width/25,
    width: '25%'
  },

  title : {
      color: '#fff',
      margin: '6%',
      fontSize: screen.width/12
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
  }

});