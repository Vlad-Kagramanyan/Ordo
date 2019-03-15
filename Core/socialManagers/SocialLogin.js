// import FacebookManager from '../facebook/FacebookManager';
import GoogleManager from './GoogleManager';
// import TwitterManager from '../twitter/TwitterManager';
import SocialConstants from '../../constants/social';


// export const  facebookLogin = () =>{
//     FacebookManager.login()
//         .then(result => {
//             console.log(result);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }

export const googleLogin =() => {
    GoogleManager.login({
        iosClientId: SocialConstants.google.iosClientId,
        webClientId: SocialConstants.google.webClientId
    })
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
}

// export const twitterLogin = () =>{
//     TwitterManager.login({
//         consumerKey: SocialConstants.twitter.consumerKey,
//         consumerSecret: SocialConstants.twitter.consumerSecret
//     })
//         .then(result => {
//             console.log(result);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }