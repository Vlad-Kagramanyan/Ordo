import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
import { Container, Thumbnail, Header, Body, Content, Input, List, ListItem, Text } from 'native-base';


const UserPage = ({ user, fullNameFlag, changeFlag, inputChange }) => {
    console.log('page', user)
    return (
        <Container>
            <Content style={{ paddingBottom: 10 + '%' }}>
                <List>
                    <ListItem itemDivider style={{ backgroundColor: '#89ce97' }}>
                        <Text>Child(ren)</Text>
                    </ListItem>
                </List>
                <Content contentContainerStyle={{ flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 10 }} >
                    <Thumbnail source={{ uri: 'data:image/jpeg;base64,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' }} />
                </Content>
                <ListItem bordered>
                    <Text style={styles.listKey}>Birth date</Text>
                    <Text style={styles.listValue}>{user.birth_date}</Text>
                </ListItem>
                <ListItem>
                    <Text style={styles.listKey}>ID number</Text>
                    <Text style={styles.listValue}>123456</Text>
                </ListItem>
                <ListItem bordered>
                    <Text style={styles.listKey}>Passport No.</Text>
                    <Text style={styles.listValue}>001005</Text>
                </ListItem>
                <ListItem>
                    <Text style={styles.listKey}>Full Name</Text>
                    {!fullNameFlag ?
                        <Text style={styles.listValue} onPress={() => changeFlag('fullNameFlag')}>{user.first_name + ' ' + user.last_name}</Text> :
                        <Input placeholder="Enter full name" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('fullName', text)}
                        />}
                </ListItem>
                <ListItem bordered>
                    <Text style={styles.listKey}>Alergies</Text>
                    <Text style={styles.listValue}>lorem</Text>
                </ListItem>
                <ListItem>
                    <Text style={styles.listKey}>shirt size</Text>
                    <Text style={styles.listValue}>22</Text>
                </ListItem>
                <ListItem>
                    <Text style={styles.listKey}>shoe size</Text>
                    <Text style={styles.listValue}>22</Text>
                </ListItem>
                <Body style={{ width: 100 + '%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={require('../images/checked.png')} style={{ width: 34, height: 24 }} />
                    </TouchableOpacity>
                </Body>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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