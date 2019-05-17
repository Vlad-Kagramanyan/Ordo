import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { Container, Content, Body, Input, ListItem, Thumbnail, } from 'native-base';

const ChatPage = ({ }) => {
    return ( 
        <Container>
            <Content style={{ flex: 1, backgroundColor: '#e7e7e7', position: 'relative' }}>
                <Body style={styles.Left}>
                    <Text style={{ backgroundColor: '#7c7c7c', padding: 5, borderRadius: 5, fontSize: 20 }}>left</Text>
                </Body>
                <Body style={styles.Right}>
                    <Text style={{ backgroundColor: '#c7c7c7', padding: 5, borderRadius: 5, fontSize: 20 }}>right</Text>
                </Body>
            </Content>
                <Body style={{width: 100+'%', position: 'absolute',left: 0, bottom: 15}}>
                    <Input placeholder="Type message" style={{ backgroundColor: 'white', width: 100+'%', }} />
                    <Image source={require('../images/send.png')} style={{ position: 'absolute', right: 15, top: 10, width: 32, height: 32 }} />
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
        margin: 5
    },
    Right: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 10,
        margin: 5
    }
});


export default ChatPage