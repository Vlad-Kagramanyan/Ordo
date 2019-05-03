import React from 'react';
import { StyleSheet, TouchableOpacity, View, Switch } from 'react-native';
import { Container, Thumbnail, Body, Content, Button, Input, Icon, ListItem, DatePicker, Text } from 'native-base';
import DateTimePicker from "react-native-modal-datetime-picker";
import avatarLink from '../constants/avatar';

const EventPage = ({ childs, inputChange, changeFlag, onSwitch, eventFlag,
    alarmFlag, locationFlag, event, alarm, loacation, switchValue,
    fromisDatePickerVisible, fromisTimePickerVisible, toisDatePickerVisible, avatarSource,
    toisTimePickerVisible, ToggleDateTimePicker, handleDatePicked, toHandleDatePicked,
    handleTimePicked, toHandleTimePicked, fromTime, fromDate, toTime, toDate, chooseChild, choosenChildId }) => {
        console.log('ssssssss', choosenChildId)
    return (
        <Container >
            <Content>
                <ListItem bordered>
                    <Text style={{ flex: 2 }}>Event</Text>
                    {!eventFlag ?
                        <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('eventFlag')}>{event}</Text> :
                        <Input placeholder="Enter event name" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('event', text)}
                        />}
                </ListItem>
                <ListItem bordered>
                    <Text style={{ flex: 2 }}>All Day</Text>
                    <Switch value={switchValue} onValueChange={(value) => onSwitch(switchValue)} />
                </ListItem>
                <ListItem bordered>
                    <Text style={{ flex: 2 }}>from</Text>
                    <Body style={{ flex: 2, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => ToggleDateTimePicker('fromisDatePickerVisible')}>
                            <Text >{fromDate}</Text>
                        </TouchableOpacity>
                        <Button title="Show DatePicker" onPress={() => ToggleDateTimePicker()} />
                        <DateTimePicker
                            isVisible={fromisDatePickerVisible}
                            onConfirm={handleDatePicked}
                            onCancel={ToggleDateTimePicker}
                        />
                        <TouchableOpacity onPress={() => ToggleDateTimePicker('fromisTimePickerVisible')}>
                            <Text >{fromTime}</Text>
                            <DateTimePicker
                                isVisible={fromisTimePickerVisible}
                                onConfirm={handleTimePicked}
                                onCancel={ToggleDateTimePicker}
                                mode={'time'}
                            />
                        </TouchableOpacity>
                    </Body>
                </ListItem>
                <ListItem bordered>
                    <Text style={{ flex: 2 }}>to</Text>
                    <Body style={{ flex: 2, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => ToggleDateTimePicker('toisDatePickerVisible')}>
                            <Text >{toDate}</Text>
                        </TouchableOpacity>
                        <Button title="Show DatePicker" onPress={() => ToggleDateTimePicker()} />
                        <DateTimePicker
                            isVisible={toisDatePickerVisible}
                            onConfirm={toHandleDatePicked}
                            onCancel={ToggleDateTimePicker}
                        />
                        <TouchableOpacity onPress={() => ToggleDateTimePicker('toisTimePickerVisible')}>
                            <Text >{toTime}</Text>
                            <DateTimePicker
                                isVisible={toisTimePickerVisible}
                                onConfirm={toHandleTimePicked}
                                onCancel={ToggleDateTimePicker}
                                mode={'time'}
                            />
                        </TouchableOpacity>
                    </Body>
                </ListItem>
                <ListItem bordered>
                    <Text style={{ flex: 2, }}>Location</Text>
                    {!locationFlag ?
                        <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('locationFlag')}>{loacation}</Text> :
                        <Input placeholder="Enter location" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('location', text)}
                        />}
                </ListItem>
                <ListItem bordered>
                    <Text style={{ flex: 2, }}>Set alarm</Text>
                    {!alarmFlag ?
                        <Text style={{ flex: 2, color: '#89c194' }} onPress={() => changeFlag('alarmFlag')}>{alarm}</Text> :
                        <Input placeholder="Set alarm" style={{ flex: 2, color: '#89c194' }} onChangeText={(text) => inputChange('alarm', text)}
                        />}
                </ListItem>
                <ListItem bordered style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text style={{ flex: 2, textAlign: 'left' }}>children(s)</Text>
                    <Body style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {childs.map((item, i) => (
                            <TouchableOpacity key={i} style={{ marginRight: 15 }} onPress={() => chooseChild(item.id)}>
                                {item.avatar ? <Thumbnail source={{ uri: `${avatarLink}${item.avatar}` }} /> :
                                    <Thumbnail source={require('../images/empty_avatar.jpg')} />}
                                {choosenChildId.indexOf(item.id) != (-1) ?
                                    avatarSource ? <Thumbnail style={styles.absoluteImg} source={{ uri: `${avatarLink}${avatarSource}` }} /> :
                                        <Thumbnail style={styles.absoluteImg} source={require('../images/empty_avatar.jpg')} /> : null}
                            </TouchableOpacity>
                        ))}
                    </Body>
                </ListItem>
                {switchValue ?
                    (<Body style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.btn} >
                            <Text style={{ color: 'white' }}>Save</Text>
                        </TouchableOpacity>
                    </Body>) :
                    (<ListItem bordered>
                        <Text style={{ flex: 2, }}>Repeat</Text>
                        <Button iconRight transparent>
                            <Icon name='arrow-forward' style={{ color: 'black' }} />
                        </Button>
                    </ListItem>)}
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    time: {
        color: 'black'
    },
    btn: {
        backgroundColor: '#3e7b70',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 50,
        width: '20%',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 5 + '%'
    },
    absoluteImg: {
        width: 35,
        height: 35,
        position: "absolute",
        left: 50 + '%',
        top: 50 + '%'
    }
});

export default EventPage;