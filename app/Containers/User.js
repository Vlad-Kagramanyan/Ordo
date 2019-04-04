import React, { Component } from 'react';
import UserPage from '../Components/UserPage';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <UserPage/>
        )
    }
}

export default User;