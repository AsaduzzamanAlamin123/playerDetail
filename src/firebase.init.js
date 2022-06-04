// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUbkrN41HIuRV-usVT2lUnSw6h1Rjd0S4",
  authDomain: "meal-db-auth-fa5c5.firebaseapp.com",
  projectId: "meal-db-auth-fa5c5",
  storageBucket: "meal-db-auth-fa5c5.appspot.com",
  messagingSenderId: "608899944516",
  appId: "1:608899944516:web:50d3c5a8cd8ef32f16ac11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;