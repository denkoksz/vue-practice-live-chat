import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD0r6AK81F8bdXA4_eUqseRdOs5yEkP37E",
    authDomain: "udemy-vue-firebase-sites-63609.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-63609",
    storageBucket: "udemy-vue-firebase-sites-63609.appspot.com",
    messagingSenderId: "67801261022",
    appId: "1:67801261022:web:24e074476c87c1a81bf34f",
    measurementId: "G-YP78Z8GJW5"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// ini firestore
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const projectAuth = firebase.auth();

export {projectFirestore, projectAuth, timestamp};