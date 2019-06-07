import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventPage from '../Components/EventPage';
import { Toast, Text } from 'native-base';

import * as action from '../store/actions/users';


class Event extends Component {
    constructor(props) {
        super(props)
        const user = this.props.user.data.activeUser
        this.state = {
            avatarSource: user.avatar,
            locationFlag: false,
            eventFlag: false,
            alarmFlag: false,
            switchValue: false,
            fromisDatePickerVisible: false,
            fromisTimePickerVisible: false,
            toisDatePickerVisible: false,
            toisTimePickerVisible: false,
            fromDate: new Date().toString().substring(4, 15),
            fromTime: '00:00',
            toDate: new Date().toString().substring(4, 15),
            toTime: '00:00',
            choosenChildId: []
        }
    }


    inputChange = (target, value) => {
        this.setState({ [target]: value, msg: "" })
    }

    changeFlag = (name) => {
        this.setState({ [name]: true })
    }

    onSwitch = (value) => {
        this.setState({ switchValue: !value })
    }

    ToggleDateTimePicker = (key) => {
        this.setState({ [key]: !this.state.key });
    }

    handleDatePicked = (date) => {
        console.log("A date has been picked: ", date.toString().substring(4, 15));
        this.setState({ fromisDatePickerVisible: false, toisDatePickerVisible: false, fromDate: date.toString().substring(4, 15) });
    };

    handleTimePicked = (date) => {
        console.log("A time has been picked: ", date.toString().substring(15, 21));
        this.setState({ fromisTimePickerVisible: false, toisTimePickerVisible: false, fromTime: date.toString().substring(15, 21) });
    };

    toHandleDatePicked = (date) => {
        console.log("A date has been picked: ", date.toString().substring(4, 15));
        this.setState({ fromisDatePickerVisible: false, toisDatePickerVisible: false, toDate: date.toString().substring(4, 15) });
    };

    toHandleTimePicked = (date) => {
        console.log("A time has been picked: ", date.toString().substring(15, 21));
        this.setState({ fromisTimePickerVisible: false, toisTimePickerVisible: false, toTime: date.toString().substring(15, 21) });
    };

    chooseChild = (childID) => {
        const arr = Object.assign([], this.state.choosenChildId)
        const item = arr.filter(item => item == childID)[0];
        if (item) {
            arr.splice(arr.indexOf(childID), 1)
        } else {
            arr.push(childID)
        }
        this.setState({ choosenChildId: arr })
    }

    goToEventSecondPage = () => {
        this.props.navigation.navigate('EventSecondPage')
    }

    onAddEvent = () => {
        console.log('sssssssss')
    }

    render() {
        console.log('user d', this.props.user.data.activeUser.avatar)
        return (
            <EventPage
                avatarSource={this.state.avatarSource}
                childs={this.props.user.data.family.childs}
                changeFlag={this.changeFlag}
                ToggleDateTimePicker={this.ToggleDateTimePicker}
                handleDatePicked={this.handleDatePicked}
                handleTimePicked={this.handleTimePicked}
                toHandleDatePicked={this.toHandleDatePicked}
                toHandleTimePicked={this.toHandleTimePicked}
                locationFlag={this.state.locationFlag}
                inputChange={this.inputChange}
                eventFlag={this.state.eventFlag}
                alarmFlag={this.state.alarmFlag}
                loacation={this.state.loacation}
                alarm={this.state.alarm}
                event={this.state.event}
                switchValue={this.state.switchValue}
                onSwitch={this.onSwitch}
                fromisDatePickerVisible={this.state.fromisDatePickerVisible}
                fromisTimePickerVisible={this.state.fromisTimePickerVisible}
                toisDatePickerVisible={this.state.toisDatePickerVisible}
                toisTimePickerVisible={this.state.toisTimePickerVisible}
                fromTime={this.state.fromTime}
                fromDate={this.state.fromDate}
                toDate={this.state.toDate}
                toTime={this.state.toTime}
                choosenChildId={this.state.choosenChildId}
                chooseChild={this.chooseChild}
                goToEventSecondPage={this.goToEventSecondPage}
                onAddEvent={this.onAddEvent}
            />
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


export default connect(mapStateToProps, mapDispatchToProps)(Event)