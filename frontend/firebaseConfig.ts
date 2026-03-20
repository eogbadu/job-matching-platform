// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFm1OKh1Ov1ZMhLngv7AIUDnymN_R0o6g",
  authDomain: "job-matching-1dcf5.firebaseapp.com",
  projectId: "job-matching-1dcf5",
  storageBucket: "job-matching-1dcf5.firebasestorage.app",
  messagingSenderId: "515034976710",
  appId: "1:515034976710:web:578eb904712285254362c7",
  measurementId: "G-C2156MPRQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth};