import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBa2MhS5NvJB_7vOfjmVRBNjWEKolDQZs8",
    authDomain: "challenge-ba0ee.firebaseapp.com",
    projectId: "challenge-ba0ee",
    storageBucket: "challenge-ba0ee.appspot.com",
    messagingSenderId: "597259665218",
    appId: "1:597259665218:web:0c3ff9f60b6b61afc712db"
  };
  
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
