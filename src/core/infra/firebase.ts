// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDRI8hmXUaLbfkE6AX3RiKnjwyt8tjs5Go",
    authDomain: "devwest-barbas.firebaseapp.com",
    projectId: "devwest-barbas",
    storageBucket: "devwest-barbas.firebasestorage.app",
    messagingSenderId: "195720176887",
    appId: "1:195720176887:web:6a3b2152a4b5328bb89ff2",
    measurementId: "G-377C65K50Y",
  };

  // Initialize Firebase ---------------------------
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);