// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMgHG5oHaqM7CcnnJqzZPBkKwLkNVm31c",
  authDomain: "examenpractico-536a9.firebaseapp.com",
  projectId: "examenpractico-536a9",
  storageBucket: "examenpractico-536a9.appspot.com",
  messagingSenderId: "994852665387",
  appId: "1:994852665387:web:45fac893f6049f7f27926e",
  measurementId: "G-6JB3TVBYFP"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app=firebase.app();
}

const auth = firebase.auth();

export { auth }