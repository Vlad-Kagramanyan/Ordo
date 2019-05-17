import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarPage from '../Components/CalendarPage';
import { Toast, Text } from 'native-base';

import * as action from '../store/actions/users';


class Calendar extends Component {
    constructor(props) {
        super(props)
        const user = this.props.user.userDetails
        this.state = {
            avatarSource: this.props.user.userDetails.avatar,
            search : '',
            searchFlag : false,
            currentDate: new Date().toString().substring(0, 15),
        }
    }

    goToEvent = () => {
        this.props.navigation.navigate('Event')
    }

    goToReminder = () => {
        this.props.navigation.navigate('Reminder')
    }

    toggleSearch = () => {
        this.setState({searchFlag: !this.state.searchFlag})
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value, msg: "" })
    }

    render() {
        console.log('cur', this.state.currentDate)
        return (
            <CalendarPage
                goToEvent={this.goToEvent}
                goToReminder={this.goToReminder}
                toggleSearch={this.toggleSearch} 
                search={this.state.search}
                searchFlag={this.state.searchFlag}
                inputChange={this.inputChange}
                currentDate={this.state.currentDate}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)