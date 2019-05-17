import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
import { Container, Thumbnail, Header, Body, Content, Input, List, ListItem, Text } from 'native-base';
import avatarLink from '../constants/avatar';


const ViewEventPage = ({ childs, parents, avatarSource }) => {
    const imageUrl = avatarLink + avatarSource
    return (
        <Container style={{ paddingBottom: 20 }}>
            <Content>
                <ListItem bordered>
                    <Text style={{ flex: 2 }}>from</Text>
                    <Body style={{ flex: 2, flexDirection: 'row' }}>
                        <Text style={{ flex: 2 }}>21/21/2019</Text>
                        <Text style={{ flex: 2 }}>00:00</Text>
                    </Body>
                </ListItem>
                <ListItem bordered>
                    <Text style={{ flex: 2 }}>to</Text>
                    <Body style={{ flex: 2, flexDirection: 'row' }}>
                        <Text style={{ flex: 2 }}>21/21/2019</Text>
                        <Text style={{ flex: 2 }}>00:00</Text>
                    </Body>
                </ListItem>
                <ListItem itemDivider style={{ backgroundColor: '#89ce97' }}>
                    <Text>Child(ren)</Text>
                </ListItem>
                {childs.map(item => (
                    <ListItem key={item.id}>
                        {item.avatar ? <Thumbnail source={{ uri: `${avatarLink}${item.avatar}` }} /> :
                            <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                        <Text style={{ marginLeft: 20 }}>{item.first_name}</Text>
                    </ListItem>
                ))}
                <ListItem itemDivider style={{ backgroundColor: '#89ce97' }}>
                    <Text>Parent</Text>
                </ListItem>
                {parents.map(item => (
                    <ListItem key={item.id}>
                        {item.avatar ? <Thumbnail source={{ uri: `${avatarLink}${item.avatar}` }} /> :
                            <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                        <Text style={{ marginLeft: 20 }} >{item.first_name}</Text>
                    </ListItem>
                ))}
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({

});

export default ViewEventPage;