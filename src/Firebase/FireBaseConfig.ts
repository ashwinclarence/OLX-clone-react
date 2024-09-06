// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1jumtNSFd0TzJpNR1l4AE4mX3QsQIP-o",
  authDomain: "olx-clone-8f231.firebaseapp.com",
  projectId: "olx-clone-8f231",
  storageBucket: "olx-clone-8f231.appspot.com",
  messagingSenderId: "945058189246",
  appId: "1:945058189246:web:96e45e6c53515d5a5873ef",
  measurementId: "G-03XVW3TFV4",
};
// const firebaseConfig1 = {
//   apiKey: import.meta.env.VITE_FIREBASE_API,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_FIREBASE_APPID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();


// product ref 
export const productRef = doc(collection(db, "products"));