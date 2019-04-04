import React, { Component } from 'react';
import SettingsPage from '../Components/SettingsPage';

class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            googleMerge: false,
            childDays: [
                { day: 'mo', valName: 'selectedMunRadioBtn', show: false, on: false },
                { day: 'tu', valName: 'selectedTueRadioBtn', show: false, on: false },
                { day: 'we', valName: 'selectedWedRadioBtn', show: false, on: false },
                { day: 'th', valName: 'selectedThuRadioBtn', show: false, on: false },
                { day: 'fr', valName: 'selectedSutRadioBtn', show: false, on: false },
                { day: 'sa', valName: 'selectedSutRadioBtn', show: false, on: false },
                { day: 'su', valName: 'selectedSunRadioBtn', show: false, on: false }
            ],
        }
    }

    handleCheckbox = () => {
        this.setState({ googleMerge: !this.state.googleMerge })
    }

    render() {
        return (
            <SettingsPage
                childDays={this.state.childDays}
                googleMerge={this.state.googleMerge}
                handleCheckbox={this.handleCheckbox}
            />
        )
    }
}

export default Settings;