import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingsPage from '../Components/SettingsPage';

import * as action from '../store/actions/users';

class Settings extends Component {
    constructor(props) {
        super(props)
        const user = this.props.user.data.activeUser[0]
        this.state = {
            email: user.email,
            msg: "",
            password: "",
            newPassword: "",
            confirmPassword: user.password,
            lastName: user.last_name,
            firstName: user.first_name,
            googleMerge: false,
            emailFlag: false,
            lastNameFlag: false,
            firstNameFlag: false,
            passwordFlag: false,
            childDays: [
                { day: 'mo', valName: 'selectedMunRadioBtn', },
                { day: 'tu', valName: 'selectedTueRadioBtn', },
                { day: 'we', valName: 'selectedWedRadioBtn', },
                { day: 'th', valName: 'selectedThuRadioBtn', },
                { day: 'fr', valName: 'selectedSutRadioBtn', },
                { day: 'sa', valName: 'selectedSutRadioBtn', },
                { day: 'su', valName: 'selectedSunRadioBtn', }
            ],
        }
    }

    reset = () => {
        console.log('reset')
        const user = this.props.user.data.activeUser[0]
        this.setState({
            email: user.email,
            msg: "",
            password: user.password,
            confirmPassword: user.password,
            lastName: user.last_name,
            firstName: user.first_name,
            googleMerge: false,
            emailFlag: false,
            lastNameFlag: false,
            firstNameFlag: false,
            passwordFlag: false,
        })
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value, msg: ""})
    }

    handleCheckbox = () => {
        this.setState({ googleMerge: !this.state.googleMerge})
    }

    changeUserData = () => {
        let {email, lastName, firstName, password, newPassword, googleMerge} = this.state
        googleMerge = googleMerge ? 1 : 0
        var data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            start_week_day: '1',
            merge_with_google: googleMerge,
        }

        if (password > 0) {
            data = {
                password: password,
                newPassword: newPassword
            }
        }
        this.props.changeUserData(data)
    }

    changeFlag = (name) => {
        this.setState({ [name]: true })
    }

    render() {
        return (
            <SettingsPage
                childDays={this.state.childDays}
                googleMerge={this.state.googleMerge}
                handleCheckbox={this.handleCheckbox}
                inputChange={this.inputChange}
                changeUserData={this.changeUserData}
                user={this.props.user.data.activeUser[0]}
                emailFlag={this.state.emailFlag}
                lastNameFlag={this.state.lastNameFlag}
                firstNameFlag={this.state.firstNameFlag}
                passwordFlag={this.state.passwordFlag}
                changeFlag={this.changeFlag}
            />
        )
    }
}

mapStateToProps = (state) => {
    return {
        user: state
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        changeUserData: (data) => {
            action.changeUserData(dispatch, data)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings)