import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY2M2E0NTk2OWRkMDM2MDhjYmUyMzlkM2U3MmFlYjAyOWJhZWY5ZWYxOWExNDIwNDJmNmJhZGZjMDkxNDI0M2FkZTlmMjMxMWMzYzViZWIxIn0.eyJhdWQiOiIxIiwianRpIjoiNjYzYTQ1OTY5ZGQwMzYwOGNiZTIzOWQzZTcyYWViMDI5YmFlZjllZjE5YTE0MjA0MmY2YmFkZmMwOTE0MjQzYWRlOWYyMzExYzNjNWJlYjEiLCJpYXQiOjE1NTIyOTQ4ODUsIm5iZiI6MTU1MjI5NDg4NSwiZXhwIjoxNTgzOTE3Mjg1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.Y1IIQlOqT6jDHnXmfM5mDslJtJFyoJmDGO7UIowWoTCi8m0mS14glvuTOp2-H0yWnjnANWRxeqnHOohSmlK5F-l4DcOtaYxfpL68a56Z1isAegXvaJXmZFgR35ldG8RKsvlAlaTcJPHg745ChTe2PqlDuX2bWw0jIAGh9e_vCy3WKdYq6_HVbImkt1_qR_SxaHvRu4wIMiRxOxIhUQYBcvWE08Nj9LGSlbjRZRO8Hx27iIhdeSu7crUNflgb8LgaUjhMzVDjqc28OD1etSIHxbv3F2yRDUv5HLpNUPMpp6bWUAKSSJGgtKqNleBxDDC7CTpKhG-lkV6-smVC2XHvXsE7jV0bERfKKcqjpewDswBSCaH-GPcO-ru68-f6t1r-Rbg2YD_Ee0Shurjgp0V9oJ1T21FpWlrBZTrbRNIQimImoacHjxPDQmnX3_AoQh39qMReQny3lXetoqoohtLCIcJLrYqytO7WKGDRb8Wdneaw8NOVKFZKQcBR4o0PlCeupB7JRQckSKLaruZ-jwpiADtSApYNfy7LmfsugafDNjfEBMHeKyvEVr6rhlW4L6sQJCjNZo1Ig8RemMZ26le-F9goB2vnbVXYLr2VkztSv-NTLdzmMGhPMG1hnY41-54jOaKQJ_CQA8tsD60V3GnxCJabmfKc8jCbHa2qmmbw-tU"

const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: '../images',
    },
};

onUpoladImage = (image) => {
    console.log('upload req', image.type, image.data)
    RNFetchBlob.fetch('POST', 'http://myworks.site/dev/calendar_based_api/public/api/profile', {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    }, [{ name: 'avatar', filename: image.fileName, type: image.type, data: image.data },
        ]).then((resp) => {
            console.log('res', resp)
        }).catch((err) => {
            console.log('err', err)
        })
}

export default selectImage = (that) => {
    console.log(that)
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            const source = { uri: response.uri };
            console.log('source img', response)
            that.setState({
                avatarSource: source,
                data: response.data
            }, onUpoladImage(response));
        }
    });
}

