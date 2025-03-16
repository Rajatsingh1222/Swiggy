// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFmVSx8FF48ytqGfgmvu-xujuBTbi_QqI",
  authDomain: "swiggy-clone-dbbb9.firebaseapp.com",
  projectId: "swiggy-clone-dbbb9",
  storageBucket: "swiggy-clone-dbbb9.firebasestorage.app",
  messagingSenderId: "923718893712",
  appId: "1:923718893712:web:7b8d5e570fe929e5ca9815",
  measurementId: "G-5042G4N3H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);