import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABVj2BSj3Z23QwimueFCgVQm-5GAcagPI",
    authDomain: "sm41-decaa.firebaseapp.com",
    databaseURL: "https://sm41-decaa.firebaseio.com",
    projectId: "sm41-decaa",
    storageBucket: "sm41-decaa.appspot.com",
    messagingSenderId: "1012633117241",
    appId: "1:1012633117241:web:757a2e8324c8d5852723e8"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
  firebase,
  db
};
