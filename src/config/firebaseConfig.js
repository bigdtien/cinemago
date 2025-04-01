import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtmmqcdl6sIl6vDKWkn-qNcYRhmweBNiQ",
    authDomain: "cinemago-f4124.firebaseapp.com",
    projectId: "cinemago-f4124",
    storageBucket: "cinemago-f4124.firebasestorage.app",
    messagingSenderId: "775099810840",
    appId: "1:775099810840:web:99fe7962973d931ac0ef6d",
    measurementId: "G-SF4N5JF5FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();