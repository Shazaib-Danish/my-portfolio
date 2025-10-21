// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhWU54i6_Mu78RNMhCTBIZ57QRVY8gz3Y",
  authDomain: "shazaib-portfolio.firebaseapp.com",
  projectId: "shazaib-portfolio",
  storageBucket: "shazaib-portfolio.firebasestorage.app",
  messagingSenderId: "647142065675",
  appId: "1:647142065675:web:f3c5cf36604d3f97f3e90e",
  measurementId: "G-P27VCWJ29D"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and export it
export const db = getFirestore(app);