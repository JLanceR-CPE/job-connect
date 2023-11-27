// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbT57kDCg_EZVLHlFgkwydLeReZPxZcgY",
  authDomain: "jobconnect-3933b.firebaseapp.com",
  projectId: "jobconnect-3933b",
  storageBucket: "jobconnect-3933b.appspot.com",
  messagingSenderId: "39315073502",
  appId: "1:39315073502:web:9cfb680677a239ae3a554f",
  measurementId: "G-EQJ40G8KZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore DB
export const db = getFirestore(app)