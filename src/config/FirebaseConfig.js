import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAlvV9eS3KLWl6JOgV6yHopTIC9PRahnP8",
    authDomain: "webraceapp.firebaseapp.com",
    databaseURL: "https://webraceapp.firebaseio.com",
    projectId: "webraceapp",
    storageBucket: "webraceapp.appspot.com",
    messagingSenderId: "1054099649668",
    appId: "1:1054099649668:web:ad70585e156694a5aefed1",
    measurementId: "G-BJ3BKN4VSQ"
};
firebase.initializeApp(config);

export default firebase