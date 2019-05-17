import React, { Component } from 'react';
import { StyleSheet, CheckBox, TouchableOpacity, View, Switch, Image } from 'react-native';
import { Container, Content, Body, Radio, ListItem, Text, Right } from 'native-base';
import Modal from "react-native-modal";

class EventSecondPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            switchValue: false,
            visibleDaysModal: false,
            visibleRepeatTimeModal: false,
            choosenDays: [],
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            repeatTime: ['One time', 'Daily', 'Weekly', 'Monthly', 'Yearly'],
            radioValue: ''
        }
    }

    onSwitch = (value) => {
        this.setState({ switchValue: !this.state[value] })
    }

    toggleModal = (key) => {
        this.setState({ [key]: !this.state[key] })
    }

    chooseDays = (value) => {
        const arr = Object.assign([], this.state.choosenDays)
        const item = arr.filter(item => item == value)[0];
        if (item) {
            arr.splice(arr.indexOf(value), 1)
        } else {
            arr.push(value)
        }
        this.setState({ choosenDays: arr })
    }

    handleRadio = (value) => {
        this.setState({ radioValue: value })
    }

    handleCheckbox = () => {
        this.setState({ googleMerge: !this.state.googleMerge })
    }

    render() {
        return (
            <Container >
                <Content>
                    <ListItem bordered>
                        <Text style={{ flex: 2 }}>Days</Text>
                        <TouchableOpacity style={styles.triangle} onPress={() => this.toggleModal('visibleDaysModal')} ></TouchableOpacity>
                    </ListItem>
                    <ListItem bordered>
                        <Text style={{ flex: 2 }}>Frequency</Text>
                        <TouchableOpacity style={styles.triangle} onPress={() => this.toggleModal('visibleRepeatTimeModal')} ></TouchableOpacity>
                    </ListItem>
                    <ListItem bordered>
                        <Text style={{ flex: 2 }}>Has an ends Days</Text>
                        <Switch value={this.state.switchValue} onValueChange={(value) => this.onSwitch('switchValue')} />
                    </ListItem>
                    <Modal style={{ flex: 1, }} isVisible={this.state.visibleDaysModal}>
                        {this.state.days.map((item, i) => (
                            <ListItem bordered key={i} style={{ width: 90 + '%', backgroundColor: 'white', paddingLeft: 10 }}>
                                <Text style={{ flex: 2 }}>{item}</Text>
                                <CheckBox value={this.state.choosenDays.some(item => item == i + 1)}
                                    onValueChange={() => this.chooseDays(i + 1)} />
                            </ListItem >
                        ))}
                        <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => this.toggleModal('visibleDaysModal')} >
                            <Text style={{ color: 'white', fontSize: 40 }}>&times;</Text>
                        </TouchableOpacity>
                    </Modal>
                    <Modal style={{ flex: 1, }} isVisible={this.state.visibleRepeatTimeModal}>
                        {this.state.repeatTime.map((item, i) => (
                            <ListItem key={i} bordered style={{width: 90 + '%', backgroundColor: 'white', paddingLeft: 10}}>
                                <Text style={{ flex: 2 }}>{item}</Text>
                                <Radio
                                    color={"gray"}
                                    selectedColor={"gray"}
                                    selected={this.state.radioValue == item}
                                    onPress={() => this.handleRadio(item)} />
                            </ListItem >
                        ))}
                        <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => this.toggleModal('visibleRepeatTimeModal')} >
                            <Text style={{ color: 'white', fontSize: 40 }}>&times;</Text>
                        </TouchableOpacity>
                    </Modal>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderTopWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'gray'
    }
});



export default EventSecondPage;