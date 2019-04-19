import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
    Modal,
    TouchableHighlight
} from 'react-native';
import { Container, Thumbnail, Body, Left, Content, List, Item, Input, ListItem, Text, Header, Tab, Tabs } from 'native-base';
import Styles from '../constants/Styles';
import avatarLink from '../constants/avatar';

const ContactsPage = ({ setModalVisible, modalVisible, inputChange }) => {
    return (
        <Container>
            <Content>
                <Tabs>
                    <Tab heading="Groups" tabStyle={{ backgroundColor: 'rgba(53, 168, 52, 0.58);' }} activeTabStyle={{ backgroundColor: 'rgba(53, 168, 52, 0.58);' }} activeTextStyle={{color: '#fff'}} >
                        <Container>
                            <Content>
                                <ListItem style={Styles.FlexRow}>
                                    <Text style={{ marginLeft: 20 }}>+4654644879</Text>
                                    <Body style={[Styles.FlexRow, { justifyContent: 'flex-end' }]}>
                                        <Text style={{ marginLeft: 20 }}>name</Text>
                                    </Body>
                                </ListItem>
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
                                            <Input placeholder="number" value={'number'} onChangeText={(text) => inputChange('number', text)} />
                                        </Item>
                                        <Item last>
                                            <Input placeholder="name" value={'name'} onChangeText={(text) => inputChange('name', text)} />
                                        </Item>
                                        <TouchableOpacity style={[styles.btnAdd]} >
                                            <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </Content>
                            <TouchableOpacity style={styles.btnplus} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
                            </TouchableOpacity>
                        </Container>
                    </Tab>
                    <Tab heading="More" TextStyle={{color: '#fff'}} tabStyle={{ backgroundColor: 'rgba(53, 168, 52, 0.58);' }} activeTabStyle={{ backgroundColor: 'rgba(53, 168, 52, 0.58);' }} activeTextStyle={{color: '#fff'}}>
                        <Text style={{ marginLeft: 20 }}>name2</Text>
                    </Tab>
                </Tabs>
            </Content>
        </Container>
    )
    // return (
    //     <Container>
    //         <Content>
    //             <ListItem key={item.id} style={Styles.FlexRow}>
    //                     <Text style={{ marginLeft: 20 }}>lorem ipsum</Text>
    //                     <Body style={[Styles.FlexRow, { justifyContent: 'flex-end' }]}>
    //                         <Text style={{ marginLeft: 20 }}>0 $</Text>
    //                         <Thumbnail source={require('../images/empty_avatar.jpg')} />
    //                     </Body>
    //                 </ListItem>
    // <Modal
    //     animationType="slide"
    //     transparent={false}
    //     visible={modalVisible}
    //     onRequestClose={() => {
    //         Alert.alert('Modal has been closed.');
    //     }}>
    //     <View style={Styles.FlexColumn}>
    //         <TouchableHighlight style={{ alignSelf: 'flex-end' }}
    //             onPress={() => {
    //                 setModalVisible(!modalVisible);
    //             }}>
    //             <Text style={{ fontSize: 50, fontWeight: 'bold', alignSelf: 'flex-end' }}>&times;</Text>
    //         </TouchableHighlight>
    //         <Item>
    //             <Input placeholder="description" value={'description'} onChangeText={(text) => inputChange('description', text)} />
    //         </Item>
    //         <Item last>
    //             <Input placeholder="price" value={'price'} onChangeText={(text) => inputChange('price', text)} />
    //         </Item>
    //         <TouchableOpacity style={[styles.btnAdd]} >
    //             <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
    //         </TouchableOpacity>
    //     </View>
    // </Modal>
    //         </Content>
    //         <TouchableOpacity style={styles.btnplus} onPress={() => setModalVisible(!modalVisible)}>
    //             <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
    //         </TouchableOpacity>
    //     </Container>
    // );
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