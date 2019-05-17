import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Switch, } from 'react-native';
import { Container, Body, Content, Button, ListItem, Text, Right } from 'native-base';
import DateTimePicker from "react-native-modal-datetime-picker";
import avatarLink from '../constants/avatar';

const ReminderPage = ({ date, time, ToggleDateTimePicker, isDatePickerVisible, isTimePickerVisible, handleDatePicked, handleTimePicked,
    switchValue, onSwitch }) => {

    return (
        <Container >
            <Content style={{flex: 1}}>
                <ListItem noBorder>
                    <Text style={{ flex: 2 }}>lorem ipsum</Text>
                    <Switch value={switchValue} onValueChange={(value) => onSwitch(switchValue)} />
                </ListItem>
                <ListItem bordered>
                    <Body style={{ flex: 2, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => ToggleDateTimePicker('isDatePickerVisible')} style={{
                            borderRightColor: '#e7e7e7',
                            borderRightWidth: 1
                        }}>
                            <Text >{date}</Text>
                            <DateTimePicker
                                isVisible={isDatePickerVisible}
                                onConfirm={handleDatePicked}
                                onCancel={ToggleDateTimePicker}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => ToggleDateTimePicker('isTimePickerVisible')}>
                            <Text >{time}</Text>
                            <DateTimePicker
                                isVisible={isTimePickerVisible}
                                onConfirm={handleTimePicked}
                                onCancel={ToggleDateTimePicker}
                                mode={'time'} />
                        </TouchableOpacity>
                    </Body>
                </ListItem>
                <TouchableOpacity style={styles.btnplus}>
                    <Text style={{ color: '#fff', fontSize: 30, }}>+</Text>
                </TouchableOpacity>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    btnplus: {
        backgroundColor: '#3e7b70',
        padding: 10,
        marginTop: 20,
        marginLeft: 75+'%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        // position: 'absolute',
        // right: 15,
        // bottom: 15
    },
});

export default ReminderPage;