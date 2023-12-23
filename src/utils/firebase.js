// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuvRjVJvMyE3AC4MRoKlmV4ddceKSkn5U",
  authDomain: "netflixgpt-1802c.firebaseapp.com",
  projectId: "netflixgpt-1802c",
  storageBucket: "netflixgpt-1802c.appspot.com",
  messagingSenderId: "477282455345",
  appId: "1:477282455345:web:6e2dbe3af5978357b0aa10",
  measurementId: "G-2BPHWVSEE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);