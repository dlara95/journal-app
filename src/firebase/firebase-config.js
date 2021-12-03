import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCd_gThIa5qqy9Upogtbo_gKhMzAynOrPQ",
    authDomain: "react-app-cursos-11dd8.firebaseapp.com",
    projectId: "react-app-cursos-11dd8",
    storageBucket: "react-app-cursos-11dd8.appspot.com",
    messagingSenderId: "91789751747",
    appId: "1:91789751747:web:4797ca860241bb9f1df976"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}