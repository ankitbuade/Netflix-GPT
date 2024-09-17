// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW1zNBGSlh9vYwMPhzvd0Ev7I3nx3bAqQ",
  authDomain: "netflix-gpt-e49d2.firebaseapp.com",
  projectId: "netflix-gpt-e49d2",
  storageBucket: "netflix-gpt-e49d2.appspot.com",
  messagingSenderId: "902224109460",
  appId: "1:902224109460:web:15d1a585ecc2c4e4dbf981",
  measurementId: "G-L0W4WLBQCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();