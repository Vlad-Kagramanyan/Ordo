import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesPage from '../Components/MessagesPage';

class Messages extends Component {
    goToChat = () => {
        console.log('sssssssssssssssssssss')
        this.props.navigation.navigate('Chat')
    }

    render() {
        return (
            <MessagesPage
                users={this.props.user.data.family.parents} 
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