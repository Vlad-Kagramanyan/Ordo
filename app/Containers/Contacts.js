import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'native-base';

import ContactsPage from '../Components/ContactsPage';

import * as action from '../store/actions/contacts';

class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            callback: undefined,
            name: "",
            number: "",
            address: "",
            id: undefined
        }
    }

    componentDidMount() {
        if(this.props.contacts.data.length == 0) {
            this.props.getContacts({parent_id: this.props.user.data.activeUser.id}, this.props.user.data.token)
        }
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value })
    }

    setModalVisible = (visible, callback, id) => {
        this.setState({ modalVisible: visible, callback: callback, id: id });
    }

    addContacts = () => {
        const {name, number, address} = this.state 
        const data = {
            parent_id: this.props.user.data.activeUser.id,
            name: name,
            number: number,
            address: address
        }
        this.props.addContacts(data, this.props.user.data.token)
        this.setState({name: "", number: "", address: "", modalVisible: false})
    }

    deleteContact = (id) => {
        console.log('ddd', id)
        this.props.deleteContact(id, this.props.user.data.token)
    }

    editContact = () => { 
        const contact = this.props.contacts.data.filter(item => item.id == this.state.id)
        const data = {
            parent_id: this.props.user.data.activeUser.id,
            name: this.state.name || contact[0].name,
            number: this.state.number || contact[0].number,
            address: this.state.address || contact[0].address
        }
        console.log('sss', data)
        this.props.editContact(data, this.state.id, this.props.user.data.token)
        this.setState({name: "", number: "", address: "", id: undefined, modalVisible: false})
    }


    render() {
        console.log('user', this.props.contacts)
        return (
            <ContactsPage
                modalVisible={this.state.modalVisible}
                setModalVisible={this.setModalVisible}
                addContacts={this.addContacts}
                deleteContact={this.deleteContact}
                editContact={this.editContact}
                inputChange={this.inputChange}
                name={this.state.name}
                number={this.state.number}
                address={this.state.address}
                contacts={this.props.contacts.data}
                callback={this.state.callback}
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
        deleteContact: (id, token) => {
            action.deleteContact(dispatch, id, token)
        },
        editContact: (data, id, token) => {
            action.editContact(dispatch, data, id, token)
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contacts)