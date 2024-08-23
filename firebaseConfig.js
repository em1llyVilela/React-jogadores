// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqCsfDx76hjZe3tGKZ4ifHmEBC6DH1SX4",
  authDomain: "auth-firebase-projeto-au-ebe31.firebaseapp.com",
  projectId: "auth-firebase-projeto-au-ebe31",
  storageBucket: "auth-firebase-projeto-au-ebe31.appspot.com",
  messagingSenderId: "61091786666",
  appId: "1:61091786666:web:8aa6f484c12706d5e3c5d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;