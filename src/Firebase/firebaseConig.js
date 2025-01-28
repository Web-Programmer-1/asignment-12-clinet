// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env. VITE_apiKey,
  authDomain: import.meta.env. VITE_authDomain,
  projectId: import.meta.env. VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;































// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA1R5OJC4dEwU_zi6KcqSGTgfOaDUN5UtM",
//   authDomain: "asignment-12-975a1.firebaseapp.com",
//   projectId: "asignment-12-975a1",
//   storageBucket: "asignment-12-975a1.firebasestorage.app",
//   messagingSenderId: "657560094133",
//   appId: "1:657560094133:web:d6ff0d678460a8205345fc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
