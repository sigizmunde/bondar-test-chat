import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxJWenSfyg0bStQkdjM3cL3eTzWapET3I",
  authDomain: "test-chat-3ed88.firebaseapp.com",
  projectId: "test-chat-3ed88",
  storageBucket: "test-chat-3ed88.appspot.com",
  messagingSenderId: "919579387674",
  appId: "1:919579387674:web:85a19d4e0de03eff36aea3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const firestore = firebase.firestore();
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();
