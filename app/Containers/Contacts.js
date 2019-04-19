import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'native-base';

import ContactsPage from '../Components/ContactsPage';

import * as action from '../store/actions/expenses';

class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }


    render() {
        console.log('user', this.props.user)
        return (
            <ContactsPage
                modalVisible={this.state.modalVisible}
                setModalVisible={this.setModalVisible}
                inputChange={this.inputChange}
            />
        )
    }
}

mapStateToProps = (state) => {
    return {
        user: state.user,
        contacts: state.contacts
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        addContacts: (data, token) => {
            action.addContacts(dispatch, data, token)
        },
        getContacts: (data, token) => {
            action.getContacts(dispatch, data, token)
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contacts)