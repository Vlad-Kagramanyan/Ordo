import {GoogleSignin} from 'react-native-google-signin';

class GoogleManager {
  constructor(){

  }

// Function for generate object for return

  generateObjectForReturn(bool, msg, data){
    if(bool){
      return {
        success: true,
        message: null,
        data: data || null
      };
    }
    else{
      return {
        success: false,
        message: msg,
        data: null
      }
    }
  }

// Function for log in with google+

// Object example for configObject argument
//
// const configObject = {
//     scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
//     iosClientId: from SocialConstants file of constants folder ---- <FROM DEVELOPER CONSOLE>, // only for iOS
//     webClientId: from SocialConstants file of constants folder ---- <FROM DEVELOPER CONSOLE>, // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     hostedDomain: '' // specifies a hosted domain restriction
//     forceConsentPrompt: true // [Android] if you want to show the authorization prompt at each login
//     accountName: '' // [Android] specifies an account name on the device that should be used
// }


// iosClientId: from SocialConstants file of constants folder
// webClientId: from SocialConstants file of constants folder

  login(configObject){
    return new Promise((resolve, reject)=>{
      GoogleSignin.configure(configObject)
      .then(()=>{
        GoogleSignin.signIn()
              .then(userDetails => {
                let user = {
                  name: userDetails.name,
                  id: userDetails.id,
                  pictureUrl: userDetails.photo,
                  email: userDetails.email
                };
                return resolve(this.generateObjectForReturn(true, null, user));
              })
              .catch(err => {
                return reject(this.generateObjectForReturn(false, err, null));
              })
              .done();
      })
    });
  }

// Function for log out from google+

  logOut(){
    return new Promise((resolve, reject)=>{
      GoogleSignin.signOut()
        .then(() => {
          return resolve(this.generateObjectForReturn(true, null, null));
        })
        .catch((err) => {
          return reject(this.generateObjectForReturn(false, err, null));
        });
    });
  }

  share(){
    // TODO
  }
}

export default new GoogleManager();