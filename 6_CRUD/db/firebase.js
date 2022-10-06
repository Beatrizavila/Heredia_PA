import { initializeApp } from 'firebase/app';
/*import { getFireStore } from '@firebase/app';
import { getAuth } from '@firebase/auth';*/
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyC1SBcscu_hrUI0jBMUoDqsMqqOHhUJSt8",
    authDomain: "nativebase-60e64.firebaseapp.com",
    projectId: "nativebase-60e64",
    storageBucket: "nativebase-60e64.appspot.com",
    messagingSenderId: "247248993690",
    appId: "1:247248993690:web:a11a74507a256b0e414e23"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
/*const db = initializeApp.getFirestore()
const db = getFireStore(app);*/
export { auth }
/*export { db }*/
export const db = getFirestore(app);
