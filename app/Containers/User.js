import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPage from '../Components/UserPage';

import * as action from '../store/actions/users';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullNameFlag: false,
            msg: ''
        }
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value, msg: ""})
    }

    changeFlag = (name) => {
        this.setState({ [name]: true })
    }

    render() {
        console.log('user props', this.props.user.userDetails)
        return (
            <UserPage
            user={this.props.user.userDetails[0]}
            fullNameFlag={this.state.fullNameFlag} 
            changeFlag={this.changeFlag}
            inputChange={this.inputChange}/>
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
        parentDetails: (data) => {
            action.parentDetails(dispatch, data)
        },
        childDetails: (data) => {
            action.childDetails(dispatch, data)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(User)