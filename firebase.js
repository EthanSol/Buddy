import firebase from 'firebase/app';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBnHlUl2ai1rTNNtseO9lU30aqt6TODoU0",
    authDomain: "buddybackendnuvention.firebaseapp.com",
    databaseURL: "https://buddybackendnuvention-default-rtdb.firebaseio.com",
    projectId: "buddybackendnuvention",
    storageBucket: "buddybackendnuvention.appspot.com",
    messagingSenderId: "475443101632",
    appId: "1:475443101632:web:aa4c8d7dea12007fa39225"
};

firebase.initializeApp(firebaseConfig);

export { firebase };