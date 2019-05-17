import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewEventPage from '../Components/ViewEventPage';

import * as action from '../store/actions/users';

class ViewEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <ViewEventPage  
            childs={[{id: 1, avatar: null, first_name: 'child 1'}]}
            parents={[{id: 1, avatar: null, first_name: 'parent 1'}]}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(ViewEvent)