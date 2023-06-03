
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBqGc0sSIkHUnrKL06Pnf1T2LszC6O4iQc",
    authDomain: "prevent-453a8.firebaseapp.com",
    projectId: "prevent-453a8",
    storageBucket: "prevent-453a8.appspot.com",
    messagingSenderId: "724052294472",
    appId: "1:724052294472:web:a430f878ce34064070917d",
    measurementId: "G-SDYBQEPH0H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)