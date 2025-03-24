// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLN4r7GFyKWmXdUIR3u0wGVYjR9b7z4D0",
    authDomain: "intflood.firebaseapp.com",
    databaseURL: "https://intflood-default-rtdb.firebaseio.com",
    projectId: "intflood",
    storageBucket: "intflood.appspot.com",
    messagingSenderId: "1008198051242",
    appId: "1:1008198051242:web:87f02c0cdcfa6872caf7d3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { db, storage };
