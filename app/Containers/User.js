import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPage from '../Components/UserPage';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import { Toast } from 'native-base';

import * as action from '../store/actions/users';

const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: '../images',
    },
};

class User extends Component {
    constructor(props) {
        super(props)
        const user = this.props.user.userDetails
        this.state = {
            avatarSource: this.props.user.userDetails.avatar,
            fullNameFlag: false,
            IDNumberFlag: false,
            passportFlag: false,
            alergiesFlag: false,
            shirtSizeFlag: false,
            shoeSizeFlag: false,
            phoneFlag: false,
            IDNumber: user.id_number,
            passport: user.passport_no,
            alergies: user.allergies,
            shirtSize: user.shirt_size,
            shoeSize: user.shoe_size,
            phone: user.phone,
            msg: ''
        }
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value, msg: "" })
    }

    changeFlag = (name) => {
        console.log('click')
        this.setState({ [name]: true })
    }

    changeChlidData = () => {
        console.log('chenge click')
        let { IDNumber, passport,  phone, alergies, shoeSize, shirtSize } = this.state
        let dataa = {
            id_number: IDNumber,
            passport_no: passport,
            allergies: alergies,
            first_name: this.props.user.userDetails.first_name,
            last_name: this.props.user.userDetails.last_name,
            phone: phone,
            shoe_size: shoeSize,
            shirt_size: shirtSize,
            family_id: this.props.user.userDetails.family_id,
            child_id: this.props.user.userDetails.id
        }
        console.log('data', dataa)
        this.props.changeChlidData(dataa, this.props.user.data.token)
    }

    selectImage = () => {
        console.log('sel')
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri.uri };
                this.onUpoladImage(response);
            }
        });
    }

    onUpoladImage = (image) => {
        let id = this.props.user.userDetails.id
        RNFetchBlob.fetch('POST', 'http://myworks.site/dev/calendar_based_api/public/api/profile', {
            Authorization: `Bearer ${this.props.user.data.token}`,
            'Content-Type': 'multipart/form-data',
        }, [{ name: 'avatar', filename: image.fileName, type: image.type, data: image.data },
        { name: 'child_id', data: id.toString()},
            ]).then((res) => {
                let response = JSON.parse(res.data)
                console.log('image', response.success.avatar)
                this.setState({ avatarSource: response.success.avatar })
                this.props.uploadimage(response.success.avatar)
            }).catch((err) => {
                console.log('err upload', err)
            })
    }

    render() {
        console.log('user state', this.props.user.userDetails.avatar)
        return (
            <UserPage
                user={this.props.user.userDetails}
                changeFlag={this.changeFlag}
                inputChange={this.inputChange}
                avatarSource={this.state.avatarSource}
                props={{
                    fullNameFlag: this.state.fullNameFlag,
                    IDNumberFlag: this.state.IDNumberFlag,
                    passportFlag: this.state.passportFlag,
                    alergiesFlag: this.state.alergiesFlag,
                    shirtSizeFlag: this.state.shirtSizeFlag,
                    shoeSizeFlag: this.state.shoeSizeFlag,
                    phoneFlag: this.state.phoneFlag,
                    IDNumber: this.state.IDNumber,
                    passport: this.state.passport,
                    alergies: this.state.alergies,
                    shirtSize: this.state.shirtSize,
                    shoeSize: this.state.shoeSize,
                    phone: this.state.phone
                }}
                changeChlidData={this.changeChlidData}
                selectImage={this.selectImage}
            />
        )
    }
}



mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        changeChlidData: (data, token) => {
            action.changeChlidData(dispatch, data, token)
        },
        uploadimage: (data) => {
            action.uploadChildimage(dispatch, data)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(User)