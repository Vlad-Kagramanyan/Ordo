import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Signin from '../Components/Signin';
import ParentForm from '../Components/ParentForm';
import ChildForm from '../Components/ChildForm';
import WeeklyVisitation from '../Components/WeeklyVisitation';
import FreePaid from '../Components/FreePaid';
import date from '../constants/date';
import country from '../constants/country';
import axios from 'axios';

export default class InitialForms extends Component {
  state = {
    signin: false,
    parentForm: false,
    childForm: false,
    WeeklyVisitation: true,
    FreePaid: false,
    email: "",
    msg: "",
    password: "",
    lastName: "",
    firstName: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    country: "",
    region: "",
    calendar: ""
  }

  isEmailAddress = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  userLogin = () => {
    if(this.state.email.length < 1 || this.state.password.length < 1 ) {
        this.setState({msg: "all filds shuld be filed"})
      }else {
        if(this.isEmailAddress(this.state.email)) {
            if(this.state.password.length < 6) {
              this.setState({msg: "password shuld be 6 sign"})
            }
          }else {
            this.setState({msg: "not correct email"})
          }
      }
  }

  fetch = () => {
    axios.post('http://myworks.site/dev/calendar_based_api/public/api/child',
    { first_name : 'Jhon',
      last_name : 'Due',
      gender: 'male',
      birth_date: null
    })
    .then((response)=>{
      console.log('ssssss', response)
    }).catch((err)=> {
      console.log('dddddd',err)
    })
  }

  parentValidation = () => {
    console.log('vakud')
    if(this.state.lastName.length < 1 && 
      this.state.firstName.length < 1 
      && this.state.gender.length < 1
      && this.state.day.length < 1 
      && this.state.month.length < 1 
      && this.state.year.length < 1 
      && this.state.country.length < 1
      && this.state.region.length < 1
      && this.state.calendar.length < 1) {
        console.log('all filds shuld be filed')
        this.setState({msg: "all filds shuld be filed"})
      }else {
        console.log('all right')
      }
  }

  setGender = (value, index, data) => {
    this.setState({gender: value})
  }

  setMonth = (value, index, data) => {
    const selectedMonthObj = data.filter((obj) => value == obj.value);
    this.setState({month: selectedMonthObj[0].name})
  }

  setYear = (value, index, data) => {
    this.setState({year: value})
  }

  setDay = (value, index, data) => {
    this.setState({day: value})
  }

  setCountry = (value, index, data) => {
    this.setState({country: value})
  }

  setRegion = (value, index, data) => {
    this.setState({region: value})
  }

  setCalendar = (value, index, data) => {
    this.setState({calendar: value})
  }


  
  ChangeToParent = () => {
    this.setState({
      signin: false,
      parentForm: true,
      childForm: false
    })
  }
  
  ChangeToChild = () => {
    this.setState({
      signin: false,
      parentForm: false,
      childForm: true
    })
  }

  ChangeToWeek = () => {
    this.setState({
      signin: false,
      parentForm: false,
      childForm: false,
      WeeklyVisitation: true
    })
  }

  ChangeToFreePaid = () => {
    this.setState({
      signin: false,
      parentForm: false,
      childForm: false,
      WeeklyVisitation: false,
      FreePaid: true
    })
  }

  inputChange = (target, value) => {
    this.setState({[target]: value, msg: ""})
  }
  
  render() {
    if(this.state.signin) {
      return (
        <Signin change1={this.ChangeToParent}
          password={this.state.password}
          msg={this.state.msg}
          email={this.state.email}
          userLogin={this.userLogin}
          inputChange={(target, value) => this.inputChange(target, value)}/>
        );
      }else if(this.state.parentForm) {
      return (
          <ParentForm change={this.ChangeToChild}
          msg={this.state.msg}
          lastName={this.state.lastName}
          firstName={this.state.firstName}
          gender={this.state.gender}
          day ={this.state.day}
          month = {this.state.month}
          year ={this.state.year}
          country = {this.state.country}
          region ={this.state.region}
          calendar = {this.state.calendar}
          parentValidation={this.parentValidation}
          inputChange={(target, value) => this.inputChange(target, value)}
          setGender={this.setGender}
          setMonth={this.setMonth}
          setYear={this.setYear}
          setDay={this.setDay}
          setCountry={this.setCountry}
          setRegion={this.setRegion}
          setCalendar={this.setCalendar}
          />
        );
    }else if(this.state.childForm) {
      return (
          <ChildForm change1={this.fetch}/>
        );
    }else if(this.state.WeeklyVisitation) {
      return (
          <WeeklyVisitation change1={this.ChangeToFreePaid}/>
        );
    }else if(this.state.FreePaid) {
      return (
          <FreePaid />
        );
    }
  }
}


