import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesPage from '../Components/MessagesPage';


class Messages extends Component {
    goToChat = (id) => {
        this.props.navigation.navigate('Chat', {id: id})
    }

    render() {
        return (
            <MessagesPage
                users={this.props.user.data.family.parents.filter(item => item.id != this.props.user.data.activeUser.id)} 
                goToChat={this.goToChat}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Messages)