import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default class ReadioBtn extends Component {


    render() {
        return (
            <RadioForm
                formHorizontal={true}
                animation={true}
            >
                {this.props.radio_props.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i} style={{ flex: 1 }}>
                        <RadioButtonLabel
                            obj={obj}
                            index={i}
                            onPress={this.props.underValueName ? (value) => this.props.SelectRadioBtn(this.props.valueName, this.props.underValueName, obj.value) : (value) => this.props.SelectRadioBtn(this.props.valueName, value)}
                            labelHorizontal={true}
                            labelStyle={{ fontSize: 20, color: '#ffffff' }}
                            labelWrapStyle={{}}
                        />
                        <RadioButtonInput
                            obj={obj}
                            index={i}
                            isSelected={this.props.underValueName ? this.props.value === obj.value[this.props.underValueName] : this.props.value === obj.value[this.props.valueName]}
                            borderWidth={10}
                            onPress={this.props.underValueName ? (value) => this.props.SelectRadioBtn(this.props.valueName, this.props.underValueName, value) : (value) => this.props.SelectRadioBtn(this.props.valueName, value)}
                            buttonInnerColor='gray'
                            buttonOuterColor={'white'}
                            buttonSize={15}
                            buttonOuterSize={20}
                            buttonStyle={this.props.value === obj.value[this.props.valueName] ? { backgroundColor: 'gray' } : { backgroundColor: 'white' }}
                            buttonWrapStyle={{
                                marginLeft: 10, backgroundColor: 'white',
                                width: 20, height: 20, borderRadius: 50
                            }}
                        />
                    </RadioButton>
                ))}
            </RadioForm>
        )
    }
}

const styles = StyleSheet.create({

    radioBtn: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
        borderRadius: 50
    },

    readioWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});