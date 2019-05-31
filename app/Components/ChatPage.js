import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { Container, Content, Body, Input, ListItem, Thumbnail, } from 'native-base';
import avatarLink from '../constants/avatar';

const ChatPage = ({ message, inputChange, sendeMessage, messageList, user, interlocutor, users, convertTime }) => {
    return (
        <Container style={{ paddingBottom: 60 }}>
            <Content style={{ flex: 1, backgroundColor: '#e7e7e7', position: 'relative', }}>
                {messageList.map((item, i) => (
                    <Body key={i} style={item.from == user.id ? styles.Right : styles.Left}>
                        {item.from == interlocutor.id ? interlocutor.avatar ? <Thumbnail source={{ uri: `${avatarLink}${interlocutor.avatar}` }} /> :
                            <Thumbnail source={require('../images/empty_avatar.jpg')} /> : null}
                        <View style={{ backgroundColor: item.from == user.id ? '#00897b' : '#7cb342', padding: 5, marginLeft: 8, marginRight: 8, borderRadius: 5, color: 'white', position: 'relative', fontSize: 20 }}>
                            <Text style={{ color: 'white', fontSize: 10 }}>{convertTime(item.time)}</Text>
                            <Text style={{ color: 'white', fontSize: 14 }}> {item.message}</Text>
                        </View>
                        {item.from == user.id ? user.avatar ? <Thumbnail source={{ uri: `${avatarLink}${user.avatar}` }} /> :
                            <Thumbnail source={require('../images/empty_avatar.jpg')} /> : null}
                    </Body>
                ))}
            </Content>
            <Body style={{ width: 100 + '%', position: 'absolute', left: 0, bottom: 15 }}>
                <Input value={message} placeholder="Type message" style={{ backgroundColor: 'white', width: 100 + '%', }} onChangeText={(text) => inputChange('message', text)} />
                <TouchableOpacity onPress={() => sendeMessage()} style={{ position: 'absolute', right: 15, top: 10 }} >
                    <Image source={require('../images/send.png')} style={{ width: 32, height: 32 }} />
                </TouchableOpacity>
            </Body>
        </Container>
    )
}

const styles = StyleSheet.create({
    Left: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
        margin: 3,
        marginLeft: 5
    },
    Right: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 10,
        margin: 3,
    }
});


export default ChatPage