// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKrqMTcscqtoCpsNB2ljrR5H7XzkLOv18",
  authDomain: "mern-book-inventory-34dd3.firebaseapp.com",
  projectId: "mern-book-inventory-34dd3",
  storageBucket: "mern-book-inventory-34dd3.appspot.com",
  messagingSenderId: "523089628118",
  appId: "1:523089628118:web:697f3d04816d1c8ff1f277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;