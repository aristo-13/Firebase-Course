import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_kxzndlWpnPfQF7j7aiyTF1RUFKB0adQ",
  authDomain: "fir-course-f1a9d.firebaseapp.com",
  projectId: "fir-course-f1a9d",
  storageBucket: "fir-course-f1a9d.appspot.com",
  messagingSenderId: "58751690014",
  appId: "1:58751690014:web:01bc6a5bcb88735b38550f",
  measurementId: "G-19TPW49JJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()
export const db = getFirestore(app)