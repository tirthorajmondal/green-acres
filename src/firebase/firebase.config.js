// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYZZJ783yY7mjaJMROyKjv2EaPp0_2YLw",
    authDomain: "green-acres-7b599.firebaseapp.com",
    projectId: "green-acres-7b599",
    storageBucket: "green-acres-7b599.appspot.com",
    messagingSenderId: "13533892632",
    appId: "1:13533892632:web:22012a20aabfc167f2f36d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;