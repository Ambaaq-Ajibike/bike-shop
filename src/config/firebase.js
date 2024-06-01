// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2BF3LG_UPgBmpTIpJaeXuE06X_SN4VVI",
  authDomain: "bike-shop-e4721.firebaseapp.com",
  projectId: "bike-shop-e4721",
  storageBucket: "bike-shop-e4721.appspot.com",
  messagingSenderId: "728931678978",
  appId: "1:728931678978:web:79156c6d63262e1d1f601b",
  measurementId: "G-LMCV36LXL5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);