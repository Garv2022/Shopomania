import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsSkg5A6spN2Pt3Z0Mrm1hrlcmnEA9tfQ",
    authDomain: "shopomania-78ceb.firebaseapp.com",
    projectId: "shopomania-78ceb",
    storageBucket: "shopomania-78ceb.appspot.com",
    messagingSenderId: "863903189870",
    appId: "1:863903189870:web:b98aa74a6e6a4c12facf7f",
    measurementId: "G-HGYCHQ3H7V"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } ;