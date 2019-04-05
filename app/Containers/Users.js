import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersPage from '../Components/UsersPage';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    changeUserData = () => {
        console.log('change data')
    }

    render() {
        return (
            <UsersPage props={this.props} 
            changeUserData={this.changeUserData}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Users)