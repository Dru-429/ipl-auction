// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXsL0xyqNQFL2GoLq6sGkxyWshrm5hvoQ",
  authDomain: "auckit-ipl-auction.firebaseapp.com",
  projectId: "auckit-ipl-auction",
  storageBucket: "auckit-ipl-auction.firebasestorage.app",
  messagingSenderId: "878389457593",
  appId: "1:878389457593:web:beb767a3baa14cf06f2168",
  measurementId: "G-FX4JVLRSCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);