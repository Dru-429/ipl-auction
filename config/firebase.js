import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const apiKey = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "auckit-ipl-auction.firebaseapp.com",
  projectId: "auckit-ipl-auction",
  storageBucket: "auckit-ipl-auction.firebasestorage.app",
  messagingSenderId: "878389457593",
  appId: "1:878389457593:web:beb767a3baa14cf06f2168",
  measurementId: "G-FX4JVLRSCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();