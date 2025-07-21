// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP0nFri_kndq1y-JkJvQFaXI-ej5lz1xs",
  authDomain: "netflixgpt-4cd5d.firebaseapp.com",
  projectId: "netflixgpt-4cd5d",
  storageBucket: "netflixgpt-4cd5d.firebasestorage.app",
  messagingSenderId: "564175993021",
  appId: "1:564175993021:web:57d71b34967c5288955fd4",
  measurementId: "G-NY28L8PNWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
