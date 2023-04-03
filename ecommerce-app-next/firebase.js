// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQdBmU2w5Smt-NtmddQyf1SI6kSE32T8M",
  authDomain: "ecommerceapp-a0f67.firebaseapp.com",
  projectId: "ecommerceapp-a0f67",
  storageBucket: "ecommerceapp-a0f67.appspot.com",
  messagingSenderId: "544997777370",
  appId: "1:544997777370:web:4e9044a72698ea0c87eae3",
  measurementId: "G-V18H5XFMB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);