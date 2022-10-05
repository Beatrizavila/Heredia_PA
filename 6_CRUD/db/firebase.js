import { initializeApp } from 'firebase/app';
import { getFireStore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1SBcscu_hrUI0jBMUoDqsMqqOHhUJSt8",
    authDomain: "nativebase-60e64.firebaseapp.com",
    projectId: "nativebase-60e64",
    storageBucket: "nativebase-60e64.appspot.com",
    messagingSenderId: "247248993690",
    appId: "1:247248993690:web:a11a74507a256b0e414e23"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }
export const db = getFireStore();