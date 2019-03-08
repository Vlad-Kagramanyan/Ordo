import React, {Component} from 'react';
import {TouchableOpacity, ScrollView, TextInput,  ImageBackground, Image, StyleSheet, Text, View} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ChildRadioBtn from './ChildRadioBtn';
import NextBtn from './Elements/NextBtn';
import Styles from '../constants/Styles';

export default class WeeklyVisitation extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: 0,
        alternate: 0,
        sleepOver: 0,
        data: ['child 1', 'child 2', 'child 3'],
        munRadioBtn: 0,
        tueRadioBtn: 0,
        wedRadioBtn: 0,
        thuRadioBtn: 0,
        sutRadioBtn: 0,
        sunRadioBtn: 0,
        childDays : [
          {day: 'mun', valName: 'munRadioBtn', show: false},
          {day: 'tue', valName: 'tueRadioBtn', show: false},
          {day: 'wed', valName: 'wedRadioBtn', show: false},
          {day: 'thu', valName: 'thuRadioBtn', show: false},
          {day: 'sut', valName: 'sutRadioBtn', show: false},
          {day: 'sun', valName: 'sunRadioBtn', show: false}
        ],
        radio_props : [
          {label: 'Child 1', value: 0 },
          {label: 'Child 2', value: 1 },
          {label: 'Child 3', value: 2 }
        ]
      }
    }

    slideTo = (type) => {
      
    }

    showModal = (index) => {
      let arr = Object.assign([], this.state.childDays)
      arr[index].show = !arr[index].show;
      this.setState({childDays: arr})
    }

    SelectRadioBtn = (valueName, value)=>{
      this.setState({[valueName]: value})
    }

    render() {
      
        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
                <ImageBackground source={require('../images/bg.jpg')} style={[styles.imageBg, {height: '100%', position: 'absolute'}]}></ImageBackground>
                  <Text style={[styles.title, {marginTop: 50}]}>Weekly visitation Arrangements</Text>
                  <View style={[Styles.FlexRow, {width: '100%', padding: 15}]}>
                    <TouchableOpacity style={{ marginTop: -10}} onPress={this.slideTo('left')}>
                        <Image source={require('../images/arrowleft.png')} style={{width: 12, height: 18}}/>
                    </TouchableOpacity>
                    <ChildRadioBtn 
                      valueName={'value'}
                      radio_props={this.state.radio_props}
                      value={this.state.value}
                      SelectRadioBtn={(valueName, value)=>this.SelectRadioBtn(valueName, value)}/>
                    <TouchableOpacity style={{ marginTop: -10}} onPress={this.slideTo('right')}>
                        <Image source={require('../images/arrowright.png')} style={{width: 12, height: 18}}/>
                    </TouchableOpacity>
                  </View>
                <View style={styles.wrapper}>
                    <View style={{width: '100%', flexDriection: 'row', justifyContent: 'flex-start'}}>
                      <View style={[styles.row, {width: '60%'}]}>
                        <Text style={styles.title}>Day</Text>
                        <Text style={styles.title}>p1/p2</Text>
                      </View>
                    </View>
                    {
                      this.state.childDays.map((item, index) => (
                      <View style={{width: '100%'}} key={index}>
                        <View style={styles.row}>
                          <View style={{width: 40}}>
                            <Text style={styles.title}>{item.day}</Text>
                          </View>
                          <ChildRadioBtn 
                            valueName={item.valName}
                            radio_props={[{value: 0}, {value: 1}]}
                            value={this.state[item.valName]}
                            SelectRadioBtn={(valueName, value)=>this.SelectRadioBtn(valueName, value)}/>
                            <TouchableOpacity style={{width: 45, marginTop: -10}} onPress={() => this.showModal(index)}>
                              <Image source={require('../images/Childtimearrowright.png')} style={{width: '100%', height: 30}}/>
                            </TouchableOpacity>
                          </View>
                          {item.show && 
                            <View style={styles.modal}>
                              <TouchableOpacity style={{width: 45}} onPress={() => this.showModal(index)}>
                              <Image source={require('../images/ChildtimearrowLeft.png')} style={{width: '100%', height: 30}}/>
                            </TouchableOpacity>
                            <View style={Styles.FlexColumn}>
                              <Text style={Styles.ColorWhite}>alternate</Text>
                              <ChildRadioBtn 
                                valueName={'alternate'}
                                radio_props={[{value: 0}]}
                                value={this.state.alternate}
                                SelectRadioBtn={(valueName, value)=>this.SelectRadioBtn(valueName, value)}/>
                            </View>
                            <View style={{ width: '20%'}}>
                              <Text style={Styles.ColorWhite}>Pickup</Text>
                              <TextInput style={{backgroundColor: 'white', padding: 10, width: '100%'}} placeholder="00:00 pm">
                              </TextInput>
                            </View>
                            <View style={{ width: '20%'}}>
                              <Text style={Styles.ColorWhite}>Return</Text>
                              <TextInput style={{backgroundColor: 'white', padding: 10, width: '100%'}} placeholder="00:00 am">
                              </TextInput>
                            </View>
                            <View style={Styles.FlexColumn}>
                              <Text style={Styles.ColorWhite}>sleep over</Text>
                              <ChildRadioBtn 
                                valueName={'sleepOver'}
                                radio_props={[{value: 0}]}
                                value={this.state.sleepOver}
                                SelectRadioBtn={(valueName, value)=>this.SelectRadioBtn(valueName, value)}/>
                            </View>
                          </View>
                          }
                      </View>
                      ))
                    }
                    <NextBtn change1={this.props.change1}/>
                </View>
            </ScrollView>
        )
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

    title: {
      color: '#89c194',
      fontSize: 20,
      marginBottom: 25
    },

    imageBg: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },

    radioBtn: {
      width: 25,
      height: 25,
      backgroundColor: 'white',
      borderRadius: 50
    },

    readioWrap: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    row: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 40
    },

    modal: {
      marginTop: -50,
      marginLeft: '-20%',
      backgroundColor: 'rgba(0,0,0, .5)',
      width: '140%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15
    }
  
  });