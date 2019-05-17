import React, { Component } from 'react';
import {
  View,
  CheckBox,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Container, Thumbnail, Root, Content, Radio, Body, Toast, Input, ListItem, Text, Separator } from 'native-base'
import avatarLink  from '../constants/avatar'; 

export default SettingsPage = ({ handleRadio, childDays, googleMerge, handleCheckbox, changeUserData, user, changeFlag,
  lastNameFlag, avatar, avatarSource, selectImage, firstNameFlag, emailFlag, passwordFlag, inputChange }) => {
    
    const imageUrl = avatarLink+avatarSource
    return (
    <Root>
      <Container >
        <Content>
          <Content contentContainerStyle={{ flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 10 }} >
            <TouchableOpacity onPress={() => selectImage()}>
              {avatarSource ? <Thumbnail source={ {uri:  imageUrl}} /> :
                <Thumbnail source={require('../images/empty_avatar.jpg')} />}
            </TouchableOpacity>
          </Content>
          <ListItem bordered>
            <Text style={{ flex: 2, color: '#c4c4c4' }}>First Name</Text>
            {!firstNameFlag ?
              <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('firstNameFlag')}>{user.first_name}</Text> :
              <Input placeholder="Enter first name" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('firstName', text)}
              />}
          </ListItem>
          <ListItem>
            <Text style={{ flex: 2, color: '#c4c4c4', padding: 0 }}>Last Name</Text>
            {!lastNameFlag ?
              <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('lastNameFlag')}>{user.last_name}</Text> :
              <Input placeholder="Enter last name" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('lastName', text)}
              />}
          </ListItem>
          <ListItem >
            <Text style={{ flex: 2, color: '#c4c4c4' }}>Email address</Text>
            {!emailFlag ?
              <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('emailFlag')}>{user.email}</Text> :
              <Input placeholder="Enter emali" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('email', text)}
              />}
          </ListItem>
          <ListItem bordered>
            <Text style={{ flex: 2, color: '#c4c4c4' }} >old password</Text>
            {!passwordFlag ?
              <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('passwordFlag')}></Text> :
              <Input placeholder="Enter old password" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('password', text)}
              />}
          </ListItem>
          <ListItem bordered>
            <Text style={{ flex: 2, color: '#c4c4c4' }} >new password</Text>
            {!passwordFlag ?
              <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('passwordFlag')}></Text> :
              <Input placeholder="Enter new password" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('newPassword', text)}
              />}
          </ListItem>
          <ListItem>
            <Text style={{ flex: 2, color: '#c4c4c4' }}>confirm password</Text>
            {!passwordFlag ?
              <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('passwordFlag')}></Text> :
              <Input placeholder="Enter confirm password" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('confirmPassword', text)}
              />}
          </ListItem>
          <ListItem last style={{ width: 100 + '%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Text style={{ color: '#c4c4c4' }}>choosing the start of the week day</Text>
            <Body style={{ width: 100 + '%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              {childDays.map((item, i) => (
                <Body key={item.day} style={{ flex: 1, flexDirection: 'row' }}>
                  <Radio
                    color={"gray"}
                    selectedColor={"gray"}
                    selected={item.on}
                    onPress={() => handleRadio(i)}
                  />
                  <Text style={{ color: '#c4c4c4', marginLeft: 3 }}>{item.day}</Text>
                </Body>
              ))}
            </Body>
          </ListItem>
          <ListItem style={{ width: 100 + '%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ color: '#c4c4c4' }}> marging width google calendar</Text>
            <CheckBox value={googleMerge}
              onValueChange={() => handleCheckbox()} />
          </ListItem>
          <Body style={{ width: 100 + '%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn} onPress={() => changeUserData()}>
              <Image source={require('../images/checked.png')} style={{ width: 34, height: 24 }} />
            </TouchableOpacity>
          </Body>
        </Content>
      </Container>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
