import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingsPage from '../Components/SettingsPage';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY2M2E0NTk2OWRkMDM2MDhjYmUyMzlkM2U3MmFlYjAyOWJhZWY5ZWYxOWExNDIwNDJmNmJhZGZjMDkxNDI0M2FkZTlmMjMxMWMzYzViZWIxIn0.eyJhdWQiOiIxIiwianRpIjoiNjYzYTQ1OTY5ZGQwMzYwOGNiZTIzOWQzZTcyYWViMDI5YmFlZjllZjE5YTE0MjA0MmY2YmFkZmMwOTE0MjQzYWRlOWYyMzExYzNjNWJlYjEiLCJpYXQiOjE1NTIyOTQ4ODUsIm5iZiI6MTU1MjI5NDg4NSwiZXhwIjoxNTgzOTE3Mjg1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.Y1IIQlOqT6jDHnXmfM5mDslJtJFyoJmDGO7UIowWoTCi8m0mS14glvuTOp2-H0yWnjnANWRxeqnHOohSmlK5F-l4DcOtaYxfpL68a56Z1isAegXvaJXmZFgR35ldG8RKsvlAlaTcJPHg745ChTe2PqlDuX2bWw0jIAGh9e_vCy3WKdYq6_HVbImkt1_qR_SxaHvRu4wIMiRxOxIhUQYBcvWE08Nj9LGSlbjRZRO8Hx27iIhdeSu7crUNflgb8LgaUjhMzVDjqc28OD1etSIHxbv3F2yRDUv5HLpNUPMpp6bWUAKSSJGgtKqNleBxDDC7CTpKhG-lkV6-smVC2XHvXsE7jV0bERfKKcqjpewDswBSCaH-GPcO-ru68-f6t1r-Rbg2YD_Ee0Shurjgp0V9oJ1T21FpWlrBZTrbRNIQimImoacHjxPDQmnX3_AoQh39qMReQny3lXetoqoohtLCIcJLrYqytO7WKGDRb8Wdneaw8NOVKFZKQcBR4o0PlCeupB7JRQckSKLaruZ-jwpiADtSApYNfy7LmfsugafDNjfEBMHeKyvEVr6rhlW4L6sQJCjNZo1Ig8RemMZ26le-F9goB2vnbVXYLr2VkztSv-NTLdzmMGhPMG1hnY41-54jOaKQJ_CQA8tsD60V3GnxCJabmfKc8jCbHa2qmmbw-tU"
import selectImage from '../Utils/imageUpload';

import * as action from '../store/actions/users';

const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: '../images',
    },
};

class Settings extends Component {
    constructor(props) {
        super(props)
        const user = this.props.user.data.activeUser[0]
        this.state = {
            avatar: 'data:image/jpeg;base64,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',
            avatarSource: this.props.user.data.activeUser[0].avatar,
            data: null,
            dayValue: 1,
            email: user.email,
            msg: "",
            password: "",
            newPassword: "",
            confirmPassword: user.password,
            lastName: user.last_name,
            firstName: user.first_name,
            googleMerge: false,
            emailFlag: false,
            lastNameFlag: false,
            firstNameFlag: false,
            passwordFlag: false,
            childDays: [
                { day: 'mo', on: false, },
                { day: 'tu', on: false, },
                { day: 'we', on: false, },
                { day: 'th', on: false, },
                { day: 'fr', on: false, },
                { day: 'sa', on: false, },
                { day: 'su', on: false, },
            ],
        }
    }

    handleRadio = (value) => {
        let arr = Object.assign([], this.state.childDays)
        arr.map(item => (
            item.on = false
        ))
        arr[value].on = true;
        this.setState({ childDays: arr, dayValue: value + 1 })
    }

    reset = () => {
        const user = this.props.user.data.activeUser[0]
        this.setState({
            email: user.email,
            msg: "",
            password: user.password,
            confirmPassword: user.password,
            lastName: user.last_name,
            firstName: user.first_name,
            googleMerge: false,
            emailFlag: false,
            lastNameFlag: false,
            firstNameFlag: false,
            passwordFlag: false,
        })
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value, msg: "" })
    }

    handleCheckbox = () => {
        this.setState({ googleMerge: !this.state.googleMerge })
    }

    changeUserData = () => {
        let { email, dayValue, lastName, firstName, password, newPassword, googleMerge } = this.state
        googleMerge = googleMerge ? 1 : 0
        let data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            start_week_day: dayValue,
            merge_with_google: googleMerge,
        }
        console.log('password', password)

        if (password.length > 0) {
            data.password = password,
                data.newPassword = newPassword
        }
        console.log('data', data)
        // this.props.changeUserData(data)
    }

    changeFlag = (name) => {
        this.setState({ [name]: true })
    }

    selectImage = () => {
        console.log('sel')
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri.uri };
                console.log('source img', response)
                this.setState({
                    data: response.data
                }, this.onUpoladImage(response));
            }
        });
    }

    onUpoladImage = (image) => {
        RNFetchBlob.fetch('POST', 'http://myworks.site/dev/calendar_based_api/public/api/profile', {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }, [{ name: 'avatar', filename: image.fileName, type: image.type, data: image.data },
            { name : 'parent_id', data : '93'},
            ]).then((res) => {
                console.log('res', res)
                // this.props.uploadimage(res.data.success.avatar)
            }).catch((err) => {
                console.log('err', err)
            })
    }

    render() {
        console.log('props', this.props.user.data.family.childs)
        return (
            <SettingsPage
                childDays={this.state.childDays}
                googleMerge={this.state.googleMerge}
                handleCheckbox={this.handleCheckbox}
                inputChange={this.inputChange}
                changeUserData={this.changeUserData}
                user={this.props.user.data.activeUser[0]}
                emailFlag={this.state.emailFlag}
                lastNameFlag={this.state.lastNameFlag}
                firstNameFlag={this.state.firstNameFlag}
                passwordFlag={this.state.passwordFlag}
                changeFlag={this.changeFlag}
                handleRadio={this.handleRadio}
                avatarSource={this.state.avatarSource}
                selectImage={this.selectImage}
                avatar={this.state.avatar}
            />
        )
    }
}

mapStateToProps = (state) => {
    return {
        user: state
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        changeUserData: (data) => {
            action.changeUserData(dispatch, data)
        },
        uploadimage: (data) => {
            action.uploadimage(dispatch, data)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings)