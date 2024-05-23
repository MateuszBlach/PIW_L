import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8-yR3SjnYHK9iG-X_Ea8hwTo32rG2zII",
  authDomain: "piwo-lab-bfe0b.firebaseapp.com",
  projectId: "piwo-lab-bfe0b",
  storageBucket: "piwo-lab-bfe0b.appspot.com",
  messagingSenderId: "618013495522",
  appId: "1:618013495522:web:3d21018b2faf2df1310ebb",
  measurementId: "G-6J7VRRE4HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
