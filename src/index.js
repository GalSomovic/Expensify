// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJFF5Uu7nj3z0AWzw-ueugBUuW6S7GAp0",
    authDomain: "expensify-86198.firebaseapp.com",
    projectId: "expensify-86198",
    storageBucket: "expensify-86198.appspot.com",
    messagingSenderId: "505683998272",
    appId: "1:505683998272:web:dff210d4cbd2b4b5e291a5",
    measurementId: "G-2W4B0577SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);