import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdx4mGBxa8cVTzOiFUmOgjgtuLor0Lcqk",
  authDomain: "image-93951.firebaseapp.com",
  databaseURL: "https://image-93951-default-rtdb.firebaseio.com",
  projectId: "image-93951",
  storageBucket: "image-93951.appspot.com",
  messagingSenderId: "1090692764988",
  appId: "1:1090692764988:web:7f81fa63db3ef1c8e1fa39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
