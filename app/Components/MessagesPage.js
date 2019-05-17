import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Container, ListItem, Right, Thumbnail, Header, Content, Tab, Tabs } from 'native-base';

const MessagesPage = ({ users, goToChat }) => {
    return (
        <Container>
            <Tabs>
                <Tab heading="Conversations" tabStyle={{ backgroundColor: '#7cd095' }} activeTabStyle={{ backgroundColor: '#7cd095' }} textStyle={{ color: '#fff' }}>
                    <Container style={{ flex: 1 }}>
                        {users.map(item => (
                            <ListItem onPress={() => goToChat()} key={item.id} style={{justifyContent: 'space-between', marginLeft: 0, padding: 10, marginBottom: 5, width: 100 + '%', backgroundColor: '#e7e7e7' }}>
                                {item.avatar ? <Thumbnail source={{ uri: `${avatarLink}${item.avatar}` }} /> :
                                    <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                                <Text style={{ marginLeft: 20 }} >{item.first_name}</Text>
                                <Right>
                                    <Image source={require('../images/email.png')} style={{ width: 40, height: 40 }} />
                                </Right>
                            </ListItem>
                        ))}
                    </Container>
                </Tab>
                <Tab heading="Drafts" tabStyle={{ backgroundColor: '#7cd095' }} activeTabStyle={{ backgroundColor: '#7cd095' }} textStyle={{ color: '#fff' }}>
                    <Text>Draf</Text>
                </Tab>
            </Tabs>
        </Container>
    )
}


export default MessagesPage