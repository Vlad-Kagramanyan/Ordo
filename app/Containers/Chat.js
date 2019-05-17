import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatPage from '../Components/ChatPage';
import { Toast, Text } from 'native-base';

import * as action from '../store/actions/users';


class Chat extends Component {
    constructor(props) {
        super(props)
        const user = this.props.user.data.activeUser
        this.state = {
        }
    }


    render() {
        return (
            <ChatPage/>
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat)