import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatPage from '../Components/ChatPage';
import firebase from 'firebase';
import { Toast, Text } from 'native-base';

import * as action from '../store/actions/discussions';


class Chat extends Component {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
        this.state = {
            message: '',
            user: this.props.user.data.activeUser,
            messageList: [],
            personID: this.props.navigation.getParam('id')
        }
        _isMounted = false;
    }

    componentDidMount() {
        _isMounted = true;
        if (_isMounted) {
            const userId = this.props.user.data.activeUser.id;
            firebase.database().ref('messages').child(userId).child(this.state.personID)
                .on('child_added', (value) => {
                    console.log('val', value.val(), value.key)
                    this.setState((prevState) => (
                        { messageList: [...prevState.messageList, value.val()] }
                    ))
                })
        }
    }

    convertTime = (time) => {
        let d = new Date(time)
        let c = new Date()
        let result = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':';
        result += (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        if (c.getDay() !== d.getDay()) {
            result = d.getDay() + ' ' + d.getMonth() + ' ' + result
        }
        return result
    }

    componentWillUnmount() {
        // const userId = this.props.user.data.activeUser.id;
        // firebase.database().ref('messages').child(userId).child(this.state.personID)
        //     .onDisconnect().remove(function (err) {
        //         if (err) {
        //             console.error('could not establish onDisconnect event', err);
        //         }
        //     });
        _isMounted = false
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value, msg: "" })
    }

    sendeMessage = async () => {
        const userId = this.props.user.data.activeUser.id;
        // addDraft = () => {
        // console.log('worked')
        // }

        let msgId = firebase.database().ref('messages').child(userId).child(this.state.personID).push().key;
        let updates = {}
        let message = {
            message: this.state.message,
            time: firebase.database.ServerValue.TIMESTAMP,
            from: userId,
        }
        // this.props.addDraft({from: userId, to: this.state.personID, message: message})
        updates['messages/' + userId + '/' + this.state.personID + '/' + msgId] = message;
        updates['messages/' + this.state.personID + '/' + userId + '/' + msgId] = message;
        firebase.database().ref().update(updates, function (err) {
            if (err) {
                console.log('error 3', err)
            } else {
                console.log('norm')
                // addDraft()
            }
        })
        this.setState({ message: '' })
    }


    render() {
        console.log('drafts ', this.props.drafts)
        return (
            <ChatPage
                message={this.state.message}
                sendeMessage={this.sendeMessage}
                inputChange={this.inputChange}
                messageList={this.state.messageList}
                interlocutor={this.props.user.data.family.parents.filter(item => item.id == this.state.personID)[0]}
                personID={this.state.personID}
                user={this.state.user}
                users={this.props.user.data.family}
                convertTime={this.convertTime} />
        )
    }
}



mapStateToProps = (state) => {
    return {
        user: state.user,
        drafts: state.discussions
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        addDraft: (data) => {
            action.addDraft(dispatch, data)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat)