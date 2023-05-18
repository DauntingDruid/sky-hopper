// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi9tylGdUGTcl8GCnIL6NwEiSrc_MvxwE",
  authDomain: "skyhopper-2e4e2.firebaseapp.com",
  projectId: "skyhopper-2e4e2",
  storageBucket: "skyhopper-2e4e2.appspot.com",
  messagingSenderId: "266139542555",
  appId: "1:266139542555:web:26a6a82ccc9d2ac305c4be",
  measurementId: "G-WC46DEKFT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();