import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button
} from 'react-native';
import { Container, Thumbnail, Header, Content, List, ListItem, Text } from 'native-base';
import avatarLink from '../constants/avatar';

const UsersPage = ({ props, childs, parents, childDetails, parentDetails }) => {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem itemDivider style={{ backgroundColor: '#89ce97' }}>
                        <Text>Child(ren)</Text>
                    </ListItem>
                    {childs.map(item => (
                        <ListItem key={item.id} onPress={() => childDetails(item.id)}>
                            {item.avatar ? <Thumbnail source={{ uri: `${avatarLink}${item.avatar}` }} /> :
                                <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                            <Text style={{ marginLeft: 20 }}>{item.first_name}</Text>
                        </ListItem>
                    ))}
                    <ListItem itemDivider style={{ backgroundColor: '#89ce97' }}>
                        <Text>Parent</Text>
                    </ListItem>
                    {parents.map(item => (
                        <ListItem key={item.id} onPress={() => parentDetails(item.id)}>
                            {item.avatar ? <Thumbnail source={{ uri: `${avatarLink}${item.avatar}` }} /> :
                                <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                            <Text style={{ marginLeft: 20 }} >{item.first_name}</Text>
                        </ListItem>
                    ))}
                </List>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UsersPage;