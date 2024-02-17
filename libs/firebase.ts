// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7-LCDlDW5j1HKqVKt1WV3yIfqQlGejak",
    authDomain: "balozi-publishers.firebaseapp.com",
    projectId: "balozi-publishers",
    storageBucket: "balozi-publishers.appspot.com",
    messagingSenderId: "236353281899",
    appId: "1:236353281899:web:e5d899c974c8fa12adb62e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
