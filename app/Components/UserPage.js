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


const UserPage = ({ user, changeFlag, inputChange, avatarSource, props, changeChlidData, selectImage }) => {
    const imageUrl = avatarLink+avatarSource
    console.log('image', imageUrl)
    if (!user.email) {
        return (
            <Container style={{ paddingBottom: 20 }}>
                <Content style={{ paddingBottom: 10 + '%' }}>
                    <List>
                        <ListItem itemDivider style={{ backgroundColor: '#89ce97' }}>
                            <Text>Child(ren)</Text>
                        </ListItem>
                    </List>
                    <Content contentContainerStyle={{ flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 10 }} >
                        <TouchableOpacity onPress={() => selectImage()}>
                            {avatarSource ? <Thumbnail source={{ uri: imageUrl }} /> :
                                <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                        </TouchableOpacity>
                    </Content>
                    <ListItem bordered>
                        <Text style={styles.listKey}>Birth date</Text>
                        <Text style={styles.listValue}>{user.birth_date}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.listKey}>ID number</Text>
                        {!props.IDNumberFlag ? <Text style={styles.listValue} onPress={() => changeFlag('IDNumberFlag')}>{user.id_number}</Text> :
                            <Input placeholder="Enter ID" value={props.IDNumber} style={styles.listKey} onChangeText={(text) => inputChange('IDNumber', text)} />}
                    </ListItem>
                    <ListItem bordered>
                        <Text style={styles.listKey}>Passport No.</Text>
                        {!props.passportFlag ? <Text style={styles.listValue} onPress={() => changeFlag('passportFlag')}>{user.passport_no}</Text> :
                            <Input placeholder="Enter passport No" value={props.passport} style={styles.listKey} onChangeText={(text) => inputChange('passport', text)} />}
                    </ListItem>
                    <ListItem>
                        <Text style={styles.listKey}>Full Name</Text>
                        <Text style={styles.listValue} >{user.first_name + ' ' + user.last_name}</Text>
                    </ListItem>
                    <ListItem bordered>
                        <Text style={styles.listKey}>Alergies</Text>
                        {!props.alergiesFlag ? <Text style={styles.listValue} onPress={() => changeFlag('alergiesFlag')}>{user.allergies}</Text> :
                            <Input placeholder="Enter aleriges" value={props.alergies} style={styles.listKey} onChangeText={(text) => inputChange('alergies', text)} />}
                    </ListItem>
                    <ListItem>
                        <Text style={styles.listKey}>Phone number</Text>
                        {!props.phoneFlag ? <Text style={styles.listValue} onPress={() => changeFlag('phoneFlag')}>{user.phone}</Text> :
                            <Input placeholder="Enter phone Number" value={props.phone} style={styles.listKey} onChangeText={(text) => inputChange('phone', text)} />}
                    </ListItem>
                    <ListItem>
                        <Text style={styles.listKey}>shirt size</Text>
                        {!props.shirtSizeFlag ? <Text style={styles.listValue} onPress={() => changeFlag('shirtSizeFlag')}>{user.shirt_size}</Text> :
                            <Input placeholder="Enter shirt size" value={props.shirtSize} style={styles.listKey} onChangeText={(text) => inputChange('shirtSize', text)} />}
                    </ListItem>
                    <ListItem>
                        <Text style={styles.listKey}>shoe size</Text>
                        {!props.shoeSizeFlag ? <Text style={styles.listValue} onPress={() => changeFlag('shoeSizeFlag')}>{user.shoe_size}</Text> :
                            <Input placeholder="Enter shoe size" value={props.shoeSize} style={styles.listKey} onChangeText={(text) => inputChange('shoeSize', text)} />}
                    </ListItem>
                    <Body style={{ width: 100 + '%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.btn} onPress={() => changeChlidData()}>
                            <Image source={require('../images/checked.png')} style={{ width: 34, height: 24 }} />
                        </TouchableOpacity>
                    </Body>
                </Content>
            </Container>
        );
    } else {
        console.log('image url', `${avatarLink}${user.avatar}`)
        return (
            <Container>
                <Content style={{ paddingBottom: 10 + '%' }}>
                    <List>
                        <ListItem itemDivider style={{ backgroundColor: '#89ce97' }}>
                            <Text>Parent</Text>
                        </ListItem>
                    </List>
                    <Content contentContainerStyle={{ flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 10 }} >
                        {user.avatar ? <Thumbnail source={{ uri: `${avatarLink}${user.avatar}` }} /> :
                            <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                    </Content>
                    <ListItem>
                        <Text style={styles.listKey}>Birth date</Text>
                        <Text style={styles.listValue}>{user.birth_date}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.listKey}>First Name</Text>
                        <Text style={styles.listValue}>{user.first_name}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.listKey}>Last Name</Text>
                        <Text style={styles.listValue}>{user.last_name}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.listKey}>Email</Text>
                        <Text style={styles.listValue}>{user.email}</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    listKey: {
        flex: 2,
        color: '#c4c4c4'
    },
    listValue: {
        flex: 2,
        color: '#89c194'
    },
    btn: {
        backgroundColor: '#3e7b70',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        width: '20%',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 5 + '%'
    },
});

export default UserPage;