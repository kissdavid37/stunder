//import { initializeApp } from "firebase/app";
import  firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtz7F-NQWctUAPD1uhNqLhuVfsrVjfo5I",
  authDomain: "stunder-d1c9c.firebaseapp.com",
  //databaseURL: "https://stunder-d1c9c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stunder-d1c9c",
  storageBucket: "stunder-d1c9c.appspot.com",
  messagingSenderId: "694821500501",
  appId: "1:694821500501:web:c4df6333627586bc8606dc",
  measurementId: "G-89L7PPQDY2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) //firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database; 