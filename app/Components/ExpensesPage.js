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
import { Container, Thumbnail, Body, Left, Content, List, Item, Input, ListItem, Text } from 'native-base';
import Styles from '../constants/Styles';
import avatarLink from '../constants/avatar';

const ExpensesPage = ({ childs, child, addExpense, description, disable, price, setModalVisible, modalVisible, changeChild, inputChange, expenses }) => {
    console.log('sssss', price)
    return (
        <Container>
            <Content>
                <ListItem itemDivider style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#89ce97' }}>
                    <Left>
                        <Text>Child(ren)s</Text>
                    </Left>
                    <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        {childs.map((item, i) => (
                            <Body key={i}>
                                <View style={{ width: 55, height: 55, borderRadius: 50, zIndex: (child == item.id ? 3333 : 1111), backgroundColor: 'rgba(0,0,0,.5)', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 25, height: 25 }} source={require('../images/checked-green.png')} />
                                </View>
                                <TouchableOpacity style={{ position: 'absolute', zIndex: 2222, }} onPress={() => !disable ? changeChild(item.id): null}>
                                    {item.avatar ? <Thumbnail source={{ uri: `${avatarLink}${item.avatar}` }} /> :
                                        <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                                </TouchableOpacity>
                            </Body>
                        ))}
                    </Body>
                </ListItem>
                {expenses.map((item, i) => (
                    <ListItem key={i} style={Styles.FlexRow}>
                        <Text style={{ marginLeft: 20 }}>{item.description}</Text>
                        <Body style={[Styles.FlexRow, { justifyContent: 'flex-end' }]}>
                            <Text style={{ marginLeft: 20 }}>{item.expenses} $</Text>
                            {item.users[0].avatar ? <Thumbnail source={{ uri: `${avatarLink}${item.users[0].avatar}` }} /> :
                                        <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                        </Body>
                    </ListItem>
                ))}
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
                            <Input placeholder="description" value={description} onChangeText={(text) => inputChange('description', text)} />
                        </Item>
                        <Item last>
                            <Input placeholder="price" value={price} onChangeText={(text) => inputChange('price', text)} />
                        </Item>
                        <TouchableOpacity style={[styles.btnAdd]} onPress={() => addExpense()}>
                            <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Content>
            <TouchableOpacity style={styles.btnplus} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
            </TouchableOpacity>
        </Container>
    );
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

export default ExpensesPage;