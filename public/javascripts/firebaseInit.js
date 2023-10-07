// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqeGGrbfOSNF7cX9yAkjyjl6ZYXlBLqh4",
  authDomain: "fir-53e93.firebaseapp.com",
  projectId: "fir-53e93",
  storageBucket: "fir-53e93.appspot.com",
  messagingSenderId: "763339251148",
  appId: "1:763339251148:web:48688c38e1c947a8a41169",
  measurementId: "G-J920S86QMP"
};
//내 디비 설정//
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);