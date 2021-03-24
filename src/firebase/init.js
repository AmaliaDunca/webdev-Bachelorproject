import firebase from "firebase";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB4xQjJi5iaUO8QCuv3eRSRCIG_6P1cz-0",
  authDomain: "mapcar-1c2d9.firebaseapp.com",
  databaseURL: "https://mapcar-1c2d9.firebaseio.com",
  projectId: "mapcar-1c2d9",
  storageBucket: "mapcar-1c2d9.appspot.com",
  messagingSenderId: "676941925673",
  appId: "1:676941925673:web:d71c8da1a52fda234c7b38"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
