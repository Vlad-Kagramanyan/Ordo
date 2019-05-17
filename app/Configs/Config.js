const BaseUrl = "http://myworks.site/dev/calendar_based_api/public/api/";

const CalendarConfig = {
    "clientId": "754005300243-85vlpdaf38bbcplbgaa7s3t7pkphgk11.apps.googleusercontent.com",
    "apiKey": "AIzaSyBJaJYyMwL3oq-lZqk64fTeNkKkeyvKG3k",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
}

const GoogleSigninConfig = {
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        client_id: "754005300243-85vlpdaf38bbcplbgaa7s3t7pkphgk11.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
}


export default {
    BaseUrl,
    CalendarConfig,
    GoogleSigninConfig
}