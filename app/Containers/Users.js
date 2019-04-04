import React, { Component } from 'react';
import UsersPage from '../Components/UsersPage';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <UsersPage props={this.props}/>
        )
    }
}

export default Users;