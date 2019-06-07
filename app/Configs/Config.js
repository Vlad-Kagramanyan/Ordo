const BaseUrl = "http://myworks.site/dev/calendar_based_api/public/api/";

const GoogleSigninConfig = {
    scopes: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/calendar.addons.execute', 'profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: "960243287688-06j5kfv49p1m79pa4f7d47eva6mrkmn2.apps.googleusercontent.com",
    forceCodeForRefreshToken: true,
    offlineAccess: true
}

const firebaseConfig = {
    apiKey: "AIzaSyBycRv35rgQ7wyEX2hCWuMSvS5OyLny9sk",
    authDomain: "ordo-1558955690640.firebaseapp.com",
    databaseURL: "https://ordo-1558955690640.firebaseio.com",
    projectId: "ordo-1558955690640",
    storageBucket: "ordo-1558955690640.appspot.com",
    messagingSenderId: "960243287688",
    appId: "1:960243287688:web:9e67a01f1865ec25"
};


export default {
    BaseUrl,
    GoogleSigninConfig,
    firebaseConfig
}