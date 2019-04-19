import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Platform, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Signin from './Signin';
import ParentForm from '../Components/ParentForm';
import ChildForm from '../Components/ChildForm';
import WeeklyVisitation from './WeeklyVisitation';
import Home from './Home';
import date from '../constants/date';
import country from '../constants/country';
import axios from 'axios';

import * as action from '../store/actions/users';

class InitialForms extends Component {
  state = {
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
    religion: "",
    calendar: ""
  }

  isEmailAddress = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  userLogin = () => {
    if (this.state.email.length < 1 || this.state.password.length < 1) {
      this.setState({ msg: "all filds shuld be filed" })
    } else {
      if (this.isEmailAddress(this.state.email)) {
        if (this.state.password.length < 6) {
          this.setState({ msg: "password shuld be 6 sign" })
        } else {
          this.fetch()
        }
      } else {
        this.setState({ msg: "not correct email" })
      }
    }
  }

  fetch = () => {
    this.props.login({ email: this.state.email, password: this.state.password })
  }

  parentFetch = () => {
    const { firstName, lastName, gender, day, year, month, country, religion, calendar } = this.state
    let data = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      date: `${day}-${year}-${month}`,
      country: country,
      religion: religion,
      calendar: calendar,
      google_id: this.props.user.data.google_id,
      email: this.props.user.data.email,
      token: this.props.user.data.google_token
    }
    if (this.props.user.data.parent_id) {
      data.parent_id = this.props.user.data.parent_id
    }
    if(this.props.user.parentCount == 1) {
      data.family_id = null
      this.props.parent(data, null)
    } else {
      data.family_id = this.props.user.data.family_id
      this.props.parent(data, this.props.user.data.token)
    }
  }

  addParentFetch = () => {
    const { firstName, lastName, gender, day, year, month, country, religion, email } = this.state

    let data = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      date: `${day}-${year}-${month}`,
      country: country,
      religion: religion,
      email: email,
      parentCount: this.props.user.parentCount,
      google_id: this.props.user.google_id,
      parent_id: this.props.user.data.parent_id
    }

    if (this.props.user.parentCount == 1) {
      data.email = this.props.user.data.email
    }else {
      data.family_id = this.props.user.data.family_id
    }
    if (this.state.lastName.length < 1 &&
      this.state.firstName.length < 1
      && this.state.gender.length < 1
      && this.state.day.length < 1
      && this.state.month.length < 1
      && this.state.year.length < 1
      && this.state.country.length < 1
      && this.state.religion.length < 1
      && this.state.email.length < 1) {
      this.setState({ msg: "all filds shuld be filed" })
    } else {
      (this.props.user.parentCount == 1) ?
        this.props.addParent(data, null) :
        this.props.addParent(data, this.props.user.data.token)
    }

  }

  reset = () => {
    this.setState({
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
      religion: "",
      calendar: ""
    })
  }

  childFetch = () => {
    const { firstName, lastName, gender, day, year, month } = this.state
    if (this.state.lastName.length < 1 &&
      this.state.firstName.length < 1
      && this.state.gender.length < 1
      && this.state.day.length < 1
      && this.state.month.length < 1
      && this.state.year.length < 1) {
      this.setState({ msg: "all filds shuld be filed" })
    } else {
      this.props.child({
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        date: `${day}-${year}-${month}`,
        family_id: this.props.user.data.family_id,
      }, this.props.user.data.token)
    }
  }

  addChildFetch = () => {
    const { firstName, lastName, gender, day, year, month } = this.state
    if (this.state.lastName.length < 1 &&
      this.state.firstName.length < 1
      && this.state.gender.length < 1
      && this.state.day.length < 1
      && this.state.month.length < 1
      && this.state.year.length < 1) {
      this.setState({ msg: "all filds shuld be filed" })
    } else {
      this.props.addChild({
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        date: `${day}-${year}-${month}`,
        family_id: this.props.user.data.family_id,
      }, this.props.user.data.token)
    }
  }

  googleFetch = (data) => {
    const { accessToken, user: { id, email } } = data
    this.props.register({ accessToken: accessToken, id: id, email: email })
  }

  parentValidation = (func) => {
    if (this.state.lastName.length < 1 &&
      this.state.firstName.length < 1
      && this.state.gender.length < 1
      && this.state.day.length < 1
      && this.state.month.length < 1
      && this.state.year.length < 1
      && this.state.country.length < 1
      && this.state.religion.length < 1
      && this.state.calendar.length < 1) {
      this.setState({ msg: "all filds shuld be filed" })
    } else {
      this.parentFetch()
    }
  }

  weekFetch = (data) => {
    this.props.week(data, this.props.user.data.token)
  }

  setData = (value, property) => {
    this.setState({ [property]: value })
  }

  setMonth = (value, index, data) => {
    const selectedMonthObj = data.filter((obj) => value == obj.value);
    this.setState({ month: selectedMonthObj[0].name })
  }

  inputChange = (target, value) => {
    this.setState({ [target]: value, msg: "" })
  }



  render() {
    const msg = this.state.msg || this.props.user.error
    let countValChilds = [];
    for (let i = 1; i <= this.props.user.childsID.length; i++) {
      countValChilds.push({ label: `Child ${i}`, value: this.props.user.childsID[i - 1] })
    }

    let countValParents = [];
    for (let i = 1; i <= this.props.user.parentsID.length; i++) {
      countValParents.push({ value: this.props.user.parentsID[i - 1] })
    }

    if (this.props.user.isloading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    } else if (this.props.user.login) {
      return (
        <Signin
          fetch={this.fetch}
          googleFetch={(data) => this.googleFetch(data)}
          password={this.state.password}
          msg={msg}
          email={this.state.email}
          userLogin={this.userLogin}
          inputChange={(target, value) => this.inputChange(target, value)} />
      );
    } else if (this.props.user.main) {
      return (
        <Home />
      );
    }
    else if (this.props.user.parent) {
      return (
        <ParentForm
          reset={this.reset}
          parentCount={this.props.user.parentCount}
          parent_1={this.props.user.parent1}
          msg={msg}
          lastName={this.state.lastName}
          firstName={this.state.firstName}
          gender={this.state.gender}
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
          country={this.state.country}
          religion={this.state.religion}
          calendar={this.state.calendar}
          parentValidation={this.parentValidation}
          inputChange={(target, value) => this.inputChange(target, value)}
          setData={this.setData}
          setMonth={this.setMonth}
          parentFetch={this.parentFetch}
          addParentFetch={this.addParentFetch}
        />
      );
    }
    else if (this.props.user.week) {
      return (
        <WeeklyVisitation
          countValChilds={countValChilds}
          parentCount={this.props.user.parentCount}
          countValParents={countValParents}
          weekFetch={(data) => this.weekFetch(data)}
          childsID={this.props.user.childsID}
          parentsID={this.props.user.parentsID} />
      );
    } else if (this.props.child) {
      return (
        <ChildForm childFetch={this.childFetch}
          addChildFetch={this.addChildFetch}
          reset={this.reset}
          msg={msg}
          lastName={this.state.lastName}
          firstName={this.state.firstName}
          gender={this.state.gender}
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
          inputChange={(target, value) => this.inputChange(target, value)}
          setMonth={this.setMonth}
          setData={this.setData}
          msg={msg}
          childCount={this.props.childCount} />
      );
    }

  }
}

mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
      action.loginRequest(dispatch, data)
    },
    parent: (data, token) => {
      action.parentRequest(dispatch, data, token)
    },
    addParent: (data, token) => {
      action.addParentRequest(dispatch, data, token)
    },
    register: (data) => {
      action.registerRequest(dispatch, data)
    },
    child: (data, token) => {
      action.childRequest(dispatch, data, token)
    },
    addChild: (data, token) => {
      action.addChildRequest(dispatch, data, token)
    },
    week: (data, token) => {
      action.weekRequest(dispatch, data, token)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 30
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(InitialForms)


