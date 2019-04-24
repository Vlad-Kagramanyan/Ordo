import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
    TouchableHighlight
} from 'react-native';
import { Container, Thumbnail, Body, Left, Content, List, Item, Right, Input, Button, ListItem, Text, Header, Tab, Tabs } from 'native-base';
import Styles from '../constants/Styles';
import avatarLink from '../constants/avatar';

const ContactsPage = ({ setModalVisible, addContacts, editContact, callback, deleteContact, modalVisible, inputChange, name, address, number, contacts }) => {
    console.log('calbaack', callback)
    return (
        <Container>
            <Content>
                <List>
                    {contacts.map(item => (
                        <ListItem key={item.id}>
                            <Body>
                                <Text>{item.name}</Text>
                                <Text note numberOfLines={1}>{item.number}</Text>
                                <Text note numberOfLines={1}>{item.address}</Text>
                            </Body>
                            <Right>
                                <Button style={{marginBottom: 10}} onPress={() => deleteContact(item.id)}>
                                    <Text>delete</Text>
                                </Button>
                                <Button onPress={() => setModalVisible(!modalVisible, 'editContact', item.id)}>
                                    <Text>edit</Text>
                                </Button>
                            </Right>
                        </ListItem>

                    ))}
                </List>
                <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={Styles.FlexColumn}>
                            <TouchableHighlight style={{ alignSelf: 'flex-end' }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={{ fontSize: 50, fontWeight: 'bold', alignSelf: 'flex-end' }}>&times;</Text>
                            </TouchableHighlight>
                            <Item>
                                <Input placeholder="name" value={name} onChangeText={(text) => inputChange('name', text)} />
                            </Item>
                            <Item>
                                <Input placeholder="number" value={number} onChangeText={(text) => inputChange('number', text)} />
                            </Item>
                            <Item last>
                                <Input placeholder="address" value={address} onChangeText={(text) => inputChange('address', text)} />
                            </Item>
                            <TouchableOpacity style={[styles.btnAdd]} onPress={() => (callback == 'editContact') ? editContact(): addContacts()}>
                                <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
            </Content>
                <TouchableOpacity style={styles.btnplus} onPress={() => setModalVisible(!modalVisible, 'addContacts', undefined)}>
                    <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
                </TouchableOpacity>
        </Container>
            )
        }
        
const styles = StyleSheet.create({
                container: {
                flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
    btnplus: {
                backgroundColor: '#3e7b70',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            position: 'absolute',
            right: 15,
            bottom: 15
        },
    btnAdd: {
                marginTop: 30,
            backgroundColor: '#3e7b70',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            position: 'relative'
        },
    });
    
export default ContactsPage;