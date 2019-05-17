import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersPage from '../Components/UsersPage';

import * as action from '../store/actions/users';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    changeUserData = () => {
        console.log('change data')
    }

    parentDetails = (id) => {
        console.log('id', id)
        this.props.parentDetails(id)
        this.props.navigation.navigate('User')
    }

    childDetails = (id) => {
        console.log('id', id)
        this.props.childDetails(id)
        this.props.navigation.navigate('User')
    }


    render() {
        console.log('users ', this.props.user.data.family.parents)
        return (
            <UsersPage props={this.props}
                changeUserData={this.changeUserData}
                parents={this.props.user.data.family.parents}
                childs={this.props.user.data.family.childs}
                childDetails={this.childDetails}
                parentDetails={this.parentDetails} />
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
        parentDetails: (data) => {
            action.parentDetails(dispatch, data)
        },
        childDetails: (data) => {
            action.childDetails(dispatch, data)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)