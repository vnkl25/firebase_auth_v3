// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA58VZ9Z8UuUSBO-gvuiofvYijmKGdsfPk",
  authDomain: "fir-auth-v3-a4a66.firebaseapp.com",
  projectId: "fir-auth-v3-a4a66",
  storageBucket: "fir-auth-v3-a4a66.firebasestorage.app",
  messagingSenderId: "537801807751",
  appId: "1:537801807751:web:ef8da88ef384c0ce5da522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
export { db, doc, setDoc, collection, getDocs };


