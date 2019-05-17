import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReminderPage from '../Components/ReminderPage';
import { Toast, Text } from 'native-base';

import * as action from '../store/actions/users';


class Reminder extends Component {
    constructor(props) {
        super(props)
        const user = this.props.user.data.activeUser
        this.state = {
            date: new Date().toString().substring(4, 15),
            time: '00:00',
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            switchValue: false
        }
    }

    ToggleDateTimePicker = (key) => {
        console.log('ssssssssssssssss')
        this.setState({ [key]: !this.state.key });
    }

    onSwitch = (value) => {
        this.setState({ switchValue: !value })
    }

    handleDatePicked = (date) => {
        console.log("A date has been picked: ", date.toString().substring(4, 15));
        this.setState({ isDatePickerVisible: false, isTimePickerVisible: false, date: date.toString().substring(4, 15) });
    };

    handleTimePicked = (date) => {
        console.log("A time has been picked: ", date.toString().substring(15, 21));
        this.setState({ isDatePickerVisible: false, isTimePickerVisible: false, time: date.toString().substring(15, 21) });
    };

    // addReminder = () => {
    //     const data = {
    //         title: "",
    //         active: true,
    //         date: "",
    //         time: "",
    //     }
    // }

    render() {
        return (
            <ReminderPage
                date={this.state.date}
                time={this.state.time}
                ToggleDateTimePicker={this.ToggleDateTimePicker}
                onSwitch={this.onSwitch}
                isDatePickerVisible={this.state.isDatePickerVisible}
                isTimePickerVisible={this.state.isTimePickerVisible}
                handleTimePicked={this.handleTimePicked}
                handleDatePicked={this.handleDatePicked}
                switchValue={this.state.switchValue}/>
        )
    }
}



mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        changeChlidData: (data, token) => {
            action.changeChlidData(dispatch, data, token)
        },
        uploadimage: (data) => {
            action.uploadChildimage(dispatch, data)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Reminder)