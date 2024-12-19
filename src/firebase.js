// src/firebase.js

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT6GUgk_R_gdlR3eChYa9_3jh4_SjvHvY",
  authDomain: "social-network-19dd2.firebaseapp.com",
  projectId: "social-network-19dd2",
  storageBucket: "social-network-19dd2.firebasestorage.app",
  messagingSenderId: "244634889090",
  appId: "1:244634889090:web:74f98c36aac7c007e1bd9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app); // Authentication
export const db = getFirestore(app); // Firestore Database
export const storage = getStorage(app); // Storage
export default app;
