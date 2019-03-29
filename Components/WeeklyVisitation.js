import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, TextInput, ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ChildRadioBtn from './ChildRadioBtn';
import NextBtn from './Elements/NextBtn';
import Styles from '../constants/Styles';

export default class WeeklyVisitation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedChildValue: 0,
      selectedDays: {
        selectedMunRadioBtn: { week_day: 1, parent_id: 0, alternate: 0, sleepover: 0, pickup: "", return: "" },
        selectedTueRadioBtn: { week_day: 2, parent_id: 0, alternate: 0, sleepover: 0, pickup: "", return: "" },
        selectedWedRadioBtn: { week_day: 3, parent_id: 0, alternate: 0, sleepover: 0, pickup: "", return: "" },
        selectedThuRadioBtn: { week_day: 4, parent_id: 0, alternate: 0, sleepover: 0, pickup: "", return: "" },
        selectedSutRadioBtn: { week_day: 5, parent_id: 0, alternate: 0, sleepover: 0, pickup: "", return: "" },
        selectedSutRadioBtn: { week_day: 6, parent_id: 0, alternate: 0, sleepover: 0, pickup: "", return: "" },
        selectedSunRadioBtn: { week_day: 7, parent_id: 0, alternate: 0, sleepover: 0, pickup: "", return: "" }
      },

      childDays: [
        { day: 'mon', valName: 'selectedMunRadioBtn', show: false, },
        { day: 'tue', valName: 'selectedTueRadioBtn', show: false, },
        { day: 'wed', valName: 'selectedWedRadioBtn', show: false, },
        { day: 'thu', valName: 'selectedThuRadioBtn', show: false, },
        { day: 'fri', valName: 'selectedSutRadioBtn', show: false, },
        { day: 'sat', valName: 'selectedSutRadioBtn', show: false, },
        { day: 'sun', valName: 'selectedSunRadioBtn', show: false, }
      ],
      radio_props: this.props.countValChilds,
      childinfo: []
    }
  }

  resetSelectedDays = () => {
    const selectedDays = {
      selectedMunRadioBtn: { day: 1, parent: 0, alternate: null, sleepOver: null, pickup: "", return: "" },
      selectedTueRadioBtn: { day: 2, parent: 0, alternate: null, sleepOver: null, pickup: "", return: "" },
      selectedWedRadioBtn: { day: 3, parent: 0, alternate: null, sleepOver: null, pickup: "", return: "" },
      selectedThuRadioBtn: { day: 4, parent: 0, alternate: null, sleepOver: null, pickup: "", return: "" },
      selectedSutRadioBtn: { day: 5, parent: 0, alternate: null, sleepOver: null, pickup: "", return: "" },
      selectedSutRadioBtn: { day: 6, parent: 0, alternate: null, sleepOver: null, pickup: "", return: "" },
      selectedSunRadioBtn: { day: 7, parent: 0, alternate: null, sleepOver: null, pickup: "", return: "" }
    }

    this.setState({ selectedDays: selectedDays })
  }

  inputChange = (valueName, target, value) => {
    let arr = Object.assign({}, this.state.selectedDays);
    arr[valueName][target] = value
    this.setState({
      selectedDays: arr
    })
  }

  slideTo = (type) => {
    let arr = Object.assign([], this.state.radio_props)
    let first = ""
    if (type == 'right') {
      first = arr.shift()
      arr.push(first)
      this.setState({ radio_props: arr })
    } else if (type == 'left') {
      let last = arr.pop();
      arr.unshift(last)
      this.setState({ radio_props: arr })
    }
  }

  childsLength = () => {
    return Object.assign([], this.state.radio_props.slice(0, 3));
  }

  showModal = (index) => {
    let arr = Object.assign([], this.state.childDays)
    arr[index].show = !arr[index].show;
    this.setState({ childDays: arr })
  }

  childrenInfo = () => {
    let arr = Object.assign([], this.state.childinfo)
    let index;
    arr.forEach((data, i) => {
      if (data.child_id == this.state.selectedChildValue) {
        index = i
      }
    })
    let newArray = Object.keys(this.state.selectedDays).map((key) => {
      console.log('key', key)
      return this.state.selectedDays[key]
    })

    if (index != undefined) {
      arr[index] = { main_parent_id: '1', week_holiday: '1', child_id: this.state.selectedChildValue, days: newArray }
    } else {
      arr.push({ main_parent_id: '1', week_holiday: '1', child_id: this.state.selectedChildValue, days: newArray })
    }
    this.setState({ childinfo: arr })
  }

  SelectRadioBtn = (valueName, value) => {
    console.log('value child', value)
    this.resetSelectedDays()
    this.childrenInfo()
    this.setState({
      [valueName]: value[valueName]
    })
  }

  SelectRadioBtn2 = (valueName, underValueName, value) => {
    console.log('value', value)
    let arr = Object.assign({}, this.state.selectedDays);
    arr[valueName][underValueName] = value[underValueName]
    this.setState({
      selectedDays: arr
    })
  }

  render() {
    console.log('state', this.state.selectedDays)
    let parentCount = "";
    for (let i = 1; i <= this.props.parentCount; i++) {
      parentCount += `p${i}/ `;
    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
        <ImageBackground source={require('../images/bg.jpg')} style={[styles.imageBg, { height: '100%', position: 'absolute' }]}></ImageBackground>
        <Text style={[styles.title, { marginTop: 50 }]}>Weekly visitation Arrangements</Text>
        <View style={[Styles.FlexRow, { width: '100%', padding: 15 }]}>
          <TouchableOpacity style={{ marginTop: -10 }} onPress={() => this.slideTo('left')}>
            <Image source={require('../images/arrowleft.png')} style={{ width: 12, height: 18 }} />
          </TouchableOpacity>
          <ChildRadioBtn
            valueName={'selectedChildValue'}
            radio_props={this.childsLength()}
            value={this.state.selectedChildValue}
            SelectRadioBtn={(valueName, value) => this.SelectRadioBtn(valueName, value)} />
          <TouchableOpacity style={{ marginTop: -10 }} onPress={() => this.slideTo('right')}  >
            <Image source={require('../images/arrowright.png')} style={{ width: 12, height: 18 }}
              shadowColor="#000000" shadowOffset={{ width: 5, height: 5 }} shadowOpacity="0.5" shadowRadius="5" />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <View style={{ width: '100%', flexDriection: 'row', justifyContent: 'flex-start' }}>
            <View style={[styles.row, { width: '100%' }]}>
              <Text style={styles.title}>Day</Text>
              <Text style={styles.title}>{parentCount}</Text>
              <View style={{ width: 30, marginTop: -10 }}>

              </View>
            </View>
          </View>
          {
            this.state.childDays.map((item, index) => (
              <View style={{ width: '100%' }} key={index}>
                <View style={styles.row}>
                  <View style={{ width: 40 }}>
                    <Text style={styles.title}>{item.day}</Text>
                  </View>
                  <ChildRadioBtn
                    underValueName={'parent_id'}
                    valueName={item.valName}
                    radio_props={this.props.countValParents}
                    value={this.state.selectedDays[item.valName]['parent_id']}
                    SelectRadioBtn={(valueName, underValueName, value) => this.SelectRadioBtn2(valueName, underValueName, value)} />
                  <TouchableOpacity style={{ width: 45, marginTop: -10 }} onPress={() => this.showModal(index)}>
                    <Image source={require('../images/Childtimearrowright.png')} style={{ width: '100%', height: 30 }} />
                  </TouchableOpacity>
                </View>
                {item.show &&
                  <View style={styles.modal}>
                    <TouchableOpacity style={{ width: 45 }} onPress={() => this.showModal(index)}>
                      <Image source={require('../images/ChildtimearrowLeft.png')} style={{ width: '100%', height: 30 }} />
                    </TouchableOpacity>
                    <View style={Styles.FlexColumn}>
                      <Text style={styles.text}>alternate</Text>
                      <ChildRadioBtn
                        underValueName={'alternate'}
                        valueName={item.valName}
                        radio_props={[{ value: 0 }]}
                        value={this.state.selectedDays.alternate}
                        SelectRadioBtn={(valueName, underValueName, value) => this.SelectRadioBtn2(valueName, underValueName, value)} />
                    </View>
                    <View style={{ width: '20%' }}>
                      <Text style={styles.text}>Pickup</Text>
                      <TextInput style={{ backgroundColor: 'white', padding: 10, width: '100%' }} placeholder="00:00 pm"
                        onChangeText={(value) => this.inputChange(item.valName, 'pickup', value)}>
                      </TextInput>
                    </View>
                    <View style={{ width: '20%' }}>
                      <Text style={styles.text}>Return</Text>
                      <TextInput style={{ backgroundColor: 'white', padding: 10, width: '100%' }} placeholder="00:00 am"
                        onChangeText={(value) => this.inputChange(item.valName, 'return', value)}>
                      </TextInput>
                    </View>
                    <View style={Styles.FlexColumn}>
                      <Text style={styles.text}>sleep over</Text>
                      <ChildRadioBtn
                        underValueName={'sleepover'}
                        valueName={item.valName}
                        radio_props={[{ value: 0 }]}
                        value={this.state.selectedDays.sleepOver}
                        SelectRadioBtn={(valueName, underValueName, value) => this.SelectRadioBtn2(valueName, underValueName, value)} />
                    </View>
                  </View>
                }
              </View>
            ))
          }
          <NextBtn change1={() => this.props.weekFetch(this.state.childinfo)} />
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
    marginBottom: 25,
  },

  text: {
    color: '#89c194'
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