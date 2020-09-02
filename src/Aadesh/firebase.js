import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBYN9QtYVQQXlDyzXeELyksr9l6Pgcyz-g",
    authDomain: "movie-page-36f74.firebaseapp.com",
    databaseURL: "https://movie-page-36f74.firebaseio.com",
    projectId: "movie-page-36f74",
    storageBucket: "movie-page-36f74.appspot.com",
    messagingSenderId: "231089585328",
    appId: "1:231089585328:web:c17181a70b7a4e0bd18f75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth;
  const db=firebase.firestore;

  export default firebase;