// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLuWD_-FJj8B87O89J1oFU8_2OFsK5VFY",
  authDomain: "bike-world-8d71e.firebaseapp.com",
  projectId: "bike-world-8d71e",
  storageBucket: "bike-world-8d71e.firebasestorage.app",
  messagingSenderId: "462476026816",
  appId: "1:462476026816:web:0388d5535c467c2fe15e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();